import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    users: [
        {
            id: "1",
            name: "Islam",
            email: "islam@gmail.com",
            password: "12345",
        },
        {
            id: "2",
            name: "Bekbaevich",
            email: "bekbaevich@gmail.com",
            password: "12345",
        },
    ],
    errorEmail: false,
    errorPassword: false,
    errorEmailMessage: "Paydalanıwshı tabılmadı",
    errorPasswordMessage: "Kodta qátelik",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            if (state.users.find(item => item.email === action.payload.email)) {
                state.errorEmail = true
            } else {
                state.user = action.payload
                state.users = [...state.users, action.payload]
            }

        },
        loginUser: (state, action) => {
            if (state.users.find(item => item.email === action.payload.email && item.password === action.payload.password)) {
                state.user = state.users.find(item => item.email === action.payload.email)
            } else if (!state.users.find(item => item.email === action.payload.email)) {
                state.errorEmail = true;
            } else if (state.users.find(item => item.email === action.payload.email)) {
                const x = state.users.find(item => item.email === action.payload.email)
                if (!(x.password === action.payload.password)) {
                    state.errorPassword = true;
                }
            }
        },
        logoutUser: (state) => {
            state.user = null
        },

        setErrorStatus: (state) => {
            state.errorEmail = false
            state.errorPassword = false
        }
    }
})

export const { registerUser, logoutUser, loginUser, setErrorStatus } = userSlice.actions;
export default userSlice.reducer;
