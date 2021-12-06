import * as React from 'react'
import { MouseEventHandler } from "react";
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

        return (
            <Button id={this.props.buttonId} onClick={this.props.listener} color="danger" className="text-uppercase">{this.props.buttonText}</Button>
            // className={this.props.class}
        );
    }
}

export default AppButton
