import {postApi} from "../../../api/crud";


class AuthContainer {
    login(data) {
        return postApi('auth/login', data)
    }
    checkManagerEmail(data) {
        return postApi('auth/forget', data)
    }
    resetPassword( data) {
        return postApi('auth/forget/resetPassword', data)
    }
    sendCode(data) {
        return postApi('auth/forget/sendcode', data)
    }
}
export default new AuthContainer()