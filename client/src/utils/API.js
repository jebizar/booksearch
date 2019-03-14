import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

    searchBooks: q => axios.get(URL + q),

    savedBooks: () => axios.get("/api/saved"),

    delete: title => axios.delete("/api/books/" + title),

    saves: title => {
        console.log(title);
        return axios.post("/api/books" + title)}
}