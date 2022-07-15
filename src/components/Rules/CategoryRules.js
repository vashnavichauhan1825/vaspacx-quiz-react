import { EffectButton, HomeContainer, QuizIntroCont, RulesList, VaspacxLogo } from "../style"
import {useParams} from 'react-router-dom'
import { dummyQuiz } from "../../data";

const CategoryRules = () => {
    const {categoryId} =useParams();
  return (
    <HomeContainer>{dummyQuiz.filter((item)=> item.category.quizId === categoryId).map((quiz)=>{
        return(
            <QuizIntroCont>
            <VaspacxLogo>
               {quiz.category.quizTitle}
            </VaspacxLogo>
            <h4>Hii 👋 friends ! myself <strong>Kido</strong>, kindly Read Rules before get started !</h4>
          <RulesList>
          <li>There are five questions in Quiz</li>
          <li>you can choose only one option</li>
          <li>4 marks for each Question</li>
          <li>There is no negative marking</li>
          <li>You can also skip the questions</li>
          </RulesList>
          <p>Let's go to the vaspacx quiz world by just clicking this button !</p>
       <EffectButton><i class="fa fa-chevron-right" aria-hidden="true"></i>Start Quiz</EffectButton>
        </QuizIntroCont>
        )
    })
        }
    </HomeContainer>
  )
}

export default CategoryRules