import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './jumbotron.css';

const Jumbo = props => (
    <Jumbotron className="jumbot">
        <Container className="contain">
            <Row>
                <Col>
                    <h4 id="currentScore">Current Score: {props.score}</h4>
                </Col>
                <Col>
                    <h1>Spaceballs!</h1>
                    <h2>Memory Game</h2>
                    <p></p>
                </Col>
                <Col>
                    <h4 id="highScore">High Score: {props.highScore}</h4>
                </Col>
            </Row>
            <Row className="row"><h4 id="message">{props.message}</h4></Row>
        </Container>
    </Jumbotron>
);
    
export default Jumbo;