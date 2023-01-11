export const extractUniqueCarTypes = ({ cars }) => {
  let carTypes = [];
  cars.forEach((car) => {
    if (carTypes.indexOf(car.type) === -1) {
      carTypes.push(car.type);
    }
  });
  return carTypes;
};

export const filterCarsBasedOnType = ({ cars, type }) => {
  return cars.filter((carItem) => {
    return carItem.type === type;
  });
};

export const findCityIdByName = ({ cities, name }) => {
  return cities.find((city) => city.name === name)?.id;
};

export const filterCarGeneratorsByCity = ({ carGenerators, cities, city }) => {
  const cityId = findCityIdByName({ cities, name: city });
  return carGenerators.filter((carGenerator) => carGenerator.ref.id === cityId);
};
