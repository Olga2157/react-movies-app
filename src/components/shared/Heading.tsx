import * as React from 'react'

type HeadingProps = {
  // headingClass?: string
  headingText: string
}
type HeadingState = {
}
class Heading extends React.Component<HeadingProps, HeadingState> {

  private static readonly textStyle = "text-uppercase";

  render() {
    return (
      // <h2 className={this.props.headingClass}>{this.props.headingText}</h2>
      <h2 className={Heading.textStyle}>{this.props.headingText}</h2>
    );
  }
}

export default Heading
