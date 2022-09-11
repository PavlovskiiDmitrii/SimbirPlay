import axios from "axios";

export async function fetchStoreItem() {
  const { data } = await axios.get(`http://simbir-play.site/merch/list`);

  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: data }), 500)
  );
}