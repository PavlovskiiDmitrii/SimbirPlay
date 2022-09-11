import axios from "axios";

export const defaultRulesTypes = ["ecology", "work", "sport"];

export async function fetchRules() {
  const { data } = await axios.get(`http://simbir-play.site/promo/list`);

  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: data }), 500)
  );
}