import styled from "styled-components";

export const ServicesContainer = styled.div`
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 95%;
  margin: 15px auto;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.div`
  background: #181818;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  min-height: 350px;
  padding: 30px;
  box-shadow: 0 10px 20px -10px rgba(10, 10, 10, 0.75);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2s);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 20px;
`;

export const ServicesH1 = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 300;
  color: #efa51f;
  margin: 64px 0;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #efa51f;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;
