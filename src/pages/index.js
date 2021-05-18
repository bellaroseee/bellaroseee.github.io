import * as React from "react"
import styled from 'styled-components'
import Layout from '../component/Layout/index'
import Project from '../component/landing/Projects/index'
import About from '../component/landing/About/index'
import Intro from '../component/landing/Intro/index'
import SEO from '../component/SEO/index'

export const WrapperBackground = styled.div`
    width: 100vw;
    padding: 0 0 0 0;
    opacity: 1;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: bluxr(16px);
    display: flex;
    flex-direction: column;
`;

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Intro />
      <WrapperBackground>
        <Project />
        <About />
      </WrapperBackground>
    </Layout>
  )
}