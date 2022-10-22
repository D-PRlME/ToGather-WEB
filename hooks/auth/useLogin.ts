import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const useLogin = () => {
  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const onChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitLogin = async () => {
    try {
      const { data } = await axios.post("/users/auth", {
        email: loginData.email,
        password: loginData.password,
      });
      localStorage.setItem("access_token", data.access_token);
      router.push("/");
    } catch (error) {}
  };

  return { loginData, onChangeLoginData, onSubmitLogin };
};

export default useLogin;
