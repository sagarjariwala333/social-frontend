export const storeToken = (token: string) => {
    localStorage.removeItem('access_token')
    localStorage.setItem('access_token', token)
}

export const removeToken = () => {
    localStorage.removeItem('access_token')
}

export const getToken = () => {
    return localStorage.getItem('access_token')
}