import { Footer, FooterList, Vaspacx } from "../style";

const VaspacxFooter = () => {
  return (
    <Footer>
      <Vaspacx>
        vaspac
        <span>
          <i className="fa fa-xing" aria-hidden="true"></i>Quiz
        </span>
      </Vaspacx>
      <FooterList>
        <li>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-github" aria-hidden="true"></i>
        </li>
      </FooterList>
    </Footer>
  );
};

export default VaspacxFooter;
