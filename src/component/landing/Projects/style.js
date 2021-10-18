import styled from 'styled-components';

export const Wrapper = styled.div` 
    min-height: 100vh;
`;

export const Info = styled.div`
    margin-top: 6rem;
    margin-left: 2rem;
    display: flex;
    
    h3 {
        font-size: 2.5rem;
        color: #3B145E;
    }
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ProjectTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.25rem;
    text-align: center;
    text-transform: capitalize;
    font-family: 'Comfortaa', cursive;
`

export const ProjectImg = styled.img`
    margin: 1rem auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
    max-height: 25%;
    widht: auto;
    height: auto;
    border-radius: 10%;
`

export const ProjectDescription = styled.div`
    line-height: 1.25rem;
    margin: 1rem auto;
`

export const Languages = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
`

export const LanguageItem = styled.div`
    font-size: 0.75rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    background-color: ${({ color = 0 }) => color};
    border-radius: 54px;
`