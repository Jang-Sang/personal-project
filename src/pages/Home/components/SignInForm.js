import SJButton from 'components/Button';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SJInput from 'components/Input';
import useInputs from 'hooks/use-inputs';
import { formValidate } from 'utils/validate-helper';
import React from 'react';
import caman from './카멘6.gif';

const SignInForm = () => {
  const navigate = useNavigate();

  const [{ email, password }, onChangeInputs] = useInputs({
    email: '',
    password: '',
  });

  const { disabled, errors } = formValidate({ email, password });

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === 'test') {
      return navigate('/todo');
    }
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
  };

  const containerStyle = {
    width: '100%',
    height: '90%',
    overflow: 'hidden',
    margin: '0px auto',
    position: 'relative',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-24px',
    textAlign: 'center',
    fontSize: '24px',
    fontweight: 'bolder',
    color: '#FF0000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <img src={caman} alt="Background" style={{ width: '100%' }} />
      <div style={textStyle}>
        <p>로스트아크의 다양한 정보를 확인해보세요.</p>
        <S.Form onSubmit={onSubmitSignIn}>
          <SJInput
            type="text"
            name="email"
            onChange={onChangeInputs}
            placeholder="이메일을 입력해주세요"
          />
          <SJInput
            type="password"
            name="password"
            onChange={onChangeInputs}
            placeholder="비밀번호를 입력해주세요"
          />
          <SJButton
            variant={'secondary'}
            size={'full'}
            shape={'shape'}
            disabled={disabled}
          >
            로그인
          </SJButton>
        </S.Form>
      </div>
    </div>
  );
};
export default SignInForm;
