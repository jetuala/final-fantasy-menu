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
      );
    },
    reorderParty: (state, action) => {
      // state.party.splice(state.party[action.payload.hoverIndex], 1, state.party.splice(action.payload.dragIndex, 1)[0])
      // I tried SO hard for this splice method to work but it just never did. The following line did, however.
      [state.party[action.payload.dragIndex], state.party[action.payload.hoverIndex]] = [state.party[action.payload.hoverIndex], state.party[action.payload.dragIndex]]
      // I can't believe this worked. It's so stupid LOL
    }
  }
})

export const { addPartyMember, deletePartyMember, reorderParty } = partySlice.actions;

export default configureStore({
  reducer: {
    party: partySlice.reducer
  }
})