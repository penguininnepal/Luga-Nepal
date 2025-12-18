
export interface Order {
    productID: string;
    productName: string;
    invoiceNumber: string;
    quantity: number;
    dropLocation: string;
    paymentMethod: "COD" | "Prepaid";
    status: "Pending" | "Delivered" | "Cancelled" | "Processing";
    customerName: string;
    orderDate: string;
    price: number;
    size: string;
    color: string;
}

const STORAGE_KEY = 'luga_nepal_orders';

export const getOrders = (): Order[] => {
    try {
        const orders = localStorage.getItem(STORAGE_KEY);
        return orders ? JSON.parse(orders) : [];
    } catch (error) {
        console.error("Failed to fetch orders:", error);
        return [];
    }
};

export const saveOrder = (order: Order): void => {
    try {
        const orders = getOrders();
        // Prepend new order to show it first
        const updatedOrders = [order, ...orders];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedOrders));
    } catch (error) {
        console.error("Failed to save order:", error);
    }
};

export const clearOrders = (): void => {
    localStorage.removeItem(STORAGE_KEY);
};
