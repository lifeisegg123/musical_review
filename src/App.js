import React from "react";

import axios from "axios";

const test = async function () {
  const data = {
    name: "테스트!!!",
    summary: "테스트용 데이터를 만들고",
    link: "localhost:3000",
  };
  const result = await axios.get("http://localhost:5000/admin/selectData");
  const res = result.data;
  console.log(res);
};
function App() {
  return <button onClick={test}>test</button>;
}

export default App;
