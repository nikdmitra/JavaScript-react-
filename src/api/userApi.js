import axios from "axios";
import { connect } from "react-redux";

const istance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'e966b507-9e3e-4df1-bbd4-fa23e586dd8b'

    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return istance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return istance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return istance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsalate method')
        return profileApi.getProfile(userId)
    }
};

export const profileApi = {

    getProfile(userId) {
        return istance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return istance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return istance.put(`profile/status/`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return istance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    ,
    saveProfile(profile) {
        return istance.put(`profile`, profile)
    },
};

export const authApi = {
    me() {
        return istance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return istance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return istance.delete(`auth/login`)
    }
}