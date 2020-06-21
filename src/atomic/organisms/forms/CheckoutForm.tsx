import * as React from "react";
import { styled } from "config/theme";
import { useFormik } from "formik";
import { CheckoutFormSubmitType } from "modules/cart/types";
import { FormGroup } from "atomic/molucules/FormGroup/FormGroup";
import { Input } from "atomic/atoms/Input";
import { Textarea } from "atomic/atoms/Textarea";
import { Button } from "atomic/atoms/Button";
import { Radio } from "atomic/atoms/Radio";
import { DeliveryType } from "modules/delivery/types";
import { usePrice } from 'modules/currency/utils';


interface ICheckoutFormProps {
  className?: string;
  onChangeDelivery(delivery: string): void;
  onSubmit(data: CheckoutFormSubmitType): void;
  loading?: boolean;
  deliveries: DeliveryType[];
  initialValues?: {
    email: string;
    address: string;
    delivery: string;
  };
}

const validate = (values: {
  email: string;
  address: string;
  delivery: string;
}) => {
  const errors: {
    email?: string;
    address?: string;
    delivery?: string;
  } = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.delivery) {
    errors.delivery = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  return errors;
};

const CheckoutFormComponent: React.FunctionComponent<ICheckoutFormProps> = ({
  className,
  onSubmit,
  onChangeDelivery,
  deliveries,
  initialValues = {
    email: "",
    address: "",
    delivery: "",
  },
}) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: ({ email, address, delivery }) => {
      onSubmit({
        email,
        address,
        delivery,
      });
    },
  });
  const { getPriceWithCurrency } = usePrice();

  return (
    <form onSubmit={formik.handleSubmit} className={className}>
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
        label="Address"
        error={formik.touched.address && formik.errors.address}
      >
        <Textarea
          type="text"
          name="address"
          placeholder="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>

      <FormGroup
        label="Check delivery type"
        error={formik.touched.delivery && formik.errors.delivery}
      >
        <div className="register__types">
          {deliveries.map(delivery =>  <Radio
            name="delivery"
            value={delivery.name}
            key={delivery.id}
            onChange={(data)=>{
              onChangeDelivery(delivery.name);
              formik.handleChange(data)
            }}
            checked={formik.values.delivery === delivery.name}
          >
            {`${delivery.name}: ${getPriceWithCurrency({price: delivery.price})}`}
          </Radio>)}
        </div>
      </FormGroup>

      <div className="form-buttons">
        <Button
          type="submit"
          onClick={() => {
            formik.handleSubmit();
          }}
          text="CHECKOUT"
        />
      </div>
    </form>
  );
};

export const CheckoutForm = styled(CheckoutFormComponent)`
  width: 320px;
  margin: 0 auto;
  transition: opacity 0.5;
  ${(props) =>
    props.loading &&
    `
        opacity: 0.5;
        pointer-events: none;
    `}

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
