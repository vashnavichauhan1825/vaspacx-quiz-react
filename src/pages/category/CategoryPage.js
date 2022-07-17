import { CategoryCard, CategoryWrapper, NormalButton, QuizCategoryCont, SecButton } from '../../components/style'
import { dummyQuiz } from '../../data'
import {Link, useNavigate} from 'react-router-dom'
import ToggleTheme from '../../components/toggleTheme/ToggleTheme';

const CategoryPage = () => {
   const navigate = useNavigate();
  return (
    <CategoryWrapper>
   <ToggleTheme/>
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
        <SecButton onClick={()=>navigate("/")}>Back</SecButton>
    </CategoryWrapper>
  )
}

export default CategoryPage