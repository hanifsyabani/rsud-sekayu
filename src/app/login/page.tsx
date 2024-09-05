"use client";

import bg from "@/assets/rjalan1.jpeg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/service/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useRouter();

  const handleSubmit = async (e: any) => {

    e.preventDefault()
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = credentials.user;

      if (user) {
        navigate.push("/dashboard");
      } else {
        console.log("Login Gagal");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-full h-screen relative"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute inset-0 bg-gray-500 opacity-70"></div>
      <div className="pt-20">
        <div className="w-[70%]  bg-white mx-auto relative py-20 rounded-lg">
          <div className="w-1/2 m-auto">
            <div className="text-center">
              <h1 className="text-xl font-bold text-primary">
                Welcome Admin RSUD
              </h1>
              <p>Silahkan Login menggunakan Akun Anda</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-2">
                <label htmlFor="email" className="block">
                  Username
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  className="w-full outline-none px-3 py-2 border border-primary"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="w-full outline-none px-3 py-2 border border-primary"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-primary p-2 rounded-lg text-white w-full hover:bg-blue-950 transition-all mt-6 text-center"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
