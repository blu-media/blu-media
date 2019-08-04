import React from 'react';
import '../../../styles/main.css';
import '../IndividualEvent/IndividualEvent.css';
import AuthService from '../../../services/AuthService';

class RSVPButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleRSVP = this.handleRSVP.bind(this);
    this.Auth = new AuthService();
  }

  handleRSVP () {
    let userId = this.Auth.getProfile().id;

    let eventId = this.props.eventId;
    let apiURL = `http://localhost:8080/events/${eventId}/rsvps`;

    console.log(apiURL);
    console.log(userId);
    const options = {
      method: 'PUT',
      body: JSON.stringify({
        userId: userId,
        response: this.props.response
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    }
    fetch(apiURL, options);
  }

    render() {
        return (
          <div>
              <div className="horizontalMargin10px borderRadius5px
              rsvpButtonGreen colorRSVPGreen"
              onClick={this.handleRSVP}>
                {this.props.response}
              </div>
          </div>
        )
    }
}

export default RSVPButton;
