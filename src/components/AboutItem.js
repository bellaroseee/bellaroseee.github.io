import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ReactMarkdown from "react-markdown";

class AboutItem extends Component {
    render() {
        const {sectionTitle, content, eventKey} = this.props;
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                    {sectionTitle}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body>
                        <ReactMarkdown source={content}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default AboutItem;