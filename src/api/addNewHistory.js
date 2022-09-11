import axios from "axios";

export async function fetchAddNewHistory(id, comment, balls) {
  const { data } = await axios.post(
    `http://simbir-play.site/user/create-stimulus/${id}`,
    {
      giverId: 1,
      promoId: 1,
      balls: balls,
      comment: comment,
    },
    {
      headers: {
        "Content-Type": "application/json"
      },
    }
  );

  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: data.result }), 500)
  );
}
