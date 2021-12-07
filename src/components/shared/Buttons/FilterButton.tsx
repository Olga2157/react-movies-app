import * as React from 'react'
import { MouseEventHandler } from "react";
import { Button } from 'reactstrap';

type FilterButtonProps = {
    buttonId: string;
    buttonText: string,
    listener?: MouseEventHandler<HTMLButtonElement>
}
type FilterButtonState = {}

class FilterButton extends React.Component<FilterButtonProps, FilterButtonState> {

    render() {

        return (
            <Button id={this.props.buttonId} color="dark" onClick={this.props.listener}  data-bs-toggle="button" aria-pressed="true" autoComplete="off" className="text-uppercase btn btn-primary  active w-auto">{this.props.buttonText}</Button>
        );
    }
}

export default FilterButton
