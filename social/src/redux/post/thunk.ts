import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://localhost:3000/'

export const uploadPost = createAsyncThunk('post/uploadPost', async (props: { text: string, parent?: string }) => {
    const { text, parent = '' } = props
    const data = await axios.post(`${API_URL}post`, { text, parent: parent ? null : parent })
    return data.data 
})

export const getPosts = createAsyncThunk('post/getAllPosts', async () => {
    const data = await axios.get(`${API_URL}post`)
    return data.data.data
})