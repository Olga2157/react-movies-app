import * as React from 'react';

type HeadingProps = {
  // headingClass?: string
  headingText: string
}
type HeadingState = {
}
class Heading extends React.Component<HeadingProps, HeadingState> {
  private static readonly textStyle = 'text-uppercase';

  render() {
    const { headingText } = this.props;
    return (
      <h2 className={Heading.textStyle}>{headingText}</h2>
    );
  }
}

export default Heading;
