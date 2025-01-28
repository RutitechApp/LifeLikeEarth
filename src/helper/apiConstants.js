export const BASE_URL = "https://life-like-earth-server.vercel.app";

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";

const apiConst = {
  signIn: `${BASE_URL}/api/user/login`,
  signUp: `${BASE_URL}/api/user/register`,
  forgotPassword: `${BASE_URL}/api/user/forget-password`,
  verifyOtp: `${BASE_URL}/api/user/verify-otp`,
  resendOtp: `${BASE_URL}/api/user/resend-otp`,
  newPassword: `${BASE_URL}/api/user/reset-password`,
  userInfo: `${BASE_URL}/api/user/info`,
  getExoplanet: (page, limit, type) =>
    `${BASE_URL}/api/exoplanets-type?page=${page}&limit=${limit}&planetType=${type}`,
  getExoplanetQuiz: (id) => `${BASE_URL}/api/exoplanets-quiz/${id}`,
};

export { GET, POST, PUT, DELETE, apiConst };
