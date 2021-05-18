import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin: 1rem auto;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;

export default Container;
