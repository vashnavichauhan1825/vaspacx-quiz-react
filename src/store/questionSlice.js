import { createSlice } from "@reduxjs/toolkit";

const quizInitialState = {questionNo:0}

const questionSlice = createSlice({
    name:'question',
    initialState:quizInitialState,
    reducers:{
        nextQuestionHandler(state){
            state.questionNo++
        },
        setQuestionZero(state){
            state.questionNo=0;
        }
    }
})

export const questionActions = questionSlice.actions

export default questionSlice.reducer;