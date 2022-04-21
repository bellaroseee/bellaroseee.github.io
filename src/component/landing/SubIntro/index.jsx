import React from "react"
import { Wrapper, WrapperBackground, Description, SkillList, SkillItem } from "./style"
import Container from "../../common/Container"

export default function SubIntro() {
    return (
        <WrapperBackground>
            <Wrapper as={Container} id="about">
                <Wrapper>
                    <Description>
                        {/* <p>
                            (this needs to be changed btw)
                        I'm a fresh graduate from University of Washington. My interests are working with Big Data, Machine Learning Models, and Natural Language Processing technology.
                        </p> */}
                        <p>Bachelor of Computer Science<br/>University of Washington 2021</p>
                    </Description>
                    <Description>
                        <h3>Skills</h3>
                        <h4>Programming and Databases</h4>
                        <SkillList>
                            <SkillItem>Python</SkillItem>
                            <SkillItem>Java</SkillItem>
                            <SkillItem>C, C++</SkillItem>
                            <SkillItem>SQL</SkillItem>
                            <SkillItem>GraphQL</SkillItem>
                        </SkillList>
                        <h4>Framework and Libraries</h4>
                        <SkillList>
                            <SkillItem>Scikit-learn</SkillItem>
                            <SkillItem>NumPy</SkillItem>
                            <SkillItem>TensorFlow, PyTorch</SkillItem>
                            <SkillItem>Pandas</SkillItem>
                            <SkillItem>ReactJS</SkillItem>
                            <SkillItem>NodeJS</SkillItem>
                            <SkillItem>GatsbyJS</SkillItem>
                            <SkillItem>Seaborn</SkillItem>
                            <SkillItem>Hadoop</SkillItem>
                            <SkillItem>Spark</SkillItem>
                        </SkillList>
                        <h4>Version Control, Tools and Operating Systems</h4>
                        <SkillList>
                            <SkillItem>Git</SkillItem>
                            <SkillItem>Azure</SkillItem>
                            <SkillItem>Windows</SkillItem>
                            <SkillItem>Unix</SkillItem>
                        </SkillList>
                    </Description>
                    {/* <ListLink /> */}
                </Wrapper>
            </Wrapper>
        </WrapperBackground>
    )
}