import styled from 'styled-components';
import PropTypes from 'prop-types';
import { tablets, mobile } from 'components/variables';

const TitleBox = styled.div`
  padding-top: 80px;
  text-align: center;

  h3 {
    position: relative;
    display: inline-block;
    font-size: 40px;
    font-weight: 700;

    @media ${tablets} {
      font-size: 35px;
    }

    @media ${mobile} {
      font-size: 25px;
    }

    &::after {
      content: '';
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      width: 80px;
      height: 80px;
      background-color: ${props => props.theme.primaryLight};
      border-radius: 50%;
      z-index: -1;

      @media ${mobile} {
        width: 60px;
        height: 60px;
      }
    }
  }
`;

export const Title = props => {
  return (
    <TitleBox>
      <h3>{props.children}</h3>
    </TitleBox>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
