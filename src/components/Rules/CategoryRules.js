import { EffectButton, HomeContainer, QuizIntroCont, RulesList, VaspacxLogo } from "../style"
import {Link, useParams} from 'react-router-dom'
import { dummyQuiz } from "../firebase-data/data";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const CategoryRules = () => {
    const {categoryId} =useParams();
  return (
    <HomeContainer><ToggleTheme/>
    {dummyQuiz.filter((item)=> item.category.quizId === categoryId).map((quiz)=>{
        return(
            <QuizIntroCont>

            <VaspacxLogo>
               {quiz.category.quizTitle}
            </VaspacxLogo>
            <h4>Hii 👋 friends ! myself <strong>Kido</strong>, kindly Read Rules before get started !</h4>
          <RulesList>{quiz.category.quizRules.map((rules)=>{
           return <li>{rules}</li>
          })
          }
          </RulesList>
          <p>Let's go to the vaspacx quiz world by just clicking this button !</p>
    <Link to={`/question/${categoryId}`}>  <EffectButton><i class="fa fa-chevron-right" aria-hidden="true"></i>Start Quiz</EffectButton></Link> 
        </QuizIntroCont>
        )
    })
        }
    </HomeContainer>
  )
}

export default CategoryRules