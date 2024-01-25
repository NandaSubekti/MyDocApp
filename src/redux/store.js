import {configureStore} from '@reduxjs/toolkit';
import {createStore} from 'redux';

const initialState = {
  loading: false,
  name: 'Nanda Subekti',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

//ini settingan dari documentaion react-redux untuk ts
// const store = configureStore(reducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
