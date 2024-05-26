import React from 'react';
import styled from "styled-components";


const PrivacyPolicyContainer = styled.div`
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
  color: #975eec;
  text-align: center;
  font-size: 28px;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 22px;
  color: #975eec;
`;

const ListTitle = styled.h4`
   margin-bottom: 20px;
   font-weight: 600;
   font-size: 20px;
   color: #975eec;
`

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

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
        <Title>Privacy Policy</Title><br/>
        <Content><Strong>Last Updated:</Strong> 26-05-2024</Content>
        <SubTitle>Introduction</SubTitle>
        <Content>Welcome to Opengrame! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our social media services.</Content>
        <SubTitle>Information We Collect</SubTitle>
        <ListTitle>a. Information You Provide Us</ListTitle>
        <StyledUl>
            <StyledLi><Strong>Account Information: </Strong>When you create an account, we collect your username, email address, password, and other details you provide.</StyledLi>
            <StyledLi><Strong>Profile Information: </Strong>You may choose to provide additional information for your profile, such as a profile picture, bio, location, and social media links.</StyledLi>
            <StyledLi><Strong>Content: </Strong>We collect the content you upload, post, or share, such as photos, videos, comments, and messages.</StyledLi>
        </StyledUl>
        <ListTitle>b. Information We Collect Automatically</ListTitle>
        <StyledUl>
            <StyledLi><Strong>Usage Data: </Strong>We collect information about your interactions with our platform, including the content you view, the users you follow, and the actions you take.</StyledLi>
            <StyledLi><Strong>Device Information: </Strong>We collect information about the device you use to access Opengrame, such as your IP address, browser type, operating system, and mobile device identifiers.</StyledLi>
            <StyledLi><Strong>Cookies and Similar Technology: </Strong>We use cookies and similar technologies to collect information about your activity on our platform.</StyledLi>
        </StyledUl>
        <SubTitle>How We Use Your Information</SubTitle>
        <Content>We use the information we collect to:</Content>
        <StyledUl>
            <StyledLi>Provide and improve our services.</StyledLi>
            <StyledLi>Personalize your experience on Opengrame.</StyledLi>
            <StyledLi>Communicate with you about updates, promotions, and other information.</StyledLi>
            <StyledLi>Monitor and analyze trends, usage, and activities to enhance user experience.</StyledLi>
            <StyledLi>Detect, prevent, and address technical issues and security breaches.</StyledLi>
            <StyledLi>Comply with legal obligations and enforce our terms of service.</StyledLi>
        </StyledUl>
        <SubTitle>How We Share Your Information</SubTitle>
        <Content>We may share your information with:</Content>
        <StyledUl>
            <StyledLi><Strong>Other Users: </Strong>Your profile information and content you post are visible to other users.</StyledLi>
            <StyledLi><Strong>Service Providers: </Strong>We may share your information with third-party service providers who assist us in operating our platform and providing services to you.</StyledLi>
            <StyledLi><Strong>Legal and Regulatory Authorities: </Strong>We may disclose your information if required by law or in response to legal processes, such as court orders or subpoenas.</StyledLi>
            <StyledLi><Strong>Business Transfers: </Strong>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</StyledLi>
        </StyledUl>
        <SubTitle>Your Choices and Rights</SubTitle>
        <StyledUl>
            <StyledLi><Strong>Account Settings: </Strong>You can update your account information and preferences through your account settings.</StyledLi>
            <StyledLi><Strong>Content Removal: </Strong>You can delete the content you have posted on Opengrame.</StyledLi>
            <StyledLi><Strong>Data Access and Portability: </Strong>You have the right to request access to the personal information we hold about you and to request that we provide it to you in a portable format.</StyledLi>
            <StyledLi><Strong>Data Deletion: </Strong>You can request the deletion of your account and personal information.</StyledLi>
            <StyledLi><Strong>Opt-Out: </Strong>You can opt-out of receiving promotional communications from us by following the instructions in those communications.</StyledLi>
        </StyledUl>
        <SubTitle>Security</SubTitle>
        <Content>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet-based service is completely secure, and we cannot guarantee the absolute security of your information.</Content>
        <SubTitle>Children's Privacy</SubTitle>
        <Content>Opengrame is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</Content>
        <SubTitle>Changes to this Privacy Policy</SubTitle>
        <Content>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our platform. You are advised to review this Privacy Policy periodically for any changes.</Content>
        <SubTitle>Contact Us</SubTitle>
        <Content style={{ marginBottom: '5rem' }}>If you have any questions or concerns about this Privacy Policy, please contact us at: <br/><br/>
        <Strong>Email: </Strong><a href="mailto:opengram@gmail.com" style={{color: 'red'}}> opengrame@gmail.com</a><br/>
        <Strong>Contact: </Strong>+91 99323 32321
        </Content>
    </PrivacyPolicyContainer>
  )
}

export default PrivacyPolicy