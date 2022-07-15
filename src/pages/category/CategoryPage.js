import { CategoryCard, CategoryWrapper, NormalButton, QuizCategoryCont } from '../../components/style'
import { dummyQuiz } from '../../data'


const CategoryPage = () => {
   
  return (
    <CategoryWrapper>
        <QuizCategoryCont>{
            dummyQuiz.map((quiz)=>
                <CategoryCard>
            <h2>{quiz.category.quizTitle}</h2>
             <p>{quiz.category.quizDetail}</p>
             <NormalButton>Play Quiz</NormalButton>
            </CategoryCard>
            )
            }
        </QuizCategoryCont>
    </CategoryWrapper>
  )
}

export default CategoryPage