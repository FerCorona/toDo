import { useEffect } from 'react';
import { isMobile, defaultScreenSizeForMobile } from '../helpers/helpers';

const ListenerMobile = ({
  screenSize = defaultScreenSizeForMobile,
  onChange = () => {},
  onResize = () => {}
}) => {
  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = isMobile(screenSize);
      onChange(isMobileSize);
      onResize(isMobileSize);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return null;
};

export default ListenerMobile;