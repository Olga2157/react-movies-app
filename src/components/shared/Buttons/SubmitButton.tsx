import React, { FC } from 'react';
import { Button } from 'reactstrap';

type SubmitButtonProps = {
  buttonText: string,
}

export const SubmitButton: FC<SubmitButtonProps> = ({ buttonText }) => (
    <Button
      type="submit"
      color="danger"
      className="text-uppercase"
    >
      {buttonText}
    </Button>
  );
