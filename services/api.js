import axios from 'axios';

const API_URL = 'https://polisen.se/api';

const getEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}/events`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export { getEvents };
