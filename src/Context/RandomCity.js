const RandomCity = () => {
  const random = Math.floor(Math.random() * (4 - 1) + 1);
  const cytes = ['maputo', 'los angeles', 'lisboa'];
  switch (random) {
    case 1:
      return cytes[0];
    case 2:
      return cytes[1];
    case 3:
      return cytes[2];
    default:
      return cytes[1];
  }
};

export default RandomCity;
