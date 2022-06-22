import { createSlice } from '@reduxjs/toolkit'

const authenticated = createSlice({
  name: 'authenticated',
  initialState: {
    userId: null,
    authToken: null,
    username: null,
    error: null,
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.authToken = action.payload.accessToken
      state.username = action.payload.username
      state.userId = action.payload.userId
    },
    logout: (state, action) => {
      state.authToken = ''
      state.username = ''
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export default authenticated
