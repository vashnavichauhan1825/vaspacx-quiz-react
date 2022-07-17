import questionSlice from "./questionSlice";
import themeSlice from "./themeSlice";
import { configureStore } from "@reduxjs/toolkit";

const store= configureStore({
    reducer:{quiz:questionSlice,theme:themeSlice}
})

export default store;