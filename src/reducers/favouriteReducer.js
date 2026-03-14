/**
 * Reducer function to manage the application's global favorites list.
 * Handles adding/removing photo IDs from the list.
 */

// Initial state is an empty array (no favorites)
export const initialState = [];

export const favouriteReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_FAVOURITES':
      // Hydrate state from persistence (e.g., localStorage)
      return action.payload;
      
    case 'TOGGLE_FAVOURITE':
      // If the ID exists, remove it (filter); otherwise, add it (spread)
      if (state.includes(action.payload)) {
        return state.filter(id => id !== action.payload);
      } else {
        return [...state, action.payload];
      }
      
    default:
      return state;
  }
};
