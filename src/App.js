import { Fragment, useEffect } from "react";
import { GlobalStyle } from "./components/style";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/category/CategoryPage";
import QuePage from "./pages/quePage/QuePage";
import ResultPage from "./pages/result/ResultPage";
import CategoryRules from "./components/Rules/CategoryRules";
import Quiz from "./components/quizes/Quiz";
import { lightTheme } from "./components/style/stylecomponents/themes";
import { darkTheme } from "./components/style/stylecomponents/themes";
import { useDispatch, useSelector } from "react-redux";

import {
  categoryLength,
  dummyQuiz,
  questionsLength,
} from "./components/firebase-data/data";
import { getDataActions, sendData } from "./store/getDataSlice";
function App() {
  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const quizUpdated = useSelector((state) => state.quizData.update);

  useEffect(() => {
    dispatch(
      getDataActions.updateQuizLength({
        cL: categoryLength,
        qL: questionsLength,
      })
    );

    dispatch(sendData(dummyQuiz, quizUpdated));
  }, []);
  return (
    <Fragment>
      <GlobalStyle theme={currentTheme ? darkTheme : lightTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/rules/:categoryId" element={<CategoryRules />} />
        <Route path="/question/:categoryId" element={<Quiz />} />
        <Route path="/quiz" element={<QuePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
