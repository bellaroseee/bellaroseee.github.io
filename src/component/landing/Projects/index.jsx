import React from "react"
import { ProjectContainer, Info, Wrapper, ProjectTitle, ProjectImg, ProjectDescription, Languages, LanguageItem } from "./style"
import Container from "../../common/Container"
import Card from "../../common/Card"
import { graphql, useStaticQuery } from "gatsby"

const ProjectCard = props => (
    <Card key={props.id} as="a" href={props.url}>
        <ProjectTitle>
            {props.title}
        </ProjectTitle>
        <ProjectImg src={props.img} />
        <ProjectDescription>
            {props.desc}
        </ProjectDescription>
        <Languages>
            {props.languages.edges.map(({ node }) => (
                <LanguageItem key={node.id} color={node.color}>
                    {node.name}
                </LanguageItem>
            ))}
        </Languages>
    </Card>
)

export default function Projects() {
    const {
        github: {
            viewer: {
                starredRepositories: { edges },
            },
        },
    } = useStaticQuery(
        graphql`
        {
            github {
                viewer {
                  starredRepositories(
                    first: 10
                    orderBy: {field: STARRED_AT, direction: ASC}
                    ) {
                        edges {
                        node {
                            id
                            name
                            url
                            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                            edges {
                                node {
                                name
                                id
                                color
                                }
                                size
                            }
                            }
                            shortDescriptionHTML
                            openGraphImageUrl
                        }
                        }
                        totalCount
                    }
                }
            }
        }
        `
    );
    return (
        <Wrapper as={Container} id="projects">
            <Info>
                <h3>Completed Projects</h3>
            </Info>
            <ProjectContainer>
            {edges.map(({ node }) => (
                <ProjectCard
                    id={node.id}
                    url={node.url}
                    title={node.name}
                    desc={node.shortDescriptionHTML}
                    languages={node.languages}
                    img={node.openGraphImageUrl}
                />
            ))}
            </ProjectContainer>
            <Info>
                <h3>In-Progress Projects</h3>
            </Info>
            <ProjectContainer>
                <Card>
                    <ProjectTitle>
                        Question-Answer on English Reading Paper
                    </ProjectTitle>
                    <ProjectDescription>
                        a supervised machine learning program to answer english passage
                    </ProjectDescription>
                </Card>
                <Card>
                    <ProjectTitle>
                        What am I doing with my life?
                    </ProjectTitle>
                    <ProjectDescription>
                        a program to predict a "highlight" from a selected day, week or month, using data
                        from location history and calendar events.
                    </ProjectDescription>
                </Card>
            </ProjectContainer>
        </Wrapper>
    )
}