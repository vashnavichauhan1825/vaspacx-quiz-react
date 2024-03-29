import React from "react";
import {
  CategoryWrapper,
  PrimaryButton,
  QuestionNo,
  QuizOptionBtn,
} from "../style";
import {
  Option,
  OptionsCont,
  QuizBtnContainer,
  QuizQuestion,
} from "../style/stylecomponents/Container.style";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../../store/questionSlice";
import VaspacxFooter from "../footer/Footer";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const Quiz = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizData.quizCollectionData);

  const filteredCategory = quizData.filter(
    (category) => category.category.quizId === categoryId
  );
  const questionNo = useSelector((state) => state.quiz.questionNo);
  const optionIndex = useSelector((state) => state.quiz.activeIndex);
  const score = useSelector((state) => state.quiz.score);
  const navigate = useNavigate();
  const nextQuestion = () => {
    dispatch(questionActions.nextQuestionHandler());
    dispatch(questionActions.setActiveOption(null));
    if (filteredCategory[0].category.quiz.length === questionNo + 1) {
      navigate("/result");
      dispatch(questionActions.setQuestionZero());
    }
    console.log(score);
  };

  const optionHandler = (index) => {
    dispatch(questionActions.setActiveOption(index));
    if (
      filteredCategory[0].category.quiz[questionNo].answer ===
      filteredCategory[0].category.quiz[questionNo].options[index]
    ) {
      dispatch(questionActions.getScore(10));
    }
  };

  return (
    <CategoryWrapper>
      <ToggleTheme />
      <QuestionNo>{questionNo + 1}</QuestionNo>
      {filteredCategory.map((quiz) => {
        return (
          <>
            <QuizQuestion>
              <h2>{quiz.category.quiz[questionNo].question}</h2>
            </QuizQuestion>
            <OptionsCont>
              {quiz.category.quiz[questionNo].options.map((option, index) => (
                <Option>
                  <QuizOptionBtn
                    bgColor={
                      optionIndex === index
                        ? "var(--primary-color)"
                        : "#211c1c00"
                    }
                    onClick={() => optionHandler(index)}
                    key={index}
                  >
                    {option}
                  </QuizOptionBtn>
                </Option>
              ))}
            </OptionsCont>
            <QuizBtnContainer>
              <Link to="/result">
                <PrimaryButton>Submit</PrimaryButton>
              </Link>
              <PrimaryButton onClick={() => nextQuestion()}>Next</PrimaryButton>
            </QuizBtnContainer>
          </>
        );
      })}
      <VaspacxFooter />
    </CategoryWrapper>
  );
};

export default Quiz;
