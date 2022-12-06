import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZWFydmluMTEiLCJhIjoiY2xiNHp3ZzBiMDFwczN5cGozOWZwY3VlYyJ9.wtgmNkvlGEXzVHGdu-ce4w'
    }
});

export default searchApi;