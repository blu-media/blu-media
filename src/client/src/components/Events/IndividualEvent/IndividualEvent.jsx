import React from 'react';

import '../../../styles/main.css';
import './IndividualEvent.css';
import RSVPButton from '../RSVPButton/RSVPButton';

const flyer = require('../../../assets/flyer.png');

class IndividualEvent extends React.Component {
    render() {
        let eventId = this.props.match.params.eventId;

        return (
            <div className="displayFlex flexColumn flexAlignCenter fontSize12px">
                <div className="text-center marginBottom10px">EVENTS</div>

                <div className="displayFlex flexColumn flexAlignCenter marginBottom10px">
                    <div>Open Mic Night</div>
                    <div>MALIK Fraternity, Incorporated</div>
                </div>


                <img src={flyer} className="flyer marginBottom10px" alt="Event Flyer" />

                <div className="flexDisplay flexColumn width75P">
                    <div>Date: Wednesday, July 19, 2019</div>
                    <div>Time: 4:00 PM -- 7:00 PM</div>
                    <div>Location: Ujamaa Main Lounge</div>
                    <div>
                        Description: Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ab ipsum fuga magni alias rerum iusto
                        vel quaerat iste totam, sequi eaque accusantium quod
                        accusamus aut reiciendis facere labore quia nihil.
                    </div>
                </div>

                <div className="flexCenter marginTop25px">
                    <RSVPButton eventId={eventId} response="Going"></RSVPButton>
                    <RSVPButton eventId={eventId} response="Interested"></RSVPButton>
                </div>
            </div>
        )
    }
}

export default IndividualEvent;
