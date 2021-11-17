import React from "react";
import "./HomeAdminHeader.css";
import { FaUsersCog, FaUsers } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { CgListTree } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const HomeAdminHeader = () => {
  const agents = useSelector((state) => state.AdministrateurReducer.agents);
  const users = useSelector((state) => state.AdministrateurReducer.users);
  const services = useSelector((state) => state.AdministrateurReducer.services);
  const categorys = useSelector(
    (state) => state.AdministrateurReducer.categorys
  );

  const reclamations = useSelector(
    (state) => state.AdministrateurReducer.reclamations
  );

  return (
    <div className="HomeAdminHeaderContainer">
      <div className="HomeAdminHeaderCard">
        <FaUsersCog size={50} className="HomeAdminHeaderIcon" />
        <div className="HomeAdminHeaderInfo">
          <span className="HomeAdminHeaderNumber">{agents.length} </span>
          <span> Agents </span>
        </div>
      </div>

      <div className="HomeAdminHeaderCard">
        <FaUsers size={50} className="HomeAdminHeaderIcon" />
        <div className="HomeAdminHeaderInfo">
          <span className="HomeAdminHeaderNumber">
            {users.filter((user) => user.role === "Client").length}{" "}
          </span>
          <span> Clients </span>
        </div>
      </div>

      <div className="HomeAdminHeaderCard">
        <MdMiscellaneousServices size={50} className="HomeAdminHeaderIcon" />
        <div className="HomeAdminHeaderInfo">
          <span className="HomeAdminHeaderNumber">{services.length} </span>
          <span> Services </span>
        </div>
      </div>

      <div className="HomeAdminHeaderCard">
        <CgListTree size={40} className="HomeAdminHeaderIcon" />
        <div className="HomeAdminHeaderInfo">
          <span className="HomeAdminHeaderNumber">{categorys.length} </span>
          <span> Categorys </span>
        </div>
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
