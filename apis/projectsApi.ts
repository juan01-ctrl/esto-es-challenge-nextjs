import axios from 'axios';

const projectsApi = axios.create({
    baseURL:'/api'
})

export default projectsApi