import { configureStore } from "@reduxjs/toolkit";
import edgeReducer from "./slices/edges.slice";
import nodeReducer from "./slices/nodes.slice";
export const store = configureStore({
  reducer: {
    node: nodeReducer,
    edge: edgeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
