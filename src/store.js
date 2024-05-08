import {configureStore, createSlice} from "@reduxjs/toolkit";


//  Här är koden för darkmode/lightmode. Det är ett globalt state som kan skickas till 
//  alla komponenter. Den sätter light som initialState och sen varje gång någon
//  klickar på knappen som ligger i toggleTheme skickas det till store.js som uppdaterar
//  nästa state som i det här fallet är dark. Den byter sen mellan dark och light varje 
//  gång knappen klickas. Detta sker genom reducers som hanterar applikationens tillstånd
//  och uppdaterar state.

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