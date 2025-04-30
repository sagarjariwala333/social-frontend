import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API_URL = 'http://localhost:3000/'

export const login = createAsyncThunk('auth/login', async (credentials: { email: string, password: string }) => {
    const { email, password } = credentials
    const data = await axios.post(`${API_URL}login`, { email, password })
    return data.data
})

