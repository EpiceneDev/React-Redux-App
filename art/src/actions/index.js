import axios from 'axios'

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START"
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS"
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE"

export const getQuote = () => {
    dispatchEvent({ type: FETCHING_QUOTE_START });
    axios
      .get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
      .then(res => {
          console.log(res)
          //dispatchEvent({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.})
      })
}