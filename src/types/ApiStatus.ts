import AppConstants from '../AppConstants';
import AppError from './AppError';

type ApiState =
  | typeof AppConstants.API_STATE.IDLE
  | typeof AppConstants.API_STATE.LOADING
  | typeof AppConstants.API_STATE.ERROR;

interface ApiStatus {
  state: ApiState;
  error: AppError;
}

export default ApiStatus;
