import axios from "axios";
export const LocalUrl = axios.create({
    baseURL:"http://45.138.159.183:6061",
    timeout:6000
})
