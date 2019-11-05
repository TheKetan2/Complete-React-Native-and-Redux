import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer 8qlVUzmjgzopCe6HMEC9-xjaoOfA90wDYAB1rMLcBhzyzCXPhVxV7E9QM_DfBdxseUwqNivXMSAPh3z-WbYYj6ic7Yhmham5vVGtgxnD_8yIkm8z6XN_CHUNTS3AXXYx"
  }
});
