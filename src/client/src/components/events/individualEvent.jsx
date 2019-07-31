import React from 'react';
import axios from 'axios';
import moment from 'moment';
// import cubalLogo from '.../assets/cubal-logo.png';
import { Card, Button } from 'react-bootstrap';

import '../../styles/main.css';

class IndividualEvent extends React.Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <h3>
                        EVENTS
                    </h3>
                </div>
                <Card className="text-center">
                    <Card.Header>Event Name</Card.Header>
                    <Card.Body>
                        <Card.Title>Org Name</Card.Title>
                        {/* <Card.Img variant="null" src="img" /> */}
                        <br />
                        <Button>Going</Button>
                        <Button>Interested</Button>
                        <Card.Text>
                            <div>
                                Date: Wed, Sept 4, 2019 Time: 14:00 - 18:00
                                Location: Ujamaa Main Lounge
                            </div>
                            <br />
                            <div>
                                Event Discription:
                                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incidi dunt Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmo.
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Who's Going?</Card.Footer>
                </Card>
            </div>
        )
    }
}

export default IndividualEvent;
