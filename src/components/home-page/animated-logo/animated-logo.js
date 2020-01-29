import React, {Fragment} from "react";
import gsap from "gsap";
import { TimelineMax, Power3 } from "gsap/all";
import SeventaEvents from "../banner/images/seventa-events";

import "./animated-logo.scss";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showed: false,
        };

        this._animatedLogoItems = [];
        this.masBlockRef = React.createRef();
        this._timelineMax = new TimelineMax({
            paused: true,
            onComplete: () => this.setState({showed: true}),
        });
    }

    componentDidMount() {
        this._timelineMax
        .to(
            ".sev-overlay-inner",
            {
                delay:0.5,
                duration: 2,
                scaleY: 0,
                transformOrigin: "top left",
                ease:Power3.easeOut
            }
        )
        .to(
            ".mask-block",
            {
                duration: 1,
                scaleY: 0,
                transformOrigin: "top left",
                ease:Power3.easeOut
            },("-=0.7")
        )
        .to(
            ".seventa-events",
            {
                delay:0.1,
                duration: 0.3,
                opacity:0,
                y:-10,
                ease:Power3.easeOut
            },("-=0.9")
        )
        .from(
            ".mainBanner img",
            {
                duration: 1,
                scale: 1.1,
                transformOrigin: "center",
                ease:Power3.easeOut
            },("-=0.7")
        )
            .from("iframe",
            { 
                opacity:0,
                duration:1,
            },("-=0.7")
            )
            .fromTo(".under1",
            { 
                y:70,
                opacity:1,
                duration:1,
            },
            { 
                delay:1,
                opacity:1,
                y:-0,
                duration:1,
            }, ("-=2")
            )
            .to(
                ".under1",
                {
                    delay:2,
                    y:-70,
                opacity:1,
                duration:1,
                },
            )
            .fromTo(".under2",
            { 
                y:70,
                opacity:1,
                duration:1,
            },
            { 
                delay:1,
                opacity:1,
                y:-0,
                duration:1,
            },("-=2")
            )
            .to(
                ".under2",
                {
                    delay:1,
                    y:-70,
                opacity:1,
                duration:1,
                },
            )
            .fromTo(".under3",
            { 
                y:70,
                opacity:1,
                duration:1,
            },
            { 
                delay:1,
                opacity:1,
                y:-0,
                duration:1,
            },("-=2")
            )
            .to(
                ".under3",
                {
                    delay:1,
                    y:-70,
                opacity:1,
                duration:1,
                },
            )
            .fromTo(".under4",
            { 
                y:70,
                opacity:0,
                duration:1,
            },
            { 
                delay:1,
                opacity:1,
                y:-0,
                duration:1,
            },("-=2")
            )
            .to(
                ".under4",
                {
                    delay:1,
                    y:-70,
                opacity:1,
                duration:1,
                },
            )
            .fromTo(".under5",
            { 
                y:70,
                opacity:0,
                duration:1,
            },
            { 
                delay:1,
                opacity:1,
                y:-0,
                duration:1,
            },("-=2")
            )
            .to(
                ".under5",
                {
                    delay:1,
                    y:-70,
                opacity:1,
                duration:1,
                },
            )
            .play();
    }

    render() {
        return (
            this.state.showed
                ? null
                :   <Fragment>
                    <div className="sev-overlay">
                    <SeventaEvents className="seventa-loader" /> 
                    <div className="sev-overlay-inner"></div>
                    </div>  
                        <div className="mask-block" ref={this.masBlockRef}/>
                    </Fragment>
        );
    }
}

gsap.registerPlugin(TimelineMax);