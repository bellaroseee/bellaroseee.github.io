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