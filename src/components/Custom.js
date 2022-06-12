import styled from 'styled-components';
import { bigTablets, mobile } from './variables';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 100px 20px 20px;
  margin: auto;

  @media ${bigTablets} {
    max-width: 900px;
  }

  @media ${mobile} {
    padding-top: 70px;
  }
`;
