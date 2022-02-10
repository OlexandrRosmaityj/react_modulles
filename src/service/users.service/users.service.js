import {axiosService} from "../axios.service/axios.service";
import urls, {urlsUsers} from "../../config/urls";


export const userService = {
    getAll: () => axiosService.get(urlsUsers.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urlsUsers.users}/${id}`).then(value => value.data)
}
