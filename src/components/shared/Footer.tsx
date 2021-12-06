import * as React from 'react'
import Logo from './Logo';

const Footer: React.FC<{}> = props => {

  const footerClass = "text-center";
  const marginClass = "mt-2";

  return (
    <footer className={footerClass}>
      <div className={marginClass}>
        <Logo/>
      </div>  
    </footer>
  );
}

export default Footer
