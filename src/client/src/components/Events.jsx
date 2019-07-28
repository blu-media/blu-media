import React from 'react';

import '../styles/main.css';
import '../styles/Events.css';

class Events extends React.Component {
    render() {
        return (
            <div className="fontFamilyNovecento colorLightGrey">
                <div className="textAlignCenter verticalMargin15px">Events</div>

                <div className="flexSpaceBetween fontSize14px
                    horizontalPadding15px">
                    <div>June 2019</div>
                    <div className="flexCenter">
                        <div className="horizontalMargin15px">Left</div>
                        <div className="horizontalMargin15px">Right</div>
                    </div>
                </div>

                <div className="borderTopGrey1px borderBottomGrey1px
                flexSpaceBetween horizontalPadding15px verticalPadding5px
                rowHeight">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                </div>

                <div className="flexSpaceBetween horizontalPadding15px rowHeight
                border flexAlignCenter">

                    {/* <div className="flexCenter flexAlignCenter">
                        <div className="flexCenter flexAlignCenter border">1</div>
                        <div className="flexCenter flexColumn border">
                            <div className="eventCircle verticalMargin3px"></div>
                            <div className="eventCircle verticalMargin3px"></div>
                            <div className="eventCircle verticalMargin3px"></div>
                        </div>
                    </div> */}

                    <div className="textAlignCenter">1</div>
                    <div className="textAlignCenter">2</div>
                    <div className="textAlignCenter">3</div>
                    <div className="textAlignCenter">4</div>
                    <div className="textAlignCenter">5</div>
                    <div className="textAlignCenter">6</div>
                    <div className="textAlignCenter">7</div>                    
                </div>

                <div className="flexSpaceBetween horizontalPadding15px rowHeight">
                    <div className="textAlignCenter">1</div>
                    <div className="textAlignCenter">2</div>
                    <div className="textAlignCenter">3</div>
                    <div className="textAlignCenter">4</div>
                    <div className="textAlignCenter">5</div>
                    <div className="textAlignCenter">6</div>
                    <div className="textAlignCenter">7</div>                    
                </div>

                <div className="flexSpaceBetween horizontalPadding15px rowHeight">
                    <div className="textAlignCenter">1</div>
                    <div className="textAlignCenter">2</div>
                    <div className="textAlignCenter">3</div>
                    <div className="textAlignCenter">4</div>
                    <div className="textAlignCenter">5</div>
                    <div className="textAlignCenter">6</div>
                    <div className="textAlignCenter">7</div>                    
                </div>

                <div className="flexSpaceBetween horizontalPadding15px rowHeight">
                    <div className="textAlignCenter">1</div>
                    <div className="textAlignCenter">2</div>
                    <div className="textAlignCenter">3</div>
                    <div className="textAlignCenter">4</div>
                    <div className="textAlignCenter">5</div>
                    <div className="textAlignCenter">6</div>
                    <div className="textAlignCenter">7</div>                    
                </div>

                <div className="flexSpaceBetween horizontalPadding15px rowHeight borderBottomGrey1px">
                    <div className="textAlignCenter">1</div>
                    <div className="textAlignCenter">2</div>
                    <div className="textAlignCenter">3</div>
                    <div className="textAlignCenter">4</div>
                    <div className="textAlignCenter">5</div>
                    <div className="textAlignCenter">6</div>
                    <div className="textAlignCenter">7</div>                    
                </div>

                <div className="timeline verticalPadding15px">
                    <div className="displayFlex fontSize12px
                    negativeTimelineMarginLeft verticalMargin15px">
                        <div className="displayFlex flexAlignCenter">
                            <div className="widthMaxContent colorDarkGrey">4:30 PM</div>
                            <div class="timelineCircle circle"></div>
                        </div>
                        
                        <div className="timelineMarginRight bgGrey1 colorDarkGrey
                        eventTimelineSize borderRadius10px flexCenter flexAlignCenter">
                            <div className="displayFlex flexColumn flexAlignCenter">
                                <div className="widthMaxContent">Open Mic Night</div>
                                <div className="widthMaxContent">Ujamaa Main Lounge</div>
                            </div>
                        </div>
                    </div>

                    <div className="displayFlex fontSize12px
                    negativeTimelineMarginLeft verticalMargin15px">
                        <div className="displayFlex flexAlignCenter">
                            <div className="widthMaxContent colorDarkGrey">4:30 PM</div>
                            <div class="timelineCircle circle"></div>
                        </div>
                        
                        <div className="timelineMarginRight bgGrey1 colorDarkGrey
                        eventTimelineSize borderRadius10px">
                            <div className="displayFlex flexColumn flexAlignCenter">
                                <div className="widthMaxContent">Open Mic Night</div>
                                <div className="widthMaxContent">Ujamaa Main Lounge</div>
                            </div>
                        </div>
                    </div>

                    <div className="displayFlex fontSize12px
                    negativeTimelineMarginLeft verticalMargin15px">
                        <div className="displayFlex flexAlignCenter">
                            <div className="widthMaxContent colorDarkGrey">4:30 PM</div>
                            <div class="timelineCircle circle"></div>
                        </div>
                        
                        <div className="timelineMarginRight bgGrey1 colorDarkGrey
                        eventTimelineSize borderRadius10px">
                            <div className="displayFlex flexColumn flexAlignCenter">
                                <div className="widthMaxContent">Open Mic Night</div>
                                <div className="widthMaxContent">Ujamaa Main Lounge</div>
                            </div>
                        </div>
                    </div>
                </div>

                
                
            </div>
        )
    };
};

export default Events;
