import React from "react";
import "./SideBarAdmin.css";
import Logo from "../../../Assets/Logo.png";
import {
  MdAdminPanelSettings,
  MdMessage,
  MdOutlineMiscellaneousServices,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { logoutAdmin } from "../../../JS/actions/administrateur";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SideBarAdmin = ({ admin, setIsAffiche }) => {
  const dispatch = useDispatch();
  const handleLogoutAdmin = () => {
    dispatch(logoutAdmin());
  };

  return (
    <div className="SideBarAdminContainer">
      {/*------------------------------ SideBar Header ------------------------------*/}
      <div>
        <div className="SideBarAdminHeard">
          <img src={Logo} alt="Logo" />
          <span>
            {admin.prenom} {admin.nom}
          </span>
        </div>
        {/*------------------------------ SideBar Body ------------------------------*/}
        <div className="SideBarAdminBody">
          <div className="SideBarAdminBodyBtn">
            <button
              onClick={() => {
                setIsAffiche("Services");
              }}
            >
              <MdOutlineMiscellaneousServices
                size={20}
                className="SideBarIcon"
              />
              <span>Services</span>
            </button>
          </div>
          <div className="SideBarAdminBodyBtn">
            <button
              onClick={() => {
                setIsAffiche("Category");
              }}
            >
              {" "}
              <MdAdminPanelSettings size={20} className="SideBarIcon" />
              <span>Category</span>
            </button>
          </div>

          <div className="SideBarAdminBodyBtn">
            <button
              onClick={() => {
                setIsAffiche("Agents");
              }}
            >
              <MdSupervisedUserCircle size={20} className="SideBarIcon" />
              <span>Agents</span>
            </button>
          </div>
          <div className="SideBarAdminBodyBtn">
            <button
              onClick={() => {
                setIsAffiche("Reclamation");
              }}
            >
              <MdMessage size={20} className="SideBarIcon" />{" "}
              <span>Reclamation</span>
            </button>
          </div>
        </div>
      </div>
      {/*------------------------------ SideBar Footer ------------------------------*/}
      <div className="SideBarAdminFooter">
        <Link
          onClick={handleLogoutAdmin}
          to="/admin"
          className="SideBarAdminFooterBtn"
        >
          <AiOutlineLogout size={20} className="SideBarIcon" />{" "}
          <span>Se Déconnecter</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBarAdmin;
