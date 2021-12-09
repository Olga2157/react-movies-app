import React, { MouseEventHandler } from 'react';
import { Button } from 'reactstrap';

type AppButtonProps = {
    buttonId: string;
    buttonText: string,
    // class?: string,
    listener?: MouseEventHandler<HTMLButtonElement>
}
type AppButtonState = {}

class AppButton extends React.Component<AppButtonProps, AppButtonState> {
  render() {
    const { buttonId, listener, buttonText } = this.props;
    return (
      <Button id={buttonId} onClick={listener} color="danger" className="text-uppercase">{buttonText}</Button>
    // className={this.props.class}
    );
  }
}

export default AppButton;
