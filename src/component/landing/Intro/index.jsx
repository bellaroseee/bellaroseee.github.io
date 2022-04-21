import React from "react"
import { Wrapper, Welcome, InnerWrapper } from "./style"
import SubIntro from '../SubIntro/index'

export default function Intro() {
    return (
        <Wrapper>
            <InnerWrapper>
                <Welcome>
                    <p>Hi, I am</p>
                    <h1>
                        Bella Rose
                    </h1>
                    <h2>
                        Aspiring data scientist, machine learning and natural language processing enthusiast
                    </h2>
                </Welcome>
            </InnerWrapper>
            <SubIntro />
        </Wrapper>
    )
}