import { Restaurant } from "@/interfaces/restaurant.model";

export type RootStackParamList = {
    Home: undefined; 
    Restaurant: Restaurant;  
    Basket: undefined;
    PreparingOrder: undefined,
    Delivery: undefined
  };