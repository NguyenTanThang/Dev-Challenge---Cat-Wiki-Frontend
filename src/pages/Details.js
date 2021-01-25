import React, { Component } from 'react';
import {getRandomImage, getBreedByID} from "../requests/catRequests";
import {convertKeyToTitle} from "../utils/utils";
import ProgressBar from "../components/partials/ProgressBar";

export default class Home extends Component {

    state = {
        imageList: "",
        catItem: ""
    }

    async componentDidMount() {
        let imageList = [];
        const breedID = this.props.match.params.breedID;

        const catItem = await getBreedByID(breedID);

        /*
        for (let i = 0; i < 8; i++) {
            const imageItem = await getRandomImage();
            imageList.push(imageItem);
        }
        */

        this.setState({
            imageList,
            catItem: catItem[0]
        }, () => {
            console.log(this.state);
        })
    }

    renderImages = () => {
        const {imageList} = this.state;

        if (!imageList) {
            return <></>
        }

        return imageList.map((imageItem, index) => {
            imageItem = imageItem[0]
            return <div key={index} className="related-image-item">
                <img src={imageItem.url} alt={`Related ${index}`} className="img-fluid" />
            </div>
        })
    }

    renderDetailsData = () => {
        const {catItem} = this.state;

        if (!catItem) {
            return <></>
        }

        const {breeds} = catItem;
        const {adaptability, affection_level, child_friendly, grooming, intelligence, health_issues, social_needs, stranger_friendly, id} = breeds[0];
        const attributeKey = Object.keys({adaptability, affection_level, child_friendly, grooming, intelligence, health_issues, social_needs, stranger_friendly});
        const attributeList = [
            adaptability, affection_level, child_friendly, grooming, intelligence, health_issues, social_needs, stranger_friendly
        ];

        return attributeList.map((attributeItem, index) => {
            const title = convertKeyToTitle(attributeKey[index]);

            return (
                <li className="progress-container" key={id}>
                    <b>{title}:</b>
                    <ProgressBar progressNum={attributeItem}/>
                </li>
            )
        })
    }

    render() {
        const {renderImages, renderDetailsData} = this;
        const {catItem} = this.state;

        if (!catItem) {
            return <></>
        }

        const {url, breeds} = catItem;
        const {name, temperament, description, origin, life_span, } = breeds[0];

        return (
            <div className="details">
                <div className="container">
                
                    <div className="details__cat">
                        <div className="details-cat__image">
                            <img src={url} alt={name} className="img-fluid"/>
                        </div>
                        <div className="details-cat__content">
                            <h4>{name}</h4>
                            <p>{description}</p>
                            <ul>
                                <li><b>Temperament:</b> {temperament}</li>
                                <li><b>Origin:</b> {origin}</li>
                                <li><b>Life Span:</b> {life_span}</li>
                            </ul>
                            <ul className="details__data">
                                {renderDetailsData()}
                            </ul>
                        </div>
                    </div>

                    {/*
                    <div className="related-images">
                        <h2>Other photos</h2>
                        <div className="row">
                            {renderImages()}
                        </div>
                    </div>
                    */}

                </div>
            </div>
        )
    }
}
