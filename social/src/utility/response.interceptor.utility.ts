import axiosInstance from "./token.interceptor.utility";

axiosInstance.interceptors.response.use(
    (response) => {
        const status = response.status

        console.log('response status', status)

        if (status > 400) {
            const message = response.data?.message || 'Something went wrong'
            alert(message)
        }

        return response
    }, (error) => {
        const status = error.response?.status;
        const message = error.response?.data?.message || 'Something went wrong';

        console.log(status, message)

        if (status) {
        console.error(`HTTP ${status}: ${message}`);
        alert(message); // Replace with toast if using a UI lib like react-toastify
        } else {
        alert('Network error or no response from server');
        }

        // Re-throw the error so you can handle it elsewhere if needed
        return Promise.reject(error);
    }
)