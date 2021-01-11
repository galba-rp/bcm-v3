import * as actionTypes from "../actions/actionTypes";

const initialState = {
  players: [
    {
      id: 0,
      name: "Yaroslav",
      level: "D5",
      games: [
        { id: 0, game: "yes" },
        { id: 1, game: 0 },
        { id: 2, game: 0 },
        { id: 3, game: 0 },
      ],
    },
    {
      id: 1,
      name: "Gwena",
      level: "D5",
      games: [
        { id: 0, game: "this" },
        { id: 1, game: 0 },
        { id: 2, game: 0 },
        { id: 3, game: 0 },
      ],
    },
    {
      id: 2,
      name: "Ben",
      level: "D5",
      games: [
        { id: 0, game: 0 },
        { id: 1, game: 0 },
        { id: 2, game: 0 },
        { id: 3, game: 0 },
      ],
    },
    {
      id: 3,
      name: "Eric",
      level: "D5",
      games: [
        { id: 0, game: 0 },
        { id: 1, game: 0 },
        { id: 2, game: 0 },
        { id: 3, game: 0 },
      ],
    },
    {
      id: 4,
      name: "Fred",
      level: "D3",
      games: [
        { id: 0, game: 0 },
        { id: 1, game: 0 },
        { id: 2, game: 0 },
        { id: 3, game: 0 },
      ],
    },
  ],
  dts: [
    { id: 0, date: " 02/10", game: "st.Ave - Meucon" },
    { id: 1, date: " 02/11", game: "grand champ - Meucon" },
    { id: 2, date: " 15/11", game: "Meucon - Guer" },
    { id: 3, date: " 11/12", game: "Meucon - St.Ave" },
  ],
  modal: {
    state: false,
  },
  playing: { x: 0, y: null },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_AVAILABILITY:
      let players = [...state.players];
      players[state.playing.x].games[state.playing.y].game = action.val;
      return {
        ...state,
        players: players,
      };
    case actionTypes.MODAL_STATE:
      return {
        ...state,
        playing: {
          ...state.playing,
          x: [action.x],
          y: [action.y],
        },
        modal: {
          ...state.modal,
          state: true,
        },
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          state: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
