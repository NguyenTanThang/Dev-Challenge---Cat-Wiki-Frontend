import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class CatItem extends Component {
    render() {
        const {image, name, id, description} = this.props.catItem;
        const {index} = this.props;

        if (!this.props.catItem) {
            return <></>
        }

        return (
            <Link to={`breed-details/${id}`} className="cat-item--block">
                <div className="cat-item__image">
                    <img src={image ? image.url : ""} alt={name} className="img-fluid"/>
                </div>
                <div className="cat-item__desc">
                    <h4>{index}. {name}</h4>
                    <p>{description}</p>
                </div>
            </Link>
        )
    }
}
