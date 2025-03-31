import ky from "ky";

const api = ky.create({
  prefixUrl: `${process.env.NEXT_PUBLIC_EXCHANGE_API_URL}/${process.env.NEXT_PUBLIC_EXCHANGE_API_KEY}`,
});

export default api;