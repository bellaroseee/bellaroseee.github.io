import styled from 'styled-components';

export const WrapperBackground = styled.div`
    margin: 5rem auto;
    height: 70vh;
    display: flex;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const ProfilePhoto = styled.div`
    width: 10rem;
    height: 10rem;
    margin: 1rem 1rem 1rem 1rem;
    border-radius: 100%;
    box-shadow: 15px 15px 50px #00000030;
    
    .profile-image{
        border-radius: 100%;
    }
`

export const Socials = styled.div`
    margin-left: 2rem;
    listStyle: none;
    display: flex; 
    flex-direction: column;

    .icons svg{
        width: 3rem;
        height: 3rem;
        margin-bottom: 1rem;
        color: #000000;
    }

    .icons svg:hover {
        color: #9D62A7;
        filter: drop-shadow(0.15rem 0.15rem 0.5rem rgba(0, 0, 0, 0.46));
    } 

    @media (max-width: 800px) {
        align-items: center;
        flex-direction: row;
        .icons svg{
            margin-right: 2rem;
        }
    }
`

export const Description = styled.div`
    // line-height: 1.5rem;
    width: 60%;

    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1rem;
        // text-transform: uppercase;
    }
`