import * as types from "../lib/actionTypes";
import Axios from "axios";

// Get Items
const getItemsStarted = () => ({
  type: types.GET_ITEMS_STARTED
});

const getItemsSucceeded = data => ({
  type: types.GET_ITEMS_SUCCEEDED,
  payload: data
});

const getItemsFailed = error => ({
  type: types.GET_ITEMS_FAILED,
  payload: error,
  error: true
});


export const getItems = payload => {
  return dispatch => {
    dispatch(getItemsStarted());

    const url = "https://jsonplaceholder.typicode.com/photos";

    Axios.get(`${url}`)
      .then(function (response) {
        dispatch(getItemsSucceeded(response.data));
      })
      .catch(function (error) {
        dispatch(getItemsFailed(error));
      });
  };
};



// export const getItems = payload => {
//   const productsData = payload ? payload : products;
//   return dispatch => {
//     // Used for Start Fetching Data
//     dispatch(getItemsStarted());

//     // Used when get Success Response
//     dispatch(getItemsSucceeded(productsData));

//     // Used when get error
//     dispatch(getItemsFailed("error.response"));
//   };
// };
