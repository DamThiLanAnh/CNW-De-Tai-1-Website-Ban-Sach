import { createSlice } from '@reduxjs/toolkit'

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
        addToCart(state, action) { // action có 2 thuộc tính chính là type và payload
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItems.push(action.payload);
                alert('Item added successfully!')
            } else {
                alert('Item already exists!')
            }
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

// slice Redux để quản lý giỏ hàng