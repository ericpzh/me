import React from 'react';
import './footer.css';
import { Icon } from 'semantic-ui-react';

function getSize() {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = React.useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

function Footer() {
  let { height, width } = useWindowSize();
  const isMobile = width < 768;
  const aspectRatio = 17/9;
  const demoStyle =
  !isMobile ?
  {
    width: (768/3.5).toString() + 'px',
    height: (aspectRatio * 768/3.5).toString() + 'px'
  } :
  {
    width: (width*0.7).toString() + 'px',
    height: (aspectRatio * width*0.7).toString() + 'px'
  };

  return (
  <div className={!isMobile?"footer":'footer-mobile'}>
    <div className={!isMobile?"footer-words":"footer-words-mobile"}>
      <p className='footer-item'> Powered by: </p>
    </div>
    <div className={!isMobile?"footer-items":'footer-items-mobile'}>
      <Icon name="react" className='footer-item'/>
      <Icon name="js" className='footer-item'/>
      <Icon name="node js" className='footer-item'/>
      <Icon name="npm" className='footer-item'/>
      <Icon name="github" className='footer-item'/>
    </div>
  </div>
  )
}

export default Footer;
