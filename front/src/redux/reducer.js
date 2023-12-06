import { ADD_FAV, REMOVE_FAV } from './actions';

const initialState = {
  myFavorites: [], // Estado inicial con la propiedad "myFavorites" como un arreglo vacío
  // Otros estados iniciales...
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((character) => character.id !== action.payload),
      };
    // Otros casos...
    default:
      return state;
  }
};

export default rootReducer;