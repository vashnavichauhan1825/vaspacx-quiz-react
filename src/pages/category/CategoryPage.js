import { CategoryCard, CategoryWrapper, NormalButton, QuizCategoryCont } from '../../components/style'
import { dummyQuiz } from '../../data'
import {Link} from 'react-router-dom'

const CategoryPage = () => {
   
  return (
    <CategoryWrapper>
        <QuizCategoryCont>{
            dummyQuiz.map((quiz)=>
                <CategoryCard>
            <h2>{quiz.category.quizTitle}</h2>
             <p>{quiz.category.quizDetail}</p>
           <Link to={`/rules/${quiz.category.quizId}`}> <NormalButton>Play Quiz</NormalButton></Link>
            </CategoryCard>
            )
            }
        </QuizCategoryCont>
    </CategoryWrapper>
  )
}

export default CategoryPage