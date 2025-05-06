import { useEffect, useState } from "react";
import API from "../config/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const res = await API.get("/auth/protected");
        setData(res.data.message);
      } catch (err) {
        console.error(err);
        setData("Access denied");
        navigate("/login");
      }
    };

    fetchProtected();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-gray-700 mb-6">{data}</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
