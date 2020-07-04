export const setAuthHeader = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
}
