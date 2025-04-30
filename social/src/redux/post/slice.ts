import { IPost } from "@/models/post.model";
import { createSlice } from "@reduxjs/toolkit";
import { getPosts, uploadPost } from "./thunk";

export interface PostState {
    loading: boolean,
    data: IPost[],
    error: object | null
}

const initialState: PostState = {
    loading: false,
    data: [],
    error: null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(uploadPost.pending, (state) => {
            state.loading = true
        })
        .addCase(uploadPost.fulfilled, (state, action) => {
            state.loading = false
            state.data = [...state.data, action.payload]
        })
        .addCase(uploadPost.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
        .addCase(getPosts.pending, (state) => {
            state.loading = true
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(getPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
    },
})

export default postSlice.reducer