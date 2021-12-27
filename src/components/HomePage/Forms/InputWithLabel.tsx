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
  placeholder: string,
  size?: 'lg' | 'sm',
  readonly?: boolean,
}

export const InputWithLabel: FC<InputWithLabelProps> = (props) => {
  const { id, label, name, placeholder, type, size, readonly } = props;
  let readonlyText = "";
  readonly? readonlyText = "readonly" : "";
  return <FormGroup>
    <Label for={id}>
      {label}
    </Label>
    <Input id={id} name={name} type={type} placeholder={placeholder} bsSize={size} readonly={readonlyText}/>
  </FormGroup>
};


