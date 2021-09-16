let search = async (slot, prop, carArray) => {
  for (let i = 0; i < carArray.length; i++) {
    if (carArray[i][prop] === slot) {
      return carArray[i];
    }
  }
  return false;
};

let remove = async (slot, prop, carArray) => {
  var i = carArray.length;
  while (i--) {
    if (
      carArray[i] &&
      carArray[i].hasOwnProperty(prop) &&
      carArray[i][prop] === slot
    ) {
      carArray.splice(i, 1);
    }
  }
  return carArray;
};
module.exports = {
  search,
  remove,
};
