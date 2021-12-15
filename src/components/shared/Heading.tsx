import * as React from 'react';

type HeadingProps = {
  headingText: string
}
type HeadingState = {
}
class Heading extends React.Component<HeadingProps, HeadingState> {

  render() {
    const { headingText } = this.props;
    return (
      <h2 className="text-uppercase">{headingText}</h2>
    );
  }
}

export default Heading;
