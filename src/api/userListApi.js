import axios from "axios";

export async function fetchUserRate() {
    const {data} = await axios.get(`http://simbir-play.site/rating`, {
        mode: 'no-cors'
    });
    return data;
}
