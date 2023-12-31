import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems: (state, action) =>{
            //Mutating the state over here
            //Redux ToolKit uses Immer behind the scenes for mutating the state
            state.items.push(action.payload)
        },
        removeItems: (state, action) =>{
            state.items.pop()
        },
        clearCart: (state, action) =>{
            //React Toolkit either mutate the state or return a new state
            state.items.length = 0

            //return {items: []} // here the original state will become empty

            // You can do anyone of the above
        }
    }
})

export const {addItems, removeItems, clearCart} = cartSlice.actions

export default cartSlice.reducer