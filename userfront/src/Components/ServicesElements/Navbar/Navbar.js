import React from "react";
import "./Navbar.css";
import Logo from "../../../Assets/Logo.png";
import { Link } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../JS/actions/visiteur";
import Loading from "../../Loading/Loading";
const Navbar = () => {
  const user = useSelector((state) => state.visiteurReducer.user);
  const isload = useSelector((state) => state.visiteurReducer.isload);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isload ? (
        <Loading />
      ) : user ? (
        <nav className="navbarContainer">
          <Link to="/services">
            <img src={Logo} alt="logo" className="NavImg" />
          </Link>
          <div className="ProfileContent">
            {user && (
              <img
                src={`uploads/${user.imageName}`}
                alt=""
                className="profileNavbar"
              />
            )}

            <div class="dropdown">
              <button class="dropbtn">
                <BiCaretDown />
              </button>
              <div class="dropdown-content">
                <div className="dropdown-info">
                  <span>
                    {" "}
                    {user.nom} {user.prenom}
                  </span>
                  <span> {user.adress} </span>
                  <span> {user.email} </span>
                  <span> {user.phone} </span>
                </div>
                <div className="dropdown-path">
                  <Link to="/profil">Gérer Profil</Link>
                  <Link onClick={handleLogout} to="/">
                    Se Déconnecter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </div>
  );
};

export default Navbar;
