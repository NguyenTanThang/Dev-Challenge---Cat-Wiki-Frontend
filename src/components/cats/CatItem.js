import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class CatItem extends Component {
    render() {
        const {image, name, id} = this.props.catItem;

        if (!this.props.catItem) {
            return <></>
        }

        return (
            <Link to={`breed-details/${id}`} className="cat-item">
                <div className="cat-item__image">
                    <img src={image ? image.url : ""} alt={name} className="img-fluid"/>
                </div>
                <h4>{name}</h4>
            </Link>
        )
    }
}
