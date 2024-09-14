import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/brand.png"; 
const apiUrl = import.meta.env.VITE_API_URL;

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle password reset request
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/auth/users/reset_password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send password reset email.");
      }

      toast.success("Password reset email sent! Check your inbox.");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-indigo-200">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg max-w-sm w-full text-center">
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto mb-4 w-3/4 cursor-pointer"
          onClick={() => navigate("/login")}
        />
        <h2 className="text-2xl font-bold text-black mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handlePasswordReset}>
          <div className="mb-6">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50 ${loading ? 'cursor-not-allowed' : ''
              }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Email"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgetPassword;
