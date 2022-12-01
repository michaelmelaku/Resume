import {configureStore, combineReducers} from '@reduxjs/toolkit';
import educationReducer from './reducers/education';
import experienceReducer from './reducers/experience';
import skillReducer from './reducers/skill';
import summaryReducer from './reducers/summary';
import personReducer from './reducers/person';
import languageReducer from './reducers/language';
import userReducer from './reducers/user';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const rootReducer = combineReducers({
    education: educationReducer,
    experience: experienceReducer,
    skill: skillReducer,
    summary: summaryReducer,
    person: personReducer,
    language: languageReducer,
    user: userReducer
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
reducer: persistedReducer,
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
});
  
export let persistor = persistStore(store);