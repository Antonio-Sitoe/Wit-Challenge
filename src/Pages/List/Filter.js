function FilterDates(elements, increment) {
  return elements.filter((item) => {
    return new Date(item.dt_txt).getDate() === new Date().getDate() + increment;
  });
}

export default FilterDates;
