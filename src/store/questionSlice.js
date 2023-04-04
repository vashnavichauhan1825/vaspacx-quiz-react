import { createSlice } from "@reduxjs/toolkit";

const quizInitialState = {
  questionNo: 0,
  activeIndex: null,
  score: 0,
  category: null,
};

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
    getScore(state, action) {
      if (action.payload === 0) {
        state.score = 0;
      }
      state.score = state.score + action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const questionActions = questionSlice.actions;

export default questionSlice.reducer;
