import axios from "axios";

const getInfosApi = async function () {
  const result = await axios.get("http://localhost:5000/musical/selectData");
  const { data } = result;
  return data;
};
export const addInfoApi = async function (data) {
  const result = await axios.post(
    "http://localhost:5000/musical/registData",
    data
  );
  const res = result.data.success;
  return res;
};
export default getInfosApi;
