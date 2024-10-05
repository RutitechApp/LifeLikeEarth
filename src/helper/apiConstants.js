export const BASE_URL = "https://life-like-earth-server.vercel.app";

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";

const apiConst = {
  getExoplanet: `${BASE_URL}/api/exoplanets`,
  getExoplanetQuiz: (id) => `${BASE_URL}/api/exoplanets-quiz/${id}`,
};

export { GET, POST, PUT, DELETE, apiConst };
