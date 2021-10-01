import React from "react";
import styled from "styled-components";

const TitleBox = styled.div`
  margin-left: 13rem;
  margin-top: 7rem;
  margin-bottom: 2.5rem;

  @media (max-width: 1000px) {
    margin-left: 2rem;
  }

  & h1 {
    font-size: 7.2rem;
    color: white;
    margin-bottom: 3.5rem;
  }

  & p {
    font-size: 2.4rem;
    max-width: 72rem;
    color: #4a4a4a;
    width: 90%;
  }
`;

const Title = ({ title, description }) => {
  return (
    <TitleBox>
      <h1>{title}</h1>
      <p>{description}</p>
    </TitleBox>
  );
};

export default Title;
