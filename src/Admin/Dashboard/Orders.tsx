import { useState, useEffect } from "react";
import { getOrders } from "@/utils/orderStorage"; // Updated import
import type { Order } from "@/utils/orderStorage";
import { ArrowUpDown, Filter, Search, Download } from "lucide-react";

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState<{ key: keyof Order; direction: 'ascending' | 'descending' } | null>(null);

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
                            <th className="p-4 border-b font-semibold cursor-pointer hover:bg-gray-100" onClick={() => handleSort('productID')}>
                                Product ID <ArrowUpDown size={14} className="inline ml-1" />
                            </th>
                            <th className="p-4 border-b font-semibold cursor-pointer hover:bg-gray-100" onClick={() => handleSort('productName')}>
                                Product Name <ArrowUpDown size={14} className="inline ml-1" />
                            </th>
                            <th className="p-4 border-b font-semibold">Invoice No.</th>
                             <th className="p-4 border-b font-semibold cursor-pointer hover:bg-gray-100" onClick={() => handleSort('quantity')}>
                                Qty <ArrowUpDown size={14} className="inline ml-1" />
                            </th>
                            <th className="p-4 border-b font-semibold">Drop Location</th>
                             <th className="p-4 border-b font-semibold">Payment</th>
                            <th className="p-4 border-b font-semibold">Status</th>
                            <th className="p-4 border-b font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {/* 
                            Logic for fetching orders is now implemented via localStorage.
                            Depend on User Interactions: After User Check out and Place order the Products order detail will be added here.
                        */}
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
                                        <button className="text-blue-600 hover:text-blue-800 text-xs font-bold mr-2 uppercase">View</button>
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
        </div>
    );
};

export default Orders;
