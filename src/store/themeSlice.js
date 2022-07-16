import { createSlice } from "@reduxjs/toolkit";

const initialTheme ={theme:false}

const themeSlice=createSlice({
    name:'theme',
    initialState:initialTheme,
    reducers:{
        toggleTheme(state){
            if(state.theme === true){
                state.theme=false
            }else{
                state.theme=true
            }
        }
    }
})

export const themeActions = themeSlice.actions

export default themeSlice.reducer;