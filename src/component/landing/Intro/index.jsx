import React from "react"
import { Wrapper, Welcome, Description, InnerWrapper } from "./style"

export default function Intro() {
    return (
        <Wrapper>
            <InnerWrapper>
                <Welcome>
                    <h1>
                        Welcome
                    </h1>
                </Welcome>
                <Description>
                    <p>
                        I'm a graduating senior at UW Paul G. Allen School of Computer Science and Engineering.
                        My interests are working with Big Data, Machine Learning Models, and Natural Language Processing
                    </p>
                    <p>
                        I am sharing some of my most memorable projects and the projects that I'm working on here. 
                    </p>
                    <p>
                        In my free time, I like to take a walk in the parks and watching cat videos. 
                        I like painting and making art journal ocassionally. 
                    </p>
                </Description>
            </InnerWrapper>
        </Wrapper>
    )
}