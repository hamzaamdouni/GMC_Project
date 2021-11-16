import React from "react";
import "./HomeAdminHeader.css";
import { FaUsersCog, FaUsers } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { CgListTree } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const HomeAdminHeader = () => {
  const reclamations = useSelector(
    (state) => state.AdministrateurReducer.reclamations
  );
  return (
    <div className="HomeAdminHeaderContainer">
      <div className="HomeAdminHeaderCard">
        <FaUsersCog size={50} className="HomeAdminHeaderIcon" />
        <span>10 Agents</span>
      </div>

      <div className="HomeAdminHeaderCard">
        <FaUsers size={50} className="HomeAdminHeaderIcon" />
        <span>10 Clients </span>
      </div>

      <div className="HomeAdminHeaderCard">
        <MdMiscellaneousServices size={50} className="HomeAdminHeaderIcon" />
        <span>10 Services </span>
      </div>

      <div className="HomeAdminHeaderCard">
        <CgListTree size={40} className="HomeAdminHeaderIcon" />
        <span>10 Categorys </span>
      </div>

      <div className="HomeAdminHeaderCard">
        <RiMessage2Fill size={50} className="HomeAdminHeaderIcon" />
        <div className="HomeAdminHeaderInfo">
          <span className="HomeAdminHeaderNumber">{reclamations.length} </span>
          <span> Reclamations </span>
        </div>
      </div>
    </div>
  );
};

export default HomeAdminHeader;
