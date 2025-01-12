export interface Restaurant {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: [];
    long: number;
    lat: number;
}