import styled, { css } from 'styled-components';
import { mobile } from 'components/variables';

import { PhoneAndroid, Email, Cake, LocationOn } from '@styled-icons/material';
import { Github, Medium } from '@styled-icons/fa-brands';

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 18px;
  color: ${props => props.theme.fontColor};

  @media ${mobile} {
    margin: 5px 0;
    font-size: 14px;

    &.mobile-one-line {
      grid-column: 1 / 3;
    }
  }

  a {
    color: ${props => props.theme.fontColor};
  }
`;

const IconStyle = css`
  color: ${props => props.theme.primaryDark};
  margin: 0 15px;
  width: 25px;

  @media ${mobile} {
    margin: 0 10px 0 0;
    width: 18px;
  }
`;

const InfoEmail = styled(Email)`
  ${IconStyle}
`;

const InfoPhone = styled(PhoneAndroid)`
  ${IconStyle}
`;

const InfoGithub = styled(Github)`
  ${IconStyle}
`;

const InfoMedium = styled(Medium)`
  ${IconStyle}
`;

const InfoBirthday = styled(Cake)`
  ${IconStyle}
`;

const InfoLocationCity = styled(LocationOn)`
  ${IconStyle}
`;

export const Info = () => {
  return (
    <InfoWrapper>
      <InfoItem className="mobile-one-line">
        <InfoEmail />
        <a href="mailto:sue4100035045@gmail.com">sue4100035045@gmail.com</a>
      </InfoItem>

      <InfoItem>
        <InfoLocationCity />
        <span>Taipei, Taiwan</span>
      </InfoItem>

      <InfoItem>
        <InfoBirthday />
        <span>1992 / 11 / 12</span>
      </InfoItem>

      <InfoItem>
        <InfoPhone />
        <a href="tel:+886-911412626">(+886) 911-412-626</a>
      </InfoItem>

      <InfoItem>
        <InfoGithub />
        <a href="https://github.com/wanglala5131">wanglala5131</a>
      </InfoItem>

      <InfoItem>
        <InfoMedium />
        <a href="https://medium.com/%E6%8B%89%E6%8B%89%E7%9A%84%E7%A8%8B%E5%BC%8F%E7%AD%86%E8%A8%98">
          拉拉的程式筆記
        </a>
      </InfoItem>
    </InfoWrapper>
  );
};
