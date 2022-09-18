import React from "react";
import { CategoryWrapper, PrimaryButton, QuestionNo } from "../style";
import {
  Option,
  OptionsCont,
  QuizBtnContainer,
  QuizQuestion,
} from "../style/stylecomponents/Container.style";
import { dummyQuiz } from "../firebase-data/data";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../../store/questionSlice";
import VaspacxFooter from "../footer/Footer";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const Quiz = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const filteredCategory = dummyQuiz.filter(
    (category) => category.category.quizId === categoryId
  );
  const questionNo = useSelector((state) => state.quiz.questionNo);

  const navigate = useNavigate();
  const nextQuestion = () => {
    dispatch(questionActions.nextQuestionHandler());
    if (filteredCategory[0].category.quiz.length === questionNo + 1) {
      navigate("/");
      dispatch(questionActions.setQuestionZero());
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
              <Option>
                <label>
                  <input
                    type="radio"
                    name={quiz.category.quiz[questionNo].question}
                    value={quiz.category.quiz[questionNo].optionOne}
                  />
                  {quiz.category.quiz[questionNo].optionOne}
                </label>
              </Option>
              <Option>
                <label htmlFor={quiz.category.quiz[questionNo].optionTwo}>
                  <input
                    type="radio"
                    name={quiz.category.quiz[questionNo].question}
                    value={quiz.category.quiz[questionNo].optionTwo}
                    id={quiz.category.quiz[questionNo].optionTwo}
                  />
                  {quiz.category.quiz[questionNo].optionTwo}
                </label>
              </Option>
              <Option>
                <label htmlFor={quiz.category.quiz[questionNo].optionThree}>
                  <input
                    type="radio"
                    name={quiz.category.quiz[questionNo].question}
                    value={quiz.category.quiz[questionNo].optionTwo}
                    id={quiz.category.quiz[questionNo].optionThree}
                  />
                  {quiz.category.quiz[questionNo].optionThree}
                </label>
              </Option>
              <Option>
                <label htmlFor={quiz.category.quiz[questionNo].optionFour}>
                  <input
                    type="radio"
                    name={quiz.category.quiz[questionNo].question}
                    value={quiz.category.quiz[questionNo].optionTwo}
                    id={quiz.category.quiz[questionNo].optionFour}
                  />
                  {quiz.category.quiz[questionNo].optionFour}
                </label>
              </Option>
            </OptionsCont>
            <QuizBtnContainer>
              <PrimaryButton>Submit</PrimaryButton>
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
