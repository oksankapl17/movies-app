const initialState = {
  list: [],
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_MOVIES': {
      return {
        // Again, one less level of nesting to copy
        ...state,
        list: [...state.list, ...action.payload]
      }
    }
    default:
      return state
  }
}
