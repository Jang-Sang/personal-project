import styled from 'styled-components';
import SignInForm from './components/SignInForm';
import { flexCenter } from 'styles/common.style';

export const HomePage = () => {
  return (
    <S.Wrapper>
      <SignInForm />
    </S.Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction: column;
`;

const S = {
  Wrapper,
};
