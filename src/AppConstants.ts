enum API_STATE {
  IDLE = 'idle', // No API call or error
  LOADING = 'loading', // Currently requesting
  ERROR = 'error', // Attempting request produced an error
}

const AppConstants = {
  API_STATE,
} as const;

export default AppConstants;
