import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOficeCream: 20,
}

const iceCreamSlice = createSlice({
    name: 'iceCreamSlice',
    initialState,
    reducers: {
        order: (state) => {
            state.numOficeCream--;
        },
        restoked: (state, action) => {
            state.numOficeCream += action.payload
        }
    }
})


export default iceCreamSlice.reducer
export const { order, restoked } = iceCreamSlice.actions