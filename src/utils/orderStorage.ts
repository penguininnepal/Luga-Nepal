
import { type CartItem } from './cartStorage';
export type { CartItem };

export interface Order {
    orderID: string; // Unique ID for the order
    items: CartItem[]; // List of items
    invoiceNumber: string;
    totalAmount: number;
    dropLocation: string;
    paymentMethod: "COD" | "Prepaid";
    status: "Pending" | "Delivered" | "Cancelled" | "Processing";
    customerName: string;
    email: string;
    phoneNumber: string;
    orderDate: string;
    // Legacy fields for backward compatibility if needed, or remove
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
