import {API_URL} from "../config/config";
import axios from 'axios';

export const getBreedByID = async (breedID) => {
    try {
        const res = await axios.get(`${API_URL}/cats/breedID/${breedID}`);
        const data = res.data.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getRandomImage = async () => {
    try {
        const res = await axios.get(`${API_URL}/cats/random-image`);
        const data = res.data.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getAllCats = async () => {
    try {
        const res = await axios.get(`${API_URL}/cats`);
        const data = res.data.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const searchCatsByName = async (name) => {
    try {
        const res = await axios.get(`${API_URL}/cats/search/${name}`);
        const data = res.data.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}