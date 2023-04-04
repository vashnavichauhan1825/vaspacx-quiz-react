import questionSlice from "./questionSlice";
import themeSlice from "./themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "./getDataSlice";

const store= configureStore({
    reducer:{quiz:questionSlice,theme:themeSlice,quizData:getDataSlice}
})

export default store;