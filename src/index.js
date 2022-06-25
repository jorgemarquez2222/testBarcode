import React from 'react';
import { render } from 'react-dom';
import App from './App';

const products = [
  /* prod */
  { upc: "00400964000007", productId: "00964", price: "9.99", mapPolicy: "Cart", rating: "0.0", reviews: 0, description: "Map = Cart", altProductId: "", altExtension: "" },
  { upc: "00459679060073", productId: "59679", price: "70.00", mapPolicy: "Checkout", rating: "5.0", reviews: 1, description: "Map = Checkout", altProductId: "", altExtension: "" },
  { upc: "00430604040056", productId: "30604", price: "74.99", mapPolicy: "Payment", rating: "4.6", reviews: 81, description: "Map = Payment", altProductId: "", altExtension: "" },
  { upc: "00400249030057", productId: "00249", price: "24.99", mapPolicy: "None", rating: "4.0", reviews: 1, description: "OnSale = Yes", altProductId: "", altExtension: "" },
  { upc: "00737280401455", productId: "29997", price: "64.99", mapPolicy: "None", rating: "3.3", reviews: 3, description: "NumberOfColors > 8", altProductId: "", altExtension: "" },
  { upc: "00077896171107", productId: "88552", price: "177.99", mapPolicy: "None", rating: "0.0", reviews: 0, description: "AverageRating = 0", altProductId: "", altExtension: "" },
  { upc: "00886005601493", productId: "81973", price: "99.99", mapPolicy: "None", rating: "1.8", reviews: 5, description: "AverageRating > 1 < 2", altProductId: "", altExtension: "" },
  { upc: "00474113010070", productId: "74113", price: "54.99", mapPolicy: "None", rating: "2.5", reviews: 2, description: "AverageRating > 2 < 3", altProductId: "", altExtension: "" },
  { upc: "00458917000000", productId: "58917", price: "19.99", mapPolicy: "None", rating: "3.7", reviews: 4, description: "AverageRating > 3 < 4", altProductId: "", altExtension: "" },
  { upc: "00717501006164", productId: "09152", price: "134.99", mapPolicy: "None", rating: "4.6", reviews: 92, description: "AverageRating > 4 < 5", altProductId: "", altExtension: "" },
  { upc: "00434783000009", productId: "34783", price: "13.99", mapPolicy: "Cart", rating: "5.0", reviews: 2, description: "AverageRating = 5", altProductId: "", altExtension: "" },
  { upc: "00474800020078", productId: "74800", price: "54.99 ", mapPolicy: "None", rating: "0.0", reviews: 0, description: "Animated Gif", altProductId: "", altExtension: "gif" },
  { upc: "00000000000000", productId: "00000", price: "", mapPolicy: "", rating: "0.0", reviews: 0, description: "NotFound = Yes", altProductId: "", altExtension: "" },  /* dev1
  { upc: "00451598040051", productId: "51598", price: "40.00", mapPolicy: "Cart", rating: "0.0", reviews: 0, description: "Map = Cart", altProductId: "" },
  { upc: "00459679060073", productId: "59679", price: "70.00", mapPolicy: "Checkout", rating: "0.0", reviews: 0, description: "Map = Checkout", altProductId: "" },
  { upc: "00472196040052", productId: "72196", price: "50.00", mapPolicy: "Payment", rating: "0.0", reviews: 0, description: "Map = Payment", altProductId: "" },
  { upc: "00411599060076", productId: "11599", price: "44.99", mapPolicy: "None", rating: "4.5", reviews: 53, description: "OnSale = Yes", altProductId: "" },
  { upc: "00415888040077", productId: "15888", price: "54.99", mapPolicy: "Cart", rating: "0.0", reviews: 0, description: "NumberOfColors > 8", altProductId: "" },
  { upc: "00418309010079", productId: "18309", price: "59.99", mapPolicy: "None", rating: "0.0", reviews: 0, description: "AverageRating = 0", altProductId: "" },
  { upc: "00726823750051", productId: "03049", price: "79.99", mapPolicy: "None", rating: "2.6", reviews: 3, description: "AverageRating > 2 < 3", altProductId: "" },
  { upc: "00679145407700", productId: "14189", price: "131.99", mapPolicy: "None", rating: "3.8", reviews: 5, description: "AverageRating > 3 < 4", altProductId: "" },
  { upc: "00400313010077", productId: "00313", price: "24.99", mapPolicy: "None", rating: "4.6", reviews: 93, description: "AverageRating > 4 < 5", altProductId: "" },
  { upc: "00726821279837", productId: "15918", price: "64.99", mapPolicy: "None", rating: "5.0", reviews: 1, description: "AverageRating = 5", altProductId: "" },
  { upc: "00000000000000", productId: "00000", price: "", mapPolicy: "", rating: "0.0", reviews: 0, description: "NotFound = Yes", altProductId: "" },
  */
];

render(<App products={products}/>, document.getElementById('root'));
