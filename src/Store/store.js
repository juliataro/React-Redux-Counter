import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Components/Counter/counterSlice";

// RestApi
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "../Components/Pokemon/PokemonSlice";



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getGetDefaultMiddleware)=>
  getGetDefaultMiddleware().concat(pokemonApi.middleware),

});

export default store;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);