import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css';

import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';

export default class Testimonials extends Component {
    render() {
        return (
            <div className="my-20 mx-5 bg-accent">
                <h1 className="ml-20 text-4xl">Our Clients <span className="text-secondary">Love Us!</span></h1>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div>
                        <img src={avatar1} alt="" />
                        <div className="myCarousel">
                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                                I like your garage function, it helps me find the needed spare of my car very fast.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={avatar2} alt="" />
                        <div className="myCarousel">
                            <h3>Daniel Keystone</h3>
                            <h4>Designer</h4>
                            <p>
                                Perfect fit. Easy install. Took about 30 minutes with one person. Cost was about half the price of local!
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={avatar3} alt="" />
                        <div className="myCarousel">
                            <h3>Theo Sorel</h3>
                            <h4>Designer</h4>
                            <p>
                                Forget about struggling to do everything at once: taking care of the family, cleaning the house, doing the shopping, etc.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}