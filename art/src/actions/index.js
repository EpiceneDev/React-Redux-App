// import axios from 'axios';
// ;
// export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
// export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
// export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

// export const getQuote = () => {
//     dispatchEvent({ type: FETCHING_QUOTE_START });
//     axios
//       .get("https://api.kanye.rest/thisiswrong")
//       .then(res => {
//           console.log(res)
//           //dispatchEvent({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.})
//       })
//       .catch(err => {
//           console.log("OOPS", err)
//       })
// }

import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";
export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });
  axios.get("https://api.kanye.rest/thisiswrong")
    .then(res => {
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.quote });
    })
    .catch(err => {
      dispatch({ type: FETCHING_QUOTE_FAILURE, payload: res.data.quote });
    });
};
