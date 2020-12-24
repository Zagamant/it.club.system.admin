import { userService} from "../../services/user.service"

export default {

    login: ({username, password}) => {

    return userService.login(username, password)
            .then(response => {
                debugger;
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.data;
            });
    },
    checkError: (error) => {
        console.error(error)
    },
    checkAuth: () => {
        return localStorage.getItem('user') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    getIdentity: (error) => {
    },
    getPermissions: () => {
        return Promise.resolve();
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};