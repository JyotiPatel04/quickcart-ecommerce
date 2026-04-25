import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  // 1️⃣ State add karo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2️⃣ Handle function add karo
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      alert("Login successful");
      

      // token save
      localStorage.setItem("token", res.data.token);

      // Redirect to Home
      navigate("/");

      

    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white shadow rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        {/* 3️⃣ form add karo */}
        <form onSubmit={handleLogin}>

          <input
            className="w-full border p-3 rounded mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full border p-3 rounded mb-4"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;