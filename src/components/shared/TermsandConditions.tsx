import styled from "styled-components";

const TermsContainer = styled.div`
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

const TermsConditions = () => {
  return (
    <TermsContainer>
        <Title>Terms and Conditions</Title><br/>
        <Content><Strong>Last Updated:</Strong> 26-05-2024</Content>
        <SubTitle>Introduction</SubTitle>
        <Content>Welcome to OpenGrame! These Terms and Conditions govern your use of our social media services.</Content>
        <SubTitle>Acceptance of Terms</SubTitle>
        <Content>By accessing or using our platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</Content>
        <SubTitle>Use of Services</SubTitle>
        <Content>You agree to use our services in compliance with applicable laws and regulations. You are solely responsible for your conduct and any data, text, information, usernames, graphics, images, photos, profiles, audio, and video clips, links, or other content (collectively, "Content") that you submit, post, and display on our platform.</Content>
        <SubTitle>Account Registration</SubTitle>
        <Content>In order to access certain features of our platform, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</Content>
        <SubTitle>Intellectual Property Rights</SubTitle>
        <Content>Our platform and its original content, features, and functionality are owned by OpenGrame and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</Content>
        <SubTitle>Prohibited Activities</SubTitle>
        <Content>When using our services, you agree not to engage in any of the following activities:
            <StyledUl> <br/>
                <StyledLi>Violating laws or regulations;</StyledLi>
                <StyledLi>Infringing intellectual property rights;</StyledLi>
                <StyledLi>Posting or transmitting unauthorized commercial communications (such as spam);</StyledLi>
                <StyledLi>Interfering with the operation of our platform;</StyledLi>
                <StyledLi>Accessing or using our platform using automated means (such as bots).</StyledLi>
            </StyledUl>
        </Content>
        <SubTitle>Termination</SubTitle>
        <Content>We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.</Content>
        <SubTitle>Changes to Terms</SubTitle>
        <Content>We reserve the right to modify or replace these Terms and Conditions at any time. It is your responsibility to review these Terms and Conditions periodically for changes.</Content>
        <SubTitle>Contact Us</SubTitle>
        <Content style={{ marginBottom: '5rem' }}>If you have any questions or concerns about these Terms and Conditions, please contact us at: <br/><br/>
        <Strong>Email: </Strong><a href="mailto:opengrame@gmail.com" style={{color: 'red'}}>opengrame@gmail.com</a><br/>
        <Strong>Contact: </Strong>+91 99323 32321
        </Content>
    </TermsContainer>
  )
}

export default TermsConditions;
