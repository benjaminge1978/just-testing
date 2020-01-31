import React, {Fragment} from "react";
import gsap from "gsap";
import { TimelineMax, Power3, Back } from "gsap/all";
import SeventaEvents from "../banner/images/seventa-events";
import SeventaLogoEvents from "../../home-page/banner/images/seventaLogoEvents"

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
        
        .set(".sev-ev-anim", {autoAlpha:0})
        .set(".sev-ev-anim", {autoAlpha:1})

        .staggerFromTo(
            ".sev-ev-anim .st0",
               0.7, { opacity:0, transformOrigin:"0% 50% -50",rotationX:180,y: 600, ease:Power3.easeOut },
               { opacity: 1, y: 0 },
                0.04,
                "0.2"
        )

        .staggerTo(
            ".sev-ev-anim",
               1, 
               { opacity: 0, y: -100,ease:Power3.easeIn },
                0.02,
                "=0.1"
        )

        .to(
            ".mask-block",
            {
                duration: 1,
                scaleY: 0,
                transformOrigin: "top left",
                ease:Power3.easeOut
            },("-=0.5")
        )
        .to(
            ".seventa-events",
            {
                delay:0.1,
                duration: 0.3,
                opacity:0,
                y:-10,
                ease:Power3.easeOut
            },("-=0")
        )
        .from(
            ".mainBanner img",
            {
                duration: 1,
                scale: 1.5,
                transformOrigin: "center",
                ease:Power3.easeOut
            },("-=1")
        )
            .from("iframe",
            { 
                opacity:0,
                duration:1,
            },("-=0.3")
            )
            .fromTo(".under1",
            {   delay:4,
                y:70,
                opacity:1,
            }, 
            { 
                delay:1,
                opacity:1,
                y:-0,
                duration:1,
            }, ("+=2")
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
                    <div className="sev-ev-anim">
                    <SeventaLogoEvents />
                        </div>  
                        <div className="mask-block" ref={this.masBlockRef}/>
                    </Fragment>
        );
    }
}

gsap.registerPlugin(TimelineMax);