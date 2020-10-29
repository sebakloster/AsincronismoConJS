const fetchData = require("../utils/fetchdata");
const API = "https://rickandmortyapi.com/api/character/";

const showData = async (url_api) => {
  try {
    let data = await fetchData(url_api);
    console.log(data.info.count);
    data = await fetchData(`${url_api}${data.results[0].id}`);
    console.log(data.name);
    data = await fetchData(data.origin.url);
    console.log(data.dimension);
  } catch (error) {
    console.error(error);
  }
};
console.log("before");
showData(API);
console.log("after");

//-------
