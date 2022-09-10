import axios from "axios";

export async function fetchHistory() {
    const { data } = await axios.get(`http://simbir-play.site/user/info/3`);
    return data;
}
