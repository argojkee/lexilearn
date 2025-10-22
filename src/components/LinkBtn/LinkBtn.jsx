import { LinkBtnStyles } from './LinkBtn.styled';

const LinkBtn = ({ bg, route, text }) => {
  return (
    <LinkBtnStyles to={route} $bg={bg} className="link-btn">
      {text}
    </LinkBtnStyles>
  );
};

export default LinkBtn;
