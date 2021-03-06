import React, { Component } from 'react';
import {searchCatsByName} from "../../requests/catRequests";
import InputWithIcon from "./InputWithIcon";
import {Link} from "react-router-dom";

export default class BreedSearch extends Component {

    state = {
        breeds: "",
        name: "",
        active: false
    }

    onClose = (e) => {
        this.setState({
            active: false
        })
    }
    
    onOpen = (e) => {
        this.setState({
            active: true
        })
    }

    onChange = (e) => {

        if (!e.target.value) {
            this.setState({
                active: false
            })
        }

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSearch = async (e) => {
        try {
            e.preventDefault();
            const {name} = this.state;
            const breeds = await searchCatsByName(name);

            this.setState({
                breeds,
                active: true
            })
        } catch (error) {
            console.log(error);
        }
    }

    renderResults = () => {
        const {breeds} = this.state;

        if (!breeds) {
            return <></>
        }

        return breeds.map(breed => {
            return <li key={breed.id}>
                <Link to={`breed-details/${breed.id}`}>{breed.name}</Link>
            </li>
        })
    }

    render() {
        const {renderResults, onSearch, onChange, onClose, onOpen} = this;
        const {active, name} = this.state;

        const activeClass = active ? "active" : "";

        return (
            <>
                <div className="search-engine-button" onClick={onOpen}>
                    <span className="material-icons">
                        search
                    </span>
                    <p>Search</p>
                </div>
                <div className={`search-engine-mobile ${activeClass}`}>
                    <div className="search-engine-close" onClick={onClose}>
                        <span className="material-icons">
                            close
                        </span>
                    </div>
                    <form className="search-engine__form" onSubmit={onSearch}>
                        <InputWithIcon id="name" name="name" placeholder="Enter your breed" onChange={onChange} value={name} icon="search"/>
                    </form>
                    <div className={`search-engine__result ${activeClass}`}>
                        <ul>
                            {renderResults()}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
