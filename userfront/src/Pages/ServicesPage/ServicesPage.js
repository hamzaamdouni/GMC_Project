import React, { useEffect, useState } from "react";
import Footer from "../../Components/Home/Footer/Footer";
import Navbar from "../../Components/ServicesElements/Navbar/Navbar";
import SearchDropdown from "../../Components/ServicesElements/SearchDropdown/SearchDropdown";
import AgentCard from "../../Components/ServicesElements/Agent Card/AgentCard";
import "./ServicesPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  currentAgent,
  getallagentCategory,
  getallagents,
  getallagentService,
  getCategory,
} from "../../JS/actions/visiteur";
import ProfilModal from "../../Components/ServicesElements/Profil Agent Modal/ProfilModal";
import Loading from "../../Components/Loading/Loading";
import RegisterAgent from "../../Components/Agent/RegisterAgent";

const ServicesPage = () => {
  const user = useSelector((state) => state.visiteurReducer.user);
  const agent = useSelector((state) => state.visiteurReducer.agent);
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
    } else if (category === "-- Categorys--") {
      dispatch(getallagentService(service));
    } else {
      dispatch(getallagentCategory(category));
    }
  }, [dispatch, service, category]);

  useEffect(() => {
    if (user.role === "Agent") {
      dispatch(currentAgent(user._id));
    }
  }, [dispatch, user._id, user.role]);
  const isloadagents = useSelector(
    (state) => state.visiteurReducer.isloadagents
  );
  const agents = useSelector((state) => state.visiteurReducer.agents);

  return user.role === "Agent" && agent === null ? (
    <RegisterAgent />
  ) : (
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
          {isloadagents ? (
            <Loading />
          ) : (
            agents &&
            agents.map((oneAgent) => (
              <AgentCard
                oneAgent={oneAgent}
                setModalIsOpen={setModalIsOpen}
                setIdagent={setIdagent}
              />
            ))
          )}
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
