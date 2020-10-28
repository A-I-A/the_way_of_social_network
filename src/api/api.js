const { default: Axios } = require("axios");

const instance = Axios.create({
    withCredentials : true,
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    headers : {"API-KEY" : "a51fc006-61f5-4543-90f2-af5246ad29db"},

});

export const userAPI  = {
    getUsers (currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=> {return response.data})
    },
    follow (userID){
        return instance.post(`follow/${userID}`)

    },
    unfollow(userID){
        return instance.delete(`follow/${userID}`)
    },
    getUserProfile(userID){
        console.warn("Obsolete method, use profileAPI");
        return profileAPI.getUserProfile(userID);
    },
}

export const profileAPI  = {
    getUserProfile(userID){
        return instance.get(`profile/${userID}`);
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`);
    },
    updateStatus(status){
        return instance.put(`profile/status/`,{status : status});
    },
    savePhoto(photo){
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo/`, formData, { 
            headers: {'Content-Type': 'multipart/form-data'}});
    },
    saveProfile (profile){
        return instance.put(`profile`, profile);
    },
}


export const authAPI = {
    authMe () {
        return instance.get('auth/me');
    },
    login (email, password, rememberMe=false){
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout(){
        return instance.delete('auth/login');
    }
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get('/security/get-captcha-url');
    },

}


        