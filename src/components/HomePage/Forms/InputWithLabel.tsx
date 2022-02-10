import React, { FC } from 'react';
import { Field } from 'formik';
import { Label, } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';
import './Form.scss';

type InputWithLabelProps = {
  id: string,
  label: string,
  name?: string,
  type?: InputType,
  defaultValue?: string,
  placeholder: string,
  size?: 'lg' | 'sm',
  readonly?: boolean
}

export const InputWithLabel: FC<InputWithLabelProps> = ({
  id, label, name, defaultValue, placeholder, type, size, readonly
}) => (

  <Field name={name}>
    {() => (
      <div>
        <Label for={id}>
          {label}
        </Label>
        <Field id={id}
          name={name} type={type} placeholder={placeholder}
          bsSize={size} disabled={readonly} defaultValue={defaultValue} />
      </div>
    )}
  </Field>
);
