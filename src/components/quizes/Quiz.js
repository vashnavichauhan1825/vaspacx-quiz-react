import React from 'react'
import { CategoryWrapper, PrimaryButton, QuestionNo } from '../style'
import { Option, OptionsCont, QuizBtnContainer, QuizQuestion } from '../style/stylecomponents/Container.style'
import { dummyQuiz } from '../../data'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { questionActions } from '../../store/questionSlice'
import VaspacxFooter from '../footer/Footer'
import ToggleTheme from '../toggleTheme/ToggleTheme'



const Quiz = () => {
 const {categoryId}= useParams();
 const dispatch = useDispatch();
 const filteredCategory = dummyQuiz.filter((category)=> category.category.quizId === categoryId )
 const questionNo = useSelector(state => state.quiz.questionNo)

 const navigate =useNavigate()
 const nextQuestion=()=>{
  dispatch(questionActions.nextQuestionHandler())
  if(filteredCategory[0].category.quiz.length === questionNo+1){
    navigate('/')
    dispatch(questionActions.setQuestionZero())
  }
 
 }

  return (
    <CategoryWrapper>
    <ToggleTheme/>
    <QuestionNo>{questionNo + 1}</QuestionNo>
     {filteredCategory.map((quiz)=>{
    return(  <> <QuizQuestion><h2>{quiz.category.quiz[questionNo].question}</h2></QuizQuestion>
      <OptionsCont>
        <Option>
        <label htmlFor='optionOne'><input  type="radio" name="quiz1" id="optionOne"/>
            {quiz.category.quiz[questionNo].optionOne}</label>
        </Option>
        <Option>
        <label htmlFor='optionTwo'><input  type="radio" name="quiz1" id="optionTwo"/>
            {quiz.category.quiz[questionNo].optionTwo}</label>
        </Option>
        <Option>
        <label htmlFor='optionThree'><input  type="radio" name="quiz1" id="optionThree"/>
           {quiz.category.quiz[questionNo].optionThree}</label>
        </Option>
        <Option>
        <label htmlFor='optionFour'><input  type="radio" name="quiz1" id="optionFour"/>
          {quiz.category.quiz[questionNo].optionFour}</label>
        </Option>
      </OptionsCont>
      <QuizBtnContainer><PrimaryButton>Submit</PrimaryButton>
      <PrimaryButton onClick={()=>nextQuestion()}>Next</PrimaryButton></QuizBtnContainer>
      </>)
     })}
    <VaspacxFooter/>
    </CategoryWrapper>
  )
}

export default Quiz