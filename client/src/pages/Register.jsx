import { useState } from "react";
import API from "../api/api";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase().replace(" ", "")]: e.target.value,
    });
  };

  const handleRegister = async () => {
    console.log(formData);
    try {
      const res = await API.post("/auth/register", formData);
      alert(res.data.message);
    } catch (error) {
      console.log("Full error:", error);
      console.log("Error message:", error.message);
      console.log("Backend response:", error.response?.data);

      alert(
        error.response?.data?.message || error.message || "Registration failed",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white shadow rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

        <input
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border p-3 rounded mb-4"
          placeholder="Full Name"
        />

        <input
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border p-3 rounded mb-4"
          placeholder="Email"
        />

        <input
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full border p-3 rounded mb-4"
          placeholder="Password"
          type="password"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
