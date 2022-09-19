import {
  CircleContainer,
  CorrectAnswer,
  EffectButton,
  HomeContainer,
  ResultContainer,
  ResultQuestion,
} from "../../components/style";
import ToggleTheme from "../../components/toggleTheme/ToggleTheme";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VaspacxFooter from "../../components/footer/Footer";

const ResultPage = () => {
  const quizData = useSelector((state) => state.quizData.quizCollectionData);
  const categoryId = useSelector((state) => state.quiz.category);
  const score = useSelector((state) => state.quiz.score);
  const filteredCategory = quizData.filter(
    (category) => category.category.quizId === categoryId
  );
  const filterQuiz = filteredCategory[0].category.quiz;

  return (
    <HomeContainer>
      <ToggleTheme />
      <ResultContainer>
        <h4>CORRECT ANSWERS !</h4>
        {filterQuiz.map((quiz) => (
          <>
            <ResultQuestion>{quiz.question}</ResultQuestion>
            <CorrectAnswer>{quiz.answer}</CorrectAnswer>
          </>
        ))}
        <Link to="/">
          <EffectButton>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>Play Again
            !
          </EffectButton>
        </Link>
      </ResultContainer>
      <CircleContainer>
        <p>SCORE</p>
        {score}
      </CircleContainer>
      <VaspacxFooter />
    </HomeContainer>
  );
};

export default ResultPage;
