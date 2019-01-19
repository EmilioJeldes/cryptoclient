import axios from "axios";
import { API_URL } from "../../../helpers/globals";
import { transformCoinsResponse } from "./helper";

export default {
  coins: {
    fetchAll: () =>
      axios
        .get(`${API_URL}/api/coins`)
        .then(res => res.data)
        .then(data => transformCoinsResponse(data))
  }
};
