import { createSlice, current } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
    gameSession: {},
    poisonsList: [],
    settings: {}
};

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGameSession: (state, action) => {
            state.gameSession = action.payload
            console.log({gameSession: state.gameSession})
        },
        setPoisonsList: (state, action) => {
            state.poisonsList = action.payload
            console.log({poisonsList: state.poisonsList})
        },
        setSettings: (state, action) => {
            state.settings = action.payload
            console.log({settings: state.settings})
        }

    },
})

export const gameSelectors = {
    gameSession: (state) => _.get(state, 'games.gameSession', {}),
    poisonsList: (state) => _.get(state, 'games.poisonsList', []),
    settings: (state) => _.get(state, 'games.settings', {})
}

// Action creators are generated for each case reducer function
export const { setGameSession, setPoisonsList, setSettings } = gamesSlice.actions

export default gamesSlice.reducer
