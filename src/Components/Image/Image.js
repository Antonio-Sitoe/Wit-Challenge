import React from 'react';

const Image = ({ alt, src }) => {
  return <img src={`http://openweathermap.org/img/w/${src}.png`} alt={alt} />;
};

export default Image;
