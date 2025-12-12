import TokenUtil from "@/utils/TokenUtil";
import axios from "axios";

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
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
    (error) => {
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

export default apiClient;