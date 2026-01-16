import { useState, useEffect } from "react";
import { getOrders, updateOrderStatus } from "@/utils/orderStorage"; // Updated import
import type { Order } from "@/utils/orderStorage";
import { ArrowUpDown, Filter, Search, Download, X, CheckCircle } from "lucide-react";

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState<{ key: keyof Order; direction: 'ascending' | 'descending' } | null>(null);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    // Fetch orders on mount
    useEffect(() => {
        const fetchedOrders = getOrders();
        setOrders(fetchedOrders);
    }, []);

    // Filter Logic
    const filteredOrders = orders.filter(order =>
        (order.items && order.items.some(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))) ||
        order.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (order.orderID && order.orderID.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleSort = (key: keyof Order) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedFilteredOrders = [...filteredOrders].sort((a, b) => {
        if (!sortConfig) return 0;
        const { key, direction } = sortConfig;
        
        let aValue: any = a[key] ?? '';
        let bValue: any = b[key] ?? '';

        // Handle specific fields if needed, e.g. dates
        
        if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
        return 0;
    });


    const handleStatusUpdate = (orderID: string, newStatus: Order['status']) => {
        updateOrderStatus(orderID, newStatus);
        setOrders(getOrders()); // Refresh list
        if (selectedOrder) {
            setSelectedOrder({ ...selectedOrder, status: newStatus });
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Header / Actions */}
            <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-xl font-bold text-gray-800">Customer Order Details (COD)</h2>
                <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-grow sm:flex-grow-0">
                        <input
                            type="text"
                            placeholder="Search orders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black w-full"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors">
                        <Filter size={18} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm font-medium transition-colors">
                        <Download size={18} /> Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                            <th className="p-4 border-b font-semibold cursor-pointer hover:bg-gray-100" onClick={() => handleSort('orderID')}>
                                Order ID <ArrowUpDown size={14} className="inline ml-1" />
                            </th>
                            <th className="p-4 border-b font-semibold">
                                Product Name
                            </th>
                            <th className="p-4 border-b font-semibold">Invoice No.</th>
                             <th className="p-4 border-b font-semibold">
                                Qty
                            </th>
                            <th className="p-4 border-b font-semibold">Drop Location</th>
                             <th className="p-4 border-b font-semibold">Payment</th>
                            <th className="p-4 border-b font-semibold">Status</th>
                            <th className="p-4 border-b font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {sortedFilteredOrders.length > 0 ? (
                            sortedFilteredOrders.map((order, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors border-b last:border-0">
                                    <td className="p-4 font-medium text-black">{order.orderID || order.invoiceNumber}</td>
                                    <td className="p-4">
                                        {/* Display items summary */}
                                        {order.items && order.items.length > 0 ? (
                                            <div>
                                                <div className="font-bold">{order.items[0].title}</div>
                                                {order.items.length > 1 && (
                                                    <div className="text-xs text-gray-500">+{order.items.length - 1} more items</div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-red-500 text-xs">No items</div>
                                        )}
                                    </td>
                                    <td className="p-4 font-mono text-gray-500">{order.invoiceNumber}</td>
                                    <td className="p-4">
                                        {order.items ? order.items.reduce((acc, i) => acc + i.quantity, 0) : 0}
                                    </td>
                                    <td className="p-4">{order.dropLocation}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${order.paymentMethod === 'COD' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                            {order.paymentMethod}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold 
                                            ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                                              order.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button onClick={() => setSelectedOrder(order)} className="text-blue-600 hover:text-blue-800 text-xs font-bold mr-2 uppercase">View Details</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="p-12 text-center text-gray-500">
                                    <div className="flex flex-col items-center">
                                        <p className="mb-2 text-lg">No orders found.</p>
                                        <p className="text-sm text-gray-400">Orders placed by customers will appear here.</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-end">
                <span className="text-xs text-gray-400">Showing {sortedFilteredOrders.length} entries</span>
            </div>

            {/* Detail Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-8 border-b border-gray-100 flex justify-between items-start sticky top-0 bg-white z-10">
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Order Details</h3>
                                <p className="text-gray-500 text-sm">ID: {selectedOrder.orderID || selectedOrder.invoiceNumber} • {selectedOrder.orderDate}</p>
                            </div>
                            <button onClick={() => setSelectedOrder(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8 grid md:grid-cols-3 gap-12">
                            {/* Left Col: Items */}
                            <div className="md:col-span-2 space-y-8">
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-6">Ordered Items</h4>
                                    <div className="space-y-6">
                                        {selectedOrder.items && selectedOrder.items.map((item, idx) => (
                                            <div key={idx} className="flex gap-6 items-start">
                                                <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                                                    <img src={item.image} className="w-full h-full object-cover" alt={item.title}/>
                                                </div>
                                                <div className="flex-1">
                                                    <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                                                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                                                        <span className="bg-gray-50 px-2 py-1 rounded">Qty: {item.quantity}</span>
                                                        <span className="bg-gray-50 px-2 py-1 rounded">Size: {item.size}</span>
                                                        <span className="bg-gray-50 px-2 py-1 rounded">Color: {item.color}</span>
                                                    </div>
                                                    <p className="font-bold text-sm">Rs {item.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border-t border-dashed border-gray-200 pt-6 flex justify-between items-center">
                                    <span className="font-bold uppercase tracking-widest text-xs text-black">Total Paid Amount</span>
                                    <span className="text-2xl font-black">Rs {selectedOrder.totalAmount}</span>
                                </div>
                            </div>

                            {/* Right Col: Customer & Actions */}
                            <div className="space-y-8">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-4">Customer Info</h4>
                                    <div className="space-y-3 text-sm">
                                        <p><span className="font-semibold text-gray-900">Name:</span> {selectedOrder.customerName}</p>
                                        <p><span className="font-semibold text-gray-900">Email:</span> {selectedOrder.email}</p>
                                        <p><span className="font-semibold text-gray-900">Phone:</span> {selectedOrder.phoneNumber}</p>
                                        <p><span className="font-semibold text-gray-900">Location:</span> {selectedOrder.dropLocation}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-4">Update Status</h4>
                                    <div className="space-y-3">
                                        {['Pending', 'Processing', 'Delivered', 'Cancelled'].map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => handleStatusUpdate(selectedOrder.orderID || selectedOrder.invoiceNumber, status as any)}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm font-bold transition-all ${
                                                    selectedOrder.status === status
                                                    ? 'bg-black text-white border-black ring-2 ring-offset-2 ring-black'
                                                    : 'bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black'
                                                }`}
                                            >
                                                {status}
                                                {selectedOrder.status === status && <CheckCircle size={16} />}
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-4 text-center">
                                        Updating status sends a notification to the customer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;
