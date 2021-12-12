import * as React from 'react';

type AppTextProps = {
  textClass?: string,
  text: string
}
type AppTextState = {
}
class AppText extends React.Component<AppTextProps, AppTextState> {
  
  render() {
    const { textClass, text } = this.props;
    return (
      <p className={textClass}>{text}</p>
    );
  }
}

export default AppText;
