import styled from 'styled-components';

export const WrapperBackground = styled.div`
    // margin: 5rem auto;
    display: flex;
`;

export const Wrapper = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
    align-items: center;
`;

export const Description = styled.div`
    line-height: 1.5rem;
    display: flex;
    text-align: left;
    width: 60vw;
    flex-direction: column;
    flex-wrap: wrap;
    

    h2, h3 {
        font-size: 1rem;
        margin: 0;
    }

    h4 {
        margin-top: 4px;
        margin-bottom: 0px;
    }

    p {
        font-size: 1.25rem;
        font: bold;
    }
`

export const SkillList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    // justify-content: space-around;
    list-style-type: none;
`

export const SkillItem = styled.li`
    padding: 3px;
    margin-left: 4px;
    margin-top: 4px;
    border-radius: 5px;
    // background: rgba(255,255,255, 0.10);

`