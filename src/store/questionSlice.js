import { createSlice } from "@reduxjs/toolkit";

const quizInitialState = { questionNo: 0, activeIndex: null, score: 0 };

const questionSlice = createSlice({
  name: "question",
  initialState: quizInitialState,
  reducers: {
    nextQuestionHandler(state) {
      state.questionNo++;
    },
    setQuestionZero(state) {
      state.questionNo = 0;
    },
    setActiveOption(state, action) {
      state.activeIndex = action.payload;
    },
    getScore(state) {
      state.score = state.score + 10;
    },
  },
});

export const questionActions = questionSlice.actions;

export default questionSlice.reducer;
