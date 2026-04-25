import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        QuickCart
      </Link>

      {/* Menu */}
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/products" className="hover:text-blue-600">
          Products
        </Link>

        <Link to="/cart" className="hover:text-blue-600">
          Cart
        </Link>

        {/* Show when logged in */}
        {token && (
          <Link to="/orders" className="hover:text-blue-600">
            My Orders
          </Link>
        )}

        {/* Login / Logout */}
        {token ? (
          <button
            onClick={handleLogout}
            className="hover:text-red-600 font-medium"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>

            <Link to="/register" className="hover:text-blue-600">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;