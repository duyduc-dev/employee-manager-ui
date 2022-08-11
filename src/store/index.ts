import { configureStore } from '@reduxjs/toolkit';
import headerSlice from '~/layouts/components/Header/headerSlice';
import listEmployeeSlice from '../components/ListEmployee/listEmployeeSlice';

// ...

export const store = configureStore({
  reducer: {
    headerReducer: headerSlice,
    listEmployeeReducer: listEmployeeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
