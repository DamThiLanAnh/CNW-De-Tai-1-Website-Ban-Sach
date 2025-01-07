import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
// initialState định nghĩa trang thái ban đầu của state 
// ở đây trang thái có 1 thuộc tính cart item 1 mảng để lưu giữ trạng thái trong giỏ hàng
const initialState = {
    cartItems: [],
}

// createSlice 
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => { // action có 2 thuộc tính chính là type và payload
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if (!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    title: "Already added to the cart!",
                    text: "You won't be added more!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK"
                });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer

// slice Redux để quản lý giỏ hàng