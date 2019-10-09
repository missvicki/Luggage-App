export const filterTrips = (trips, filterObject) => {
  const {
    destination = null,
    departure = null,
    busDriver = null
  } = filterObject;

  if (Object.keys(filterObject).length) {
    let tripsData = [];
    console.log(tripsData, "trip data");
    for (let i = 0; i < trips.length; i++) {
      console.log(trips, "trip data");
      const j = trips[i];
      // console.log(j.busDriver, busDriver, "bus driver");
      if (destination && j.destination != destination) {
        continue;
      }
      if (departure && j.departure != departure) {
        continue;
      }
      if (busDriver && j.busDriver != busDriver) {
        continue;
      }
      tripsData.push(j);
    }
    return tripsData;
  }
  return trips;
};
