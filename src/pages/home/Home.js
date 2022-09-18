import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  EffectButton,
  HomeContainer,
  VaspacxContainer,
} from "../../components/style";
import vaspacx from "../../assests/vaspacx.png";
import quiz from "../../assests/quiz.png";
import VaspacxFooter from "../../components/footer/Footer";
import ToggleTheme from "../../components/toggleTheme/ToggleTheme";
import vaspacxlight from "../../assests/vaspacxlight.png";
import quizlight from "../../assests/quizlight.png";
const Home = () => {
  const toggle = useSelector((state) => state.theme.theme);
  return (
    <HomeContainer>
      <ToggleTheme />
      <VaspacxContainer>
        <img src={toggle ? vaspacx : vaspacxlight} />
        <img src={toggle ? quiz : quizlight} />
        <Link to="/category">
          <EffectButton>
            <i className="fa fa-chevron-right" aria-hidden="true"></i> Let's Go!
          </EffectButton>
        </Link>
      </VaspacxContainer>
      <VaspacxFooter />
    </HomeContainer>
  );
};

export default Home;
