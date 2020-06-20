import * as React from "react";
import { styled } from "config/theme";
import { useFormik } from "formik";
import { RegistrationRequestType } from "modules/auth/types";
import { FormGroup } from "atomic/molucules/FormGroup/FormGroup";
import { Input } from "atomic/atoms/Input";
import { Button } from "atomic/atoms/Button";
import { Link } from "react-router-dom";

interface IRegistrationFormProps {
  className?: string;
  onSubmit(data: RegistrationRequestType): void;
  initialValues?: {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };
}

const validate = (values: {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
  const errors: {
    username?: string;
    email?: string;
    password?: string;
    passwordConfirm?: string;
  } = {};
  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Required";
  } else if (values.passwordConfirm !== values.password){
    errors.passwordConfirm = "Passwords arn't equal";
  }
  return errors;
};

const RegistrationFormComponent: React.FunctionComponent<IRegistrationFormProps> = ({
  className,
  onSubmit,
  initialValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  },
}) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: ({username, email, password})=>{
      onSubmit({
        username, email, password
      })
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={className}>
      <FormGroup
        label="Login"
        error={formik.touched.username && formik.errors.username}
      >
        <Input
          type="text"
          name="username"
          placeholder="Login"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>

      <FormGroup
        label="Email"
        error={formik.touched.email && formik.errors.email}
      >
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>

      <FormGroup
        label="Password"
        error={formik.touched.password && formik.errors.password}
      >
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>

      <FormGroup
        label="Confirm Password"
        error={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
      >
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>

      <div className="form-buttons">
        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          text="REGISTRATION"
        />
        <Link to="/login">login</Link>
      </div>
    </form>
  );
};

export const RegistrationForm = styled(RegistrationFormComponent)`
  width: 320px;
  margin: 0 auto;
  .form-buttons {
    margin: 10px 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    a {
      margin: 5px 5px 10px 0;
      padding: 0 0 2px;
      color: ${(props) => props.theme.colors.baseText};
      margin-left: 10px;
    }
  }
`;
