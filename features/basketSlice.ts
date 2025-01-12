import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface BasketState {
  items: any[]
}

const initialState: BasketState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      let newBasket = [...state.items];

      if(index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in the basket!`
        )
      }

      state.items = newBasket;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: RootState): BasketState['items'] => state.basket.items

export const selectBasketItemsWithId = (state: RootState, id: string) => state.basket.items.filter((item: any) => item.id === id);

export const selectBasketTotal = (state: RootState) => state.basket.items.reduce((total, item) => total += item.price, 0)

export default basketSlice.reducer