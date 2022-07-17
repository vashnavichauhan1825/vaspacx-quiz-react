import { Fragment } from "react";
import { GlobalStyle } from "./components/style";
import Home from "./pages/home/Home";
import {Route,Routes} from 'react-router-dom'
import CategoryPage from "./pages/category/CategoryPage";
import QuePage from "./pages/quePage/QuePage";
import ResultPage from "./pages/result/ResultPage";
import CategoryRules from "./components/Rules/CategoryRules";
import Quiz from "./components/quizes/Quiz";
import { lightTheme } from "./components/style/stylecomponents/themes";
import { darkTheme } from "./components/style/stylecomponents/themes";
import { useSelector } from "react-redux";
function App() {
  const currentTheme = useSelector(state => state.theme.theme)
  
  return (
    <Fragment>
    <GlobalStyle theme={currentTheme?darkTheme:lightTheme} />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/category" element={<CategoryPage/>}/>
    <Route path="/rules/:categoryId" element={<CategoryRules/>}/>
    <Route path="/question/:categoryId" element={<Quiz/>}/>
    <Route path="/quiz" element={<QuePage/>}/>
    <Route path="/result" element={<ResultPage/>}
    />
    </Routes>
    </Fragment>
  );
}

export default App;
