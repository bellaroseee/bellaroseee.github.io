import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Socials, ProfilePhoto, Wrapper, WrapperBackground, Description } from "./style"
import Container from "../../common/Container"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

const ListLink = props => (
    <Socials>
        <div className="icons">
        <a href="https://github.com/bellaroseee">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
        <div className="icons">
        <a href="https://www.linkedin.com/in/brose714/">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        </div>
        <div className="icons">
        <a href="mailto:brose.workspace@gmail.com?subject=Mail from Site">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
        </div>
    </Socials>
)

export default function About() {
    return (
        <WrapperBackground>
            <Wrapper as={Container} id="about">
                <Wrapper>
                    {/* <ProfilePhoto src="https://images.unsplash.com/photo-1620175527578-3a01876fd6c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"/>
                     */}
                    <ProfilePhoto >
                        <StaticImage src="./profile.jpg" imgClassName="profile-image"/>
                    </ProfilePhoto>
                    <Description>
                        <h2>Bella Rose</h2>
                        <h3>Bachelor of Computer Science<br/>
                        University of Washington 2021</h3>
                        <p>Aspired data scientist, machine learning and natural language processing enthusiast</p>
                    </Description>
                    <ListLink />
                </Wrapper>
            </Wrapper>
        </WrapperBackground>
    )
}