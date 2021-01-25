import React, { Component } from 'react';
import BreedSearch from "../components/partials/BreedSearch";
import MobileBreedSearch from "../components/partials/MobileBreedSearch";
import CatItem from "../components/cats/CatItem";
import logo from "../img/CatwikiLogo.svg";
import cat1 from "../img/image 1.png";
import cat2 from "../img/image 2.png";
import cat3 from "../img/image 3.png";
import { Link } from 'react-router-dom';
import {getAllCats} from "../requests/catRequests";
import {getRandom} from "../utils/utils";

export default class Home extends Component {

    state = {
        topBreeds: ""
    }

    async componentDidMount() {
        let topBreeds = await getAllCats();
        topBreeds = getRandom(topBreeds, 4);

        this.setState({
            topBreeds
        })
    }

    renderTopBreeds = () => {
        const {topBreeds} = this.state;

        if (!topBreeds) {
            return <></>
        }

        return topBreeds.map(topBreed => {
            return <CatItem key={topBreed.id} catItem={topBreed}/>  
        })
    }

    render() {
        const {renderTopBreeds} = this;

        return (
            <div className="home">
                <div className="container">
                <div className="home__header">

                    <div className="home-header__search">
                        <div className="home-header-search__content">
                            <img src={logo} alt="logo" className="img-fluid"/>
                            <p>Get to know more about your cat breed</p>
                            <div className="desktop-search">
                                <BreedSearch/>
                            </div>
                            <div className="mobile-search">
                                <MobileBreedSearch/>
                            </div>
                        </div>
                    </div>

                    <div className="home-header__discover">

                        <div className="home-header-discover__header">
                            <div className="home-header-discover-header__title">
                                <p>Most Searched Breeds</p>
                                <div className="line"></div>
                                <h3>66+ Breeds For you to discover</h3>
                            </div>
                            <div className="home-header-discover-header__more">
                                <Link to="/top" className="link-btn-icon">
                                <p>SEE MORE</p>
                                <span className="material-icons">
                                    trending_flat
                                </span></Link>
                            </div>
                        </div>

                        <div className="home-header-discover__main">
                            <div className="row">
                                {renderTopBreeds()}
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="home__about">

                    <div className="home-about__content">
                        <div className="line"></div>
                        <h3>Why should you have a cat?</h3>
                        <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                        <Link to="/" className="link-btn-icon">
                        <p>READ MORE</p>
                        <span className="material-icons">
                                    trending_flat
                                </span></Link>
                    </div>

                    <div className="home-about__image">
                        <div className="home-about-image__item--1">
                            <img src={cat1} alt="Cat 1" className="img-fluid"/>
                        </div>
                        <div className="home-about-image__item--2">
                            <img src={cat2} alt="Cat 2"  className="img-fluid"/>
                        </div>
                        <div className="home-about-image__item--3">
                            <img src={cat3} alt="Cat 3"  className="img-fluid"/>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        )
    }
}
