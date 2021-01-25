import React, { Component } from 'react';
import CatItemBlock from "../components/cats/CatItemBlock";
import {getAllCats} from "../requests/catRequests";
import {getRandom} from "../utils/utils";

export default class Home extends Component {

    state = {
        topBreeds: ""
    }

    async componentDidMount() {
        let topBreeds = await getAllCats();
        topBreeds = getRandom(topBreeds, 10);

        this.setState({
            topBreeds
        })
    }

    renderTopBreeds = () => {
        const {topBreeds} = this.state;

        if (!topBreeds) {
            return <></>
        }

        return topBreeds.map((topBreed, index) => {
            return <CatItemBlock index={index + 1} key={topBreed.id} catItem={topBreed}/>  
        })
    }

    render() {
        const {renderTopBreeds} = this;

        return (
            <div className="top">
                <div className="container">
                    <h2>Top 10 most searched breeds</h2>
                    {renderTopBreeds()}
                </div>
            </div>
        )
    }
}
