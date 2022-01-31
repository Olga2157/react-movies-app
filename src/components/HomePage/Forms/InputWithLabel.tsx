import React, { FC } from 'react';
import { Field } from 'formik';
import { Label,} from 'reactstrap';
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
  id, label,name, defaultValue, placeholder, type, size, readonly,onChangeCallBack
}) => (

<Field name={name}>
    {({
          // field, // { name, value, onChange, onBlur }
          // form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          // meta,
      }) => (
            <div>
              <Label for={id}>
                {label}
              </Label>
              <Field id={id}
                // onInput={e => onChangeCallBack ? onChangeCallBack((e.target as HTMLInputElement).value) : ''}
                name={name} type={type} placeholder={placeholder}
                bsSize={size} disabled={readonly} defaultValue={defaultValue} />
            </div>
    )}
</Field>
);