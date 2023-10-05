import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isThemeLight: true,
}

const styleSettingsSlice = createSlice({
    name: 'styleSettings',
    initialState,
    reducers: {
        changeTheme(state){
            state.isThemeLight = !state.isThemeLight
        }
    }
})

export const { changeTheme } = styleSettingsSlice.actions
export default styleSettingsSlice.reducer