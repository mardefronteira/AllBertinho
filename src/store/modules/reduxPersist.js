import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persist = persistReducer(
    {
      key: 'ALLBERTINHO',
      storage,
      whitelist: ['auth', 'cart']
    },
    reducers
  );

  return persist;
};