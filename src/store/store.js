import { configureStore, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const partySlice = createSlice({
  name: 'party',
  initialState: initialState,
  reducers: {
    addPartyMember: (state, action) => {
      state.party.push(action.payload);
    },
    deletePartyMember: (state, action) => {
      state.party.splice(state.party.findIndex((x) => x.id === action.payload), 1
      ); // this isn't right yet, figure it out tomorrow
    }
  }
})

export const { addPartyMember, deletePartyMember } = partySlice.actions;

export default configureStore({
  reducer: {
    party: partySlice.reducer
  }
})