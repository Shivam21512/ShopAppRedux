import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import { CartSlice } from "./Slices/CartSlice";


export const store = configureStore({
    reducer:{
        cart:CartSlice.reducer,
    }
});












// import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./Slices/cartSlice";

// export const store = configureStore({
//     reducer : {
//         cart : CartSlice.reducer,
//     }
// });