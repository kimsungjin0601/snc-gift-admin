import dayjs from 'dayjs'

function formatDate(dateStr) {
    if(!dateStr) return null;
    return dayjs(dateStr).format('YYYY.MM.DD');
}

function formatDateTime(dateStr) {
    if(!dateStr) return null;
    return dayjs(dateStr).format('YYYY.MM.DD HH:mm:ss');
} 

function getYearFirstDate() {
    const now = new Date();
    const currentYear = now.getFullYear();
    return currentYear + '-01-01';
}

function getCurrentDate() {
    const now = new Date();
    return dayjs(now).format('YYYY-MM-DD');
}

export default {
    formatDate,
    formatDateTime,
    getYearFirstDate,
    getCurrentDate
};