import { createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const dataInitialState = {
  categoryLength: 4,
  questionLength: 28,
  update: false,
};

const getDataSlice = createSlice({
  name: "data",
  initialState: dataInitialState,
  reducers: {
    updateQuizLength(state, action) {
      if (
        action.payload.cL !== state.categoryLength ||
        action.payload.qL !== state.questionLength
      ) {
        state.categoryLength = action.payload.cL;
        state.questionLength = action.payload.qL;
        state.update = true;
      } else {
        state.update = false;
      }
    },
  },
});

export const sendData = (dummyQuiz, quizUpdated) => {
  const quizCollectionRef = collection(db, "quizes");
  return async (dispatch) => {
    const sendRequest = async () => {
      const data = await getDocs(quizCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      if (quizUpdated) {
        addDoc(quizCollectionRef, { dummyQuiz });
      }
    };
    try {
      await sendRequest();
      console.log("success !");
    } catch (error) {
      console.log("fetching data from db failed !");
    }
  };
};
export const getDataActions = getDataSlice.actions;

export default getDataSlice.reducer;
