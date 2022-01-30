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
  onChangeCallBack?: Function
}

export const InputWithLabel: FC<InputWithLabelProps> = ({
  id, label, name, defaultValue, placeholder, type, size, readonly,onChangeCallBack
}) => (
  <FormGroup>
    <Label for={id}>
      {label}
    </Label>
    <Input id={id}
      onInput={e => onChangeCallBack ? onChangeCallBack((e.target as HTMLInputElement).value) : ''}
      name={name} type={type} placeholder={placeholder}
      bsSize={size} disabled={readonly} defaultValue={defaultValue} />
  </FormGroup>
);
