import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '~/common/apis/movieApi';
import { APIKEY } from '~/common/apis/MovieApiKey';

// Get data from API with type is movie
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (data) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${data}&type=movie`);
    return response.data;
});
// Get data from API with type is series
export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async (data) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${data}&type=series`);
    return response.data;
});
// Get data from API with type is series
export const fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
});

const initialState = {
    movies: {},
    series: {},
    detail: {},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeDetail: (state) => {
            state.detail = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Fetch Fail ');
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            return { ...state, series: payload };
        },
        [fetchAsyncSeries.rejected]: () => {
            console.log('Fetch Series Fail ');
        },
        [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
            return { ...state, detail: payload };
        },
    },
});

export const { removeDetail } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getDetail = (state) => state.movies.detail;
export default movieSlice.reducer;
