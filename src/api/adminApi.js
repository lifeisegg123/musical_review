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
  const result = await axios
    .post("http://localhost:5000/musical/regist", data)
    .then((value) => {
      alert("성공!");
      return value.data.success;
    })
    .catch((value) => {
      console.log(value);
      return false;
    });
  return result;
};

export const updateInfoApi = async function (data) {
  const result = await axios
    .patch("http://localhost:5000/musical/updatedata", data)
    .then(() => true)
    .catch(() => false);
  return result;
};

export const deleteInfoApi = async function (targetId) {
  const result = await axios
    .patch(`http://localhost:5000/musical//del-musical-data/${targetId}`)
    .then(() => true)
    .catch(() => false);
  return result;
};
export default getPageApi;
