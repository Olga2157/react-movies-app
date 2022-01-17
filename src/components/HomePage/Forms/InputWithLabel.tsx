import React, { FC } from 'react';
import {
  FormGroup, Input, Label,
} from 'reactstrap';
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
  readonly?: boolean,
}

export const InputWithLabel: FC<InputWithLabelProps> = ({
  id, label, name, defaultValue, placeholder, type, size, readonly,
}) => (
  <FormGroup>
    <Label for={id}>
      {label}
    </Label>
    <Input id={id}
      name={name} type={type} placeholder={placeholder}
      bsSize={size} disabled={readonly} defaultValue={defaultValue} />
  </FormGroup>
);
