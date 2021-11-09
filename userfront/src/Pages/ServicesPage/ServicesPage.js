import React, { useEffect, useState } from "react";
import Footer from "../../Components/Home/Footer/Footer";
import Navbar from "../../Components/ServicesElements/Navbar/Navbar";
import SearchDropdown from "../../Components/ServicesElements/SearchDropdown/SearchDropdown";
import AgentCard from "../../Components/ServicesElements/Agent Card/AgentCard";
import "./ServicesPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getallagents, getCategory } from "../../JS/actions/visiteur";
import ProfilModal from "../../Components/ServicesElements/Profil Agent Modal/ProfilModal";

const ServicesPage = () => {
  const isload = useSelector((state) => state.visiteurReducer.isload);
  const agents = useSelector((state) => state.visiteurReducer.agents);

  const [service, setService] = useState("-- Services--");
  const [category, setCategory] = useState("-- Categorys--");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idagent, setIdagent] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (service !== "-- Services--") {
      dispatch(getCategory(service));
    }
  }, [dispatch, service]);

  useEffect(() => {
    if (service === "-- Services--") {
      dispatch(getallagents());
    }
  }, [dispatch, service]);

  return (
    <div className="ServicesPage">
      <Navbar />
      <div className="ServicesPageContent">
        <SearchDropdown
          setService={setService}
          service={service}
          setCategory={setCategory}
          category={category}
        />
        <div className="AgentCards">
          {isload
            ? null
            : agents.map((oneAgent) => (
                <AgentCard
                  oneAgent={oneAgent}
                  setModalIsOpen={setModalIsOpen}
                  setIdagent={setIdagent}
                />
              ))}
        </div>
      </div>
      {modalIsOpen && (
        <ProfilModal setModalIsOpen={setModalIsOpen} idagent={idagent} />
      )}

      <Footer />
    </div>
  );
};

export default ServicesPage;
