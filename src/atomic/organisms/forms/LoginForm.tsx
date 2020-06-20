import * as React from "react";
import { styled } from "config/theme";
import { useFormik } from "formik";
import { LoginRequestType } from "modules/auth/types";
import { FormGroup } from "atomic/molucules/FormGroup/FormGroup";
import { Input } from "atomic/atoms/Input";
import { Button } from "atomic/atoms/Button";
import { Link } from "react-router-dom";

interface ILoginFormProps {
  className?: string;
  onSubmit(data: LoginRequestType): void;
  initialValues?: LoginRequestType;
}

const validate = (values: {
    identifier: string,
    password: string
}) => {
    const errors: {
        identifier?: string,
        password?: string
    } = {};
    if (!values.identifier) {
      errors.identifier = 'Required';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    }
  
    return errors;
  };

  
const LoginFormComponent: React.FunctionComponent<ILoginFormProps> = ({
  className,
  onSubmit,
  initialValues = {
    identifier: "",
    password: "",
  },
}) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className={className}>
      <FormGroup label="Login" error={(formik.touched.identifier && formik.errors.identifier)}>
        <Input
          type="text"
          name="identifier"
          placeholder="Login"
          value={formik.values.identifier}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>

      <FormGroup label="Login" error={(formik.touched.password && formik.errors.password)}>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>
      <div className="form-buttons">
      <Button
        onClick={() => {
          formik.handleSubmit();
        }}
        text="LOGIN"
      />
        <Link to="/register">
            registration
        </Link>
      </div>
    </form>
  );
};

export const LoginForm = styled(LoginFormComponent)`
    width: 320px;
    margin: 0 auto;
    .form-buttons{
        margin: 10px 0 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        a{
            margin: 5px 5px 10px 0;
            padding: 0 0 2px;
            color: ${props => props.theme.colors.baseText};
            margin-left: 10px;
        }
    }
`;
