import { FC } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from '../store';
import Layout from '../components/Layout';

const persistor = persistStore(store);

const Root: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>
  );
};

export default Root;
