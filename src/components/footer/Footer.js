import styled, { css } from 'styled-components';
import { tablets, mobile } from 'components/variables';
import { PhoneAndroid, Email } from '@styled-icons/material';
import { Container } from 'components/Custom';

const FooterDiv = styled.footer`
  padding: 20px;
  background-color: ${props => props.theme.primaryDark};
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0;

  @media ${tablets} {
    flex-direction: column;
  }

  a {
    color: #fff;
  }

  p {
    display: flex;
    align-items: center;

    @media ${tablets} {
      margin-left: 25%;
    }

    @media ${mobile} {
      margin-left: 10px;
    }

    & + p {
      margin-left: 30px;

      @media ${tablets} {
        margin-left: 25%;
        margin-top: 10px;
      }

      @media ${mobile} {
        margin-left: 10px;
      }
    }
  }
`;

const IconStyle = css`
  color: #fff;
  margin: 0 15px;
  width: 25px;
`;

const InfoPhone = styled(PhoneAndroid)`
  ${IconStyle}
`;

const InfoEmail = styled(Email)`
  ${IconStyle}
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <FooterContainer>
        <p>
          <InfoPhone />
          <a href="tel:+886-911412626">(+886) 911-412-626</a>
        </p>
        <p>
          <InfoEmail />
          <a href="mailto:sue4100035045@gmail.com">sue4100035045@gmail.com</a>
        </p>
      </FooterContainer>
    </FooterDiv>
  );
};
