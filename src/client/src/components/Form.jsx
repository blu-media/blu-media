import React from 'react';
import axios from 'axios';

import '../styles/main.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blurb: '',
      date: '',
      endTime: '',
      location: '',
      name: '',
      startTime: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();

    axios
      .post('http://127.0.0.1:8080/events/createEvent', this.state)
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Event Name" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleChange} />
        <input type="text" name="blurb" placeholder="Blurb" value={this.state.blurb} onChange={this.handleChange} />
        <input type="date" name="date" placeholder="Date" value={this.state.date} onChange={this.handleChange} />
        <input type="time" name="startTime" placeholder="Start Time" value={this.state.startTime} onChange={this.handleChange} />
        <input type="time" name="endTime" placeholder="End Time" value={this.state.endTime} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
