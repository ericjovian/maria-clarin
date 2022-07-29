import "./cards.css";
import React, { Component } from "react";
import { Col, Row, Container} from "react-bootstrap";

export default class Card extends Component {
  render() {
    return (
      <Container className="card not-selectable">
        <Col className="cards">
          <Row>
            <img src={this.props.img} alt="" />
          </Row>
          <Row className="card-body">
            <h2>{this.props.title}</h2>
            <h3>12 June 2003</h3>
            <p>
              Karin is a famous Tiktok and Instagram user known for her make-up, dance, and cosplay videos.<br/><br/>
              Karin also stream on Twitch, she plays online video games such as Valorant and Genshin Impact.<br/>
              <br/>
              She is also known as the sister of a famous Youtuber Leonardo Edwin.
            </p>
            <a href="https://linktr.ee/mariadelouvree">
              <button type="button" className="btn">
                <p>check out karin's socials &#8599;</p>
              </button>
            </a>
          </Row>
        </Col>
      </Container>
    );
  }
}
