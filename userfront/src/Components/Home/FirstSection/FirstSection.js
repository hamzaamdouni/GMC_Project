import React, { useState } from "react";
import Video from "../../../Assets/Visiteur/video.mp4";
import task from "../../../Assets/Visiteur/task.svg";

import {
  ArrowRight,
  FirstBg,
  FirstBtnWrapper,
  FirstContainer,
  FirstContent,
  FirstH1,
  VideoBg,
  ArrowForward,
  FirstImg,
  FrirstBtnLink,
} from "./FirstSectionElements";

const FirstSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <FirstContainer>
        <FirstBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </FirstBg>
        <FirstContent>
          <FirstH1> Au service de votre vie quotidienne </FirstH1>
          <FirstImg src={task} />
          <FirstBtnWrapper>
            <FrirstBtnLink
              to="/register"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {" "}
              S'inscrire {hover ? <ArrowForward /> : <ArrowRight />}{" "}
            </FrirstBtnLink>
          </FirstBtnWrapper>
        </FirstContent>
      </FirstContainer>
    </div>
  );
};

export default FirstSection;
