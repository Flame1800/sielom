    import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
    import {API} from "../../libs/API";

    export const fetchCreatePost = createAsyncThunk(
        "posts/fetchCreatePost",
        async (data) => {
            const response = await API.createPost(data)
            return response.data
        }
    )

    export const fetchPosts = createAsyncThunk(
        "posts/fetchPosts",
        async () => {
            const response = await API.getPosts()
            return response.data
        }
    )


    const postsSlice = createSlice({
        name: 'posts',
        initialState: {
            entities: [],
            loading: 'idle',
            error: null
        },
        reducers: {
            createPost(state, action) {
                return [...state, action.payload]
            },
            updatePost(state, action) {},
            deletePost(state, action) {},
        },
        extraReducers:  (builder) => {
            builder
                // Вызывается прямо перед выполнением запроса
                .addCase(fetchPosts.pending, (state) => {
                    state.loading = 'loading';
                    state.error = null;
                })
                // Вызывается в том случае если запрос успешно выполнился
                .addCase(fetchPosts.fulfilled, (state, action) => {
                    // Добавляем пользователя
                    state.loading = 'idle';
                    state.entities = action.payload
                    state.error = null;
                })
                // Вызывается в случае ошибки
                .addCase(fetchPosts.rejected, (state, action) => {
                    state.loading = 'failed';
                    state.error = action.error;
                });
        },
    });

    export const postReducer = postsSlice.reducer;