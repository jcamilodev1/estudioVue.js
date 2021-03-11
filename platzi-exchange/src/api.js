const url = "https://api.coincap.io/v2";

const getAssets = async () => {
  try {
    const data = await fetch(`${url}/assets?limit=20`);
    const res = await data.json();
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};
const getAsset = async name => {
  try {
    const data = await fetch(`${url}/assets/${name}`);
    const res = await data.json();
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};
const getMarkets = async coin => {
  const data = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  const res = await data.json();

  return res.data;
};
const getExhange = async id => {
  const data = await fetch(`${url}/exchanges/${id}`);
  const res = await data.json();
  return res.data;
};
const getAssetHisroty = async id => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  const data = await fetch(
    `${url}/assets/${id}/history?interval=h1&start=${start}&end=${end}`
  );
  const res = await data.json();
  return await res.data;
};
export default {
  getAssets,
  getAsset,
  getAssetHisroty,
  getMarkets,
  getExhange
};
