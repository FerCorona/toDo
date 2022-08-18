import qs from 'qs';

export const encodeParams = ( query = {} ) => qs.stringify(query);

export const defaultScreenSizeForMobile = 992;
export const isMobile = (screenSize = defaultScreenSizeForMobile) => window.innerWidth <= screenSize;