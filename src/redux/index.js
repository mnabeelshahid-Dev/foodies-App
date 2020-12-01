import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {reduxFirestore, getFirestore} from 'redux-firestore';
// import {reactReduxFirebase,  getFirebase} from 'react-redux-firebase';
import rootReducer from './rootReducer';
// import firebaseConfig from '../config/firebaseConfig';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer', 'homeReducer', 'locationReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  composeWithDevTools(),
  applyMiddleware(thunk),
  autoRehydrate,
    // reduxFirestore(firebaseConfig),
    // reactReduxFirebase(firebaseConfig),
    // applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {store, persistor};
