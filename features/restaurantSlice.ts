import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface RestaurantState {
    restaurant: {
        id: number | null;
        imgUrl: string | null;
        title: string | null;
        rating: number | null;
        genre: string | null;
        address: string | null;
        short_description: string | null;
        dishes: any[] | null;
        lat: number | null;
        long: number | null;
    }
}

const initialState: RestaurantState = {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
        lat: null,
        long: null
    }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export default restaurantSlice.reducer