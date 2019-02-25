import axios from "axios";
import { API_URL } from "../../../helpers/globals";
import { transformCoinsResponse } from "./helper";

export default {
  coins: {
    fetchByPage: (page, size) => {
      return axios
        .get(`${API_URL}/api/coins/page?page=${page}&size=${size}`)
        .then(res => res.data)
        .then(data => transformCoinsResponse(data));
    },
    fetchAll: () =>
      axios
        .get(`${API_URL}/api/coins`)
        .then(res => res.data)
        .then(data => transformCoinsResponse(data)),

    fetchTotalCount: () => axios.get(`${API_URL}/api/coins/count`).then(res => res.data)
  }
};
