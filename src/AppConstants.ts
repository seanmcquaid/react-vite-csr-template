export enum NODE_ENV {
  DEVELOPMENT = 'development',
  TEST = 'test',
  PRODUCTION = 'production',
}

enum API_STATE {
  IDLE = 'idle', // No API call or error
  LOADING = 'loading', // Currently requesting
  ERROR = 'error', // Attempting request produced an error
}

const AppConstants = {
  API_STATE,
  REDUX_STORE_VERSION: 0,
};

export default AppConstants;
