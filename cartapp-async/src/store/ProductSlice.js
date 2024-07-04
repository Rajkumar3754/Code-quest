// ProductSlice.js
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: "idle"
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // },
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status = 'idle';
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.data = action.payload;
            state.status = 'error';
        })


    }
});

// export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProduct = createAsyncThunk('products/get',async ()=>{

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data

})

// export const getProduct = () => async (dispatch) => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         dispatch(fetchProducts(data));
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         // Handle error if needed
//     }
// };
