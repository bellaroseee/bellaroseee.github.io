// import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
    width: 100vw;
    font: normal normal normal 1rem Avenir;
    text-transform: uppercase;
    // background: #AFAFAF 0% 0% no-repeat padding-box;
    background: transparent linear-gradient(96deg, #AFAFAFD9 0%, #AFAFAF72 100%) 0% 0% no-repeat padding-box;
    align-items: center;
    bottom: 0;
    padding: 1rem 0 1rem 0;
`;

export const Flex = styled.div`
  text-align: center;
  align-items: center;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: #212121;
  }

  @media (max-width: 680px) {
    margin-bottom: 1rem;
  }
`;
