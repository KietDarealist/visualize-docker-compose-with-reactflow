import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import serviceNodeReducer from "./serviceNode";
import networkNodeReducer from "./networkNode";
import volumeNodeReducer from "./volumeNode";
import portNodeReducer from "./portNode"
import edgeReducer from "./edge";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    serviceNode: serviceNodeReducer,
    networkNode: networkNodeReducer,
    volumeNode: volumeNodeReducer,
    portNode: portNodeReducer,
    edge: edgeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
