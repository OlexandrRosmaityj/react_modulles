import {axiosService} from "../axios.service/axios.service";
import {urlsPosts as urlsposts} from "../../config/urls";



export const postService = {
    getAll: () => axiosService.get(urlsposts.posts).then(value => value.data),
    getById: (id) => axiosService.get(`${urlsposts.posts}/${id}`).then(value => value.data)
}