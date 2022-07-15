import { Fragment } from "react";
import { GlobalStyle } from "./components/style";
import Home from "./pages/home/Home";
import {Route,Routes} from 'react-router-dom'
import CategoryPage from "./pages/category/CategoryPage";
import QuePage from "./pages/quePage/QuePage";
import ResultPage from "./pages/result/ResultPage";

function App() {
  return (
    <Fragment>
    <GlobalStyle />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/category" element={<CategoryPage/>}/>
    <Route path="/quiz" element={<QuePage/>}/>
    <Route path="/result" element={<ResultPage/>}
    />
    </Routes>
    </Fragment>
  );
}

export default App;
