import React from 'react';
import axios from 'axios';
import '../../../styles/main.css';
import './IndividualEvent.css';
import RSVPButton from '../RSVPButton/RSVPButton';

const flyer = require('../../../assets/flyer.png');

class IndividualEvent extends React.Component {
    constructor(props) {
        super(props);

        this.fetchEvent = this.fetchEvent.bind(this);

        this.state = {
            eventId: null,
            event: null
        }
    }

    fetchEvent(eventId) {
        const searchURL = `http://127.0.0.1:8080/events/${eventId}`;
        axios
            .get(searchURL)
            .then((response) => {
                this.setState({
                    event: response.data
                });
            });
    }

    componentWillMount() {
        let eventId = this.props.match.params.eventId;

        this.setState({
            eventId: eventId,
            event: this.fetchEvent(eventId)
        })
    }

    render() {
        return (
            <div className="displayFlex flexColumn flexAlignCenter fontSize12px">
                <div className="text-center marginBottom10px">EVENTS</div>

                {this.state.event ?
                    <div className="displayFlex flexColumn flexAlignCenter">
                        <div className="displayFlex flexColumn flexAlignCenter marginBottom10px">
                            <div>{this.state.event.name}</div>
                            <div>MALIK Fraternity, Incorporated</div>
                        </div>

                        <img src={flyer} className="flyer marginBottom10px" alt="Event Flyer" />

                        <div className="width75P flexDisplay flexColumn">
                            <div>Date: {this.state.event.date}</div>
                            <div>Time: {this.state.event.startTime} -- {this.state.event.endTime}</div>
                            <div>Location: {this.state.event.location}</div>
                            <div>
                                Description: {this.state.event.blurb}
                            </div>
                        </div>

                        <div className="flexCenter marginTop25px">
                            <RSVPButton eventId={this.state.eventId} response="Going"></RSVPButton>
                            <RSVPButton eventId={this.state.eventId} response="Interested"></RSVPButton>
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default IndividualEvent;
