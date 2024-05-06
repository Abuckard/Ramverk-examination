import {configureStore, createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: "light"
    },
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
})

export const store = configureStore({   
    reducer: {
        theme: themeSlice.reducer
    },
    }   
);

export const {toggleTheme} = themeSlice.actions