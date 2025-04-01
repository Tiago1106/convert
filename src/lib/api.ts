import ky from "ky";

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default api;