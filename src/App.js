import React, {Component} from 'react';
import { BrowserRouter as Router,
        Switch,
        Route,
        Redirect
} from "react-router-dom";
import './css/App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Container from 'react-bootstrap/Container'
import ProjectDisplay from "./components/ProjectDisplay";


class App extends Component {
    state = {
        projectList: JSON,
        projectName: ''
    };

    componentDidMount() {
        const markdownPath = require("./text/ProjectList.json");

        fetch(markdownPath)
            .then(text => {this.setState({projectList: markdownPath.projectList})})
            .catch(error => console.log(error));
    };


    handleRoute() {
        const { projectList } = this.state;
        let length = projectList.length;
        let items = [];
        items.push(
            <Route
                exact path="/"
                render={() => {
                    return (<Redirect to="/home" />)}}
            />
        );
        items.push(<Route path="/home" component={Home} />);
        items.push(<Route exact path="/projects" component={Projects} />);
        items.push(<Route path="/about" component={About} />);
        // items.push(<Route exact path="/projects/Search Engine" component={ProjectDisplay}/>);

        for(let i = 0; i < length; i++) {
            let projectName = projectList[i]["project-name"];
            items.push(
                <Route exact path={`/projects/${projectName}`}>
                        <ProjectDisplay projectName={projectName}
                                        projectURL={projectList[i]["project-url"]}
                                        projectContent={projectList[i]["project-content"]}
                        />
                </Route>
                );
        }
        return(
            <Switch>
            {items}
            </Switch>
        );
    }

    render() {
        return (
            <Router>
                <Container fluid className="App">
                    <Navbar/>
                    {this.handleRoute()}
                </Container>
            </Router>
        );
    }
}

export default App;
