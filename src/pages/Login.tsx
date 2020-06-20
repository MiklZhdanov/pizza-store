import * as React from "react";
import { styled } from "config/theme";
import { LoginForm } from "atomic/organisms/forms/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { Redirect } from "react-router";
import { login } from 'modules/auth/actions';

interface ILoginPageProps {
  className?: string;
}

const LoginPageComponent: React.FunctionComponent<ILoginPageProps> = ({
  className,
}) => {
  const { user } = useSelector((state: AppState) => ({
    user: state.auth.currentUser,
  }));
  const dispatch = useDispatch();

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className={className}>
      <LoginForm onSubmit={(data)=>{
          dispatch(login(data))
      }}/>
    </div>
  );
};

export const LoginPage = styled(LoginPageComponent)``;
