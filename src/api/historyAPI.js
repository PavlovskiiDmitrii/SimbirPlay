import axios from "axios";

export async function fetchHistory(id) {
  const { data } = await axios.get(`http://simbir-play.site/user/info/${id}`);

  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: data.result }), 500)
  );
}