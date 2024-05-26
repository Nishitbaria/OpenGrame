import React from 'react';
import styled from "styled-components";

const LicensingContainer = styled.div`
  margin: auto;
  max-width: 75%;
  overflow: auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
  text-align: justify;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 10px;
    font-size: 12px;
    padding-bottom: 5rem; /* Ensure enough space for the bottom bar */
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  color: #975eec;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 22px;
  color: #975eec;
`;

const Content = styled.p`
  margin-bottom: 20px;
`;

const StyledUl = styled.ul`
  margin-bottom: 20px;
  list-style-type: disc;
  padding-left: 20px;
`;

const StyledLi = styled.li`
  margin-bottom: 20px;
  list-style-type: disc;
  margin-left: 20px;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Licensing = () => {
  return (
    <LicensingContainer>
        <Title>Licensing Agreement</Title><br/>
        <Content><Strong>Last Updated:</Strong> 26-05-2024</Content>
        <SubTitle>Open Source License</SubTitle>
        <Content>OpenGrame is licensed under the terms of the Apache License 2.0, a permissive open-source software license approved by the Apache Software Foundation.</Content>
        <SubTitle>Permissions</SubTitle>
        <StyledUl>
            <StyledLi><Strong>Commercial Use: </Strong>You are free to use the software for any commercial purpose.</StyledLi>
            <StyledLi><Strong>Modification: </Strong>You have the freedom to modify the software to suit your needs.</StyledLi>
            <StyledLi><Strong>Distribution: </Strong>You can redistribute copies of the original software, either in its original form or with modifications.</StyledLi>
            <StyledLi><Strong>Patent Grant: </Strong>You receive an express grant of patent rights from contributors.</StyledLi>
        </StyledUl>
        <SubTitle>Conditions</SubTitle>
        <StyledUl>
            <StyledLi><Strong>License Notice: </Strong>Any distribution of the software or its derivatives must include a copy of the Apache License 2.0.</StyledLi>
            <StyledLi><Strong>Attribution: </Strong>You must retain the copyright notice and all other notices that refer to this License and to the disclaimer of warranties.</StyledLi>
            <StyledLi><Strong>Changes: </Strong>If you modify the software, you must clearly document the changes made and indicate that they are your modifications.</StyledLi>
            <StyledLi><Strong>No Trademark Use: </Strong>This license does not grant you any rights to use any trademarks, service marks, or logos associated with OpenGrame.</StyledLi>
            <StyledLi><Strong>Disclaimer of Warranty: </Strong>The software is provided "as is," without warranty of any kind, express or implied.</StyledLi>
        </StyledUl>
        <SubTitle>Contact Information</SubTitle>
        <Content>If you have any questions or concerns about this Licensing Agreement, please contact us at: <br/><br/>
        <Strong>Email: </Strong><a href="mailto:opengrame@gmail.com" style={{color: 'red'}}>opengrame@gmail.com</a><br/>
        <Strong>Contact: </Strong>+91 99323 32321
        </Content>
    </LicensingContainer>
  )
}

export default Licensing;
