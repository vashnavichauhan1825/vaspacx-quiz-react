 
import {Link} from 'react-router-dom'
import { EffectButton, HomeContainer, QuizIntroCont, RulesList, VaspacxLogo } from '../../components/style'

const Home = () => {
  return (
    <HomeContainer>
      <QuizIntroCont>
        <VaspacxLogo>
            Vaspac<i className="fa fa-xing" aria-hidden="true"></i>
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
        <Link to="/category"><EffectButton><i class="fa fa-chevron-right" aria-hidden="true"></i>Start Quiz</EffectButton></Link>
      </QuizIntroCont>
  
    </HomeContainer>
  )
}

export default Home