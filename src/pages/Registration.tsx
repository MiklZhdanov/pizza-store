import * as React from "react";
import { styled } from "config/theme";
import { RegistrationForm } from "atomic/organisms/forms/RegistrationForm";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { Redirect } from "react-router";
import { register } from 'modules/auth/actions';

interface IRegistrationPageProps {
  className?: string;
}

const RegistrationPageComponent: React.FunctionComponent<IRegistrationPageProps> = ({
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
      <RegistrationForm onSubmit={(data)=>{
          dispatch(register(data))
      }}/>
    </div>
  );
};

export const RegistrationPage = styled(RegistrationPageComponent)``;
