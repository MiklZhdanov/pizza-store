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
  const { user, loading } = useSelector((state: AppState) => ({
    user: state.auth.currentUser,
    loading: state.auth.loading
  }));
  const dispatch = useDispatch();

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className={className}>
      <RegistrationForm loading={loading} onSubmit={(data)=>{
          dispatch(register(data))
      }}/>
    </div>
  );
};

export const RegistrationPage = styled(RegistrationPageComponent)``;
