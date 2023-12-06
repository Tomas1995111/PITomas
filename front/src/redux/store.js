import { createStore, combineReducers } from 'redux';
import rootReducer from './reducer'; // Asegúrate de tener el nombre correcto del archivo

// Combinar los reducers si tienes más de uno
// const rootReducer = combineReducers({
//   // ...tus reducers aquí
// });

// Crear el store
const store = createStore(rootReducer);

export default store;