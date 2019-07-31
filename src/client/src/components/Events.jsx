import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import '../styles/main.css';
import '../styles/Events.css';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          events: [],
          timelineHeight: 0
        };

        this.currentMonth = React.createRef();
        this.currentYear = React.createRef();
        this.timeline = React.createRef();

        this.displayEventsOnDay = this.displayEventsOnDay.bind(this);
      }
    
    displayEventsOnDay(event) {
        let month = this.currentMonth.current.innerText;
        let year = this.currentYear.current.innerText;
        let day = event.target.innerText;

        let date = new Date(`${month} ${day}, ${year}`);

        let startTimeUTC = date.toISOString();

        let endTime = moment(startTimeUTC).add(1, 'day').subtract(1, 'second');
        let endTimeUTC = endTime.utc().format();

        console.log(startTimeUTC);
        console.log(endTimeUTC);

        const searchQuery = `http://127.0.0.1:8080/events/search?` + 
            `startTime=${startTimeUTC}&endTime=${endTimeUTC}`

        axios
            .get(searchQuery)
            .then((res) => {
                console.log("RESULTS");
                console.log(res);
                this.setState({ events: res.data});
                this.updateTimelineHeight();
            });
    }

    updateTimelineHeight() {
        console.log(window.outerHeight);
        let lastCalendarRow = document.getElementById('lastCalendarRow');
        let timelineHeight = window.outerHeight -
            (lastCalendarRow.offsetTop + lastCalendarRow.offsetHeight)
        
        if (this.state.events.length > 0 && timelineHeight !== this.state.timelineHeight) {
            this.setState({ timelineHeight: timelineHeight });

        }
    }

    render() {
        var eventsList = this.state.events.map((event) => {
            return (
                <Link to="/events" params={{eventId: event.id}} key={event.id} className="displayFlex fontSize12px
                    negativeTimelineMarginLeft verticalMargin15px">
                    <div className="displayFlex flexAlignCenter">
                        <div className="widthMaxContent colorDarkGrey">4:30 PM</div>
                        <div className="timelineCircle circle"></div>
                    </div>
                    
                    <div className="timelineMarginRight bgGrey1 colorDarkGrey
                    eventTimelineSize borderRadius10px flexCenter flexAlignCenter
                    horizontalPadding15px">
                        <div className="displayFlex flexColumn flexAlignCenter">
                            <div className="widthMaxContent">{event.name}</div>
                            <div className="widthMaxContent">{event.location}</div>
                            <div className="widthMaxContent">4:30 PM - 7:30 PM</div>
                        </div>
                    </div>
                </Link>
            )
        });

        var events;

        if (this.state.events.length > 0) {
            events = eventsList;
        } else {
            events = <div className="widthMaxContent fontSize12px marginAuto
                marginTop25px">There are no events posted for today.</div>
        }

        return (
            <div className="fontFamilyNovecento colorLightGrey">
                <div className="textAlignCenter verticalMargin15px"
                onClick={this.handleClick}>Events</div>

                <div className="flexSpaceBetween fontSize14px
                    horizontalPadding15px">
                    <div className="flexCenter">
                        <div ref={this.currentMonth} className="horizontalMargin2px">June</div>
                        <div ref={this.currentYear} className="horizontalMargin2px">2019</div>
                    </div>

                    <div className="flexCenter">
                        <div className="horizontalMargin15px">Left</div>
                        <div className="horizontalMargin15px">Right</div>
                    </div>
                </div>

                <Container>
                    <Row className="borderTopGrey1px borderBottomGrey1px
                    horizontalPadding15px verticalPadding5px rowHeight
                    displayFlex flexAlignCenter">
                        <Col className="textAlignCenter">S</Col>
                        <Col className="textAlignCenter">M</Col>
                        <Col className="textAlignCenter">T</Col>
                        <Col className="textAlignCenter">W</Col>
                        <Col className="textAlignCenter">T</Col>
                        <Col className="textAlignCenter">F</Col>
                        <Col className="textAlignCenter">S</Col>
                    </Row>

                    <Row className="horizontalPadding15px rowHeight rowBody
                    displayFlex flexAlignCenter">
                        <Col className="textAlignCenter" onClick={this.displayEventsOnDay}>1</Col>
                        <Col className="textAlignCenter" onClick={this.displayEventsOnDay}>2</Col>
                        <Col className="textAlignCenter">3</Col>
                        <Col className="textAlignCenter">4</Col>
                        <Col className="textAlignCenter">5</Col>
                        <Col className="textAlignCenter">6</Col>
                        <Col className="textAlignCenter">7</Col>                    
                    </Row>

                    <Row className="horizontalPadding15px rowHeight rowBody
                    displayFlex flexAlignCenter">
                        <Col className="textAlignCenter">1</Col>
                        <Col className="textAlignCenter">2</Col>
                        <Col className="textAlignCenter">3</Col>
                        <Col className="textAlignCenter">4</Col>
                        <Col className="textAlignCenter">5</Col>
                        <Col className="textAlignCenter">6</Col>
                        <Col className="textAlignCenter">7</Col>                    
                    </Row>

                    <Row className="horizontalPadding15px rowHeight rowBody
                    displayFlex flexAlignCenter">
                        <Col className="textAlignCenter">1</Col>
                        <Col className="textAlignCenter">2</Col>
                        <Col className="textAlignCenter">3</Col>
                        <Col className="textAlignCenter">4</Col>
                        <Col className="textAlignCenter">5</Col>
                        <Col className="textAlignCenter">6</Col>
                        <Col className="textAlignCenter">7</Col>                    
                    </Row>

                    <Row className="horizontalPadding15px rowHeight rowBody
                    displayFlex flexAlignCenter">
                        <Col className="textAlignCenter">1</Col>
                        <Col className="textAlignCenter">2</Col>
                        <Col className="textAlignCenter">3</Col>
                        <Col className="textAlignCenter">4</Col>
                        <Col className="textAlignCenter">5</Col>
                        <Col className="textAlignCenter">6</Col>
                        <Col className="textAlignCenter">7</Col>                    
                    </Row>

                    <Row id="lastCalendarRow" className="horizontalPadding15px rowHeight rowBody
                    displayFlex flexAlignCenter">
                        <Col className="textAlignCenter">1</Col>
                        <Col className="textAlignCenter">2</Col>
                        <Col className="textAlignCenter">3</Col>
                        <Col className="textAlignCenter">4</Col>
                        <Col className="textAlignCenter">5</Col>
                        <Col className="textAlignCenter">6</Col>
                        <Col className="textAlignCenter">7</Col>                    
                    </Row>
                </Container>

                <div ref={this.timeline} className={`${this.state.events.length > 0 ? "timeline":""}
                verticalPadding15px`} style={{height: this.state.timelineHeight}}>
                    {events}
                </div>
            </div>
        )
    };
};

export default Events;
