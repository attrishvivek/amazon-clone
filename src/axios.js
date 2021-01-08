import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://console.firebase.google.com/project/challenge-bb6ef/overview'
    //  http://localhost:5001/challenge-bb6ef/us-central1/api
});

export default instance;


