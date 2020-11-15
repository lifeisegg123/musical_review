import axios from "axios";

const getPageApi = async function (dataToSend) {
  const result = await axios.get("http://localhost:5000/musical/pagelist", {
    params: dataToSend,
  });
  const { data } = result;
  return data;
};

export const getMusicalData = async function (targetId) {
  const result = await axios.get(
    `http://localhost:5000/musical/musical-data/${targetId}`
  );
  const {
    data: [res],
  } = result;

  return res;
};

export const addInfoApi = async function (data) {
  const result = await axios.post("http://localhost:5000/musical/regist", data);
  const res = result.data.success;
  return res;
};
export default getPageApi;
