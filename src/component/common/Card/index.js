import styled from 'styled-components';
import { ProjectTitle } from "../../landing/Projects/style"

const Card = styled.div`
    width: 250px;
    height: 250px;
    margin: 1rem 1rem 1rem 1rem;
    padding: 3rem;
    background: rgba(255,255,255, 0.15);
    box-shadow: 15px 15px 50px #00000029;
    border-radius: 35px;
    opacity: 1;
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    overflow: hidden;
    align-item: center;

    // to prevent "link" appearance of texts
    color: black;
    text-decoration: none;

    :hover {
      background: rgba(255,255,255, 0.30);
      box-shadow: 15px 15px 10px #00000050;
    }

    :hover ${ProjectTitle} {
      font-weight: bold;
    }
`;

export default Card;