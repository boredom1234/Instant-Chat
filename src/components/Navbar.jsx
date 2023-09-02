import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" navbar fixed z-10 bg-base-300">
        <div className="containerWrap flex justify-between">
          <a className="btn btn-ghost">Bro-Rizz</a>
          {currentUser ? (
            <button onClick={handleLogout} className="btn btn-error">
              LogOut
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
