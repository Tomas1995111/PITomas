import data from './data.js';

export default function fetchDataFromFile(id) {
  return data.filter((item) => item.id === id)[0];
}