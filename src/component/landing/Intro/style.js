import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerWrapper = styled.div`
    max-width: 80vw;
`

export const Welcome = styled.div`
    padding-right: 2rem;
    display: flex;
    text-align: right;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    h1 {
        font-size: 5rem;
        background: -webkit-linear-gradient(96deg, #baa1ceD9 0%, #853ba572 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Description = styled.div `
    padding-right: 2rem;
    padding-left: 5rem;
    width: 60vw;
    display: flex;
    text-align: right;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
`