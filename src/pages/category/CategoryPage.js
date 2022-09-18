import {
  CategoryCard,
  CategoryWrapper,
  NormalButton,
  QuizCategoryCont,
  SecButton,
} from "../../components/style";
import { Link, useNavigate } from "react-router-dom";
import ToggleTheme from "../../components/toggleTheme/ToggleTheme";
import { useSelector } from "react-redux";
const CategoryPage = () => {
  const navigate = useNavigate();
  const quizData = useSelector((state) => state.quizData.quizCollectionData);
  console.log(quizData.map((quiz) => quiz.quizTitle));
  return (
    <CategoryWrapper>
      <ToggleTheme />
      <QuizCategoryCont>
        {quizData.map((quiz) => (
          <CategoryCard>
            <h2>{quiz.category.quizTitle}</h2>
            <p>{quiz.category.quizDetail}</p>
            <Link to={`/rules/${quiz.category.quizId}`}>
              <NormalButton>Play Quiz</NormalButton>
            </Link>
          </CategoryCard>
        ))}
      </QuizCategoryCont>
      <SecButton onClick={() => navigate("/")}>Back</SecButton>
    </CategoryWrapper>
  );
};

export default CategoryPage;
