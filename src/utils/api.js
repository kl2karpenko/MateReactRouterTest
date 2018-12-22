const API_URL = 'https://swapi.co/api/';

const getResponseJSON = promise => promise.then(response => response.json());

export const getData = () => getResponseJSON(fetch(API_URL));

export const getDataEntry = entry => getResponseJSON(fetch(API_URL + entry));