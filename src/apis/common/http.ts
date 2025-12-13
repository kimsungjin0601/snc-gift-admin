import TokenUtil from "@/utils/TokenUtil";
import axios from "axios";
import tokenService from "../service/token.service";

let isRefreshing = false;
let failedQueue = [];
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    timeout: 30000, 
    headers: { // 요청 헤더
        'Content-Type': 'application/json',  
        'Accept-Language': navigator.language || 'ko-KR',
        'X-Time-Zone': timeZone,
        'X-Tenant': 'T917394998',   // T917394998 고정
        'X-Site': 'SNC_GIFT_SHOP',  // SNC_GIFT_SHOP 고정
        'X-Device-Type': 'WEB',     // WEB, PC-WEB, MOBILE-WEB, TABLET, IOS, ANDROID
        'X-Channel': 'ADMIN',       // ADMIN, SHOP, PURCHASING
    }
});

apiClient.interceptors.request.use(
    (config) => {
        if(TokenUtil.getAccessToken()){
            config.headers.Authorization = `Bearer ${TokenUtil.getAccessToken()}`
        }
        return config;
    },  
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (!error.config) {
            console.warn("No original request in error:", error);
            return Promise.reject(error);   // refresh 로직 비집행
        }

        const originalRequest = error.config;

        if (!error.response) {
            return Promise.reject(error);
        }

        console.error('Response error:', error);
        console.error('Original request:', originalRequest._retry);

        if(error.response.status === 401 && error.response.data.code === 801 && !originalRequest._retry) {
            // if (isRefreshing) {
            //     return new Promise((resolve, reject) => {
            //         failedQueue.push({ resolve, reject });
            //     })
            //     .then(() => {
            //         originalRequest.headers = {
            //             ...originalRequest.headers,
            //             // Authorization: `Bearer ${token}`
            //         };
            //         return apiClient(originalRequest);
            //     })
            //     .catch((err) => Promise.reject(err));
            // }

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(() => {
                    return apiClient(originalRequest);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const response = await tokenService.issueToken({})
                const newToken = response.data.accessToken;
                TokenUtil.setAccessToken(newToken);
                processQueue(null, newToken);
                return apiClient(originalRequest); 
                
                // originalRequest.headers = {
                //     ...originalRequest.headers,
                //     Authorization: `Bearer ${newToken}`
                // };
                // return axios({ ...originalRequest }); // 인터셉터 우회
            } catch (err) {
                console.error('Token refresh error:', err);
                processQueue(err, null);
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;