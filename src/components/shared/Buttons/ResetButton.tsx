import React, { FC } from 'react';
import { Button } from 'reactstrap';

export const ResetButton: FC = () => {

  return (
    <Button
      type="reset"
      color="outline-danger"
      className="text-uppercase"
    >
      Reset
    </Button>
  );
};
