import { CategoryCard, CategoryWrapper, NormalButton, QuizCategoryCont, SecButton } from '../../components/style'
import {Link, useNavigate} from 'react-router-dom'
import ToggleTheme from '../../components/toggleTheme/ToggleTheme';
import {collection,getDocs} from 'firebase/firestore'
import { db } from '../../firebase-config';
import { useEffect } from 'react';
import { dummyQuiz } from '../../components/firebase-data/data';
const CategoryPage = () => {
   const navigate = useNavigate();
   const quizCollectionRef = collection(db,"quizes")
  useEffect(()=>{
    //  const getData =async()=>{
    //       const data = await getDocs(quizCollectionRef)
    //       console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    //  } 
    //  getData()
     
  },[])
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