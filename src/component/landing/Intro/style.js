import styled from 'styled-components';

export const Wrapper = styled.div`
    height-min: 95vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerWrapper = styled.div`
    max-width: 80vw;
`

export const Welcome = styled.div`
    padding-top: 10vh;
    display: flex;
    text-align: left;
    flex-direction: column;
    flex-wrap: wrap;
    width: 60vw;

    p {
        font-size: 1.25rem;
    }
    h1 {
        font-size: 5rem;
        margin: 0px;
        background: -webkit-linear-gradient(96deg, #baa1ceD9 0%, #853ba572 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Description = styled.div `
    // padding-right: 2rem;
    // padding-left: 5rem;
    width: 60vw;
    display: flex;
    text-align: left;
    flex-direction: column;
    flex-wrap: wrap;
    // align-items: flex-end;
`