import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeAdminBody from "../../../Components/Administrateur/HomeAdminBody/HomeAdminBody";
import HomeAdminHeader from "../../../Components/Administrateur/HomeAdminHeader/HomeAdminHeader";
import SideBarAdmin from "../../../Components/Administrateur/SideBarAdmin/SideBarAdmin";
import {
  currentAdmin,
  getReclamations,
} from "../../../JS/actions/administrateur";
import "./HomeAdmin.css";

const HomeAdmin = () => {
  const dispatch = useDispatch();
  const [isAffiche, setIsAffiche] = useState();
  useEffect(() => {
    dispatch(currentAdmin());
    dispatch(getReclamations());
  }, [dispatch, isAffiche]);

  const admin = useSelector((state) => state.AdministrateurReducer.admin);
  return (
    /*------------------------------------- HomeAdminSidebarContainer -------------------------------------*/
    <div className="HomeAdminContainer">
      <div className="HomeAdminSidebarContainer">
        <SideBarAdmin admin={admin} setIsAffiche={setIsAffiche} />
      </div>
      <div className="HomeAdminContent">
        {/*------------------------------------- HomeAdminContentHeader -------------------------------------*/}
        <div className="HomeAdminContentHeader">
          <HomeAdminHeader />
        </div>
        {/*------------------------------------- HomeAdminContentBody -------------------------------------*/}
        <div className="HomeAdminContentBody">
          <HomeAdminBody isAffiche={isAffiche} />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
