import { FormLoginType } from "../components/Homepage/Login";
import { BRAND_ID } from "../constant";
import { customFetch } from "../helper/customFetch";

// Login Function
export const handleLogin = async (data: FormLoginType) => {
  return await customFetch("/login", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      password: data.password,
      brand_id: BRAND_ID,
    }),
  });
};
