enum PromiseStatuses {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

function suspendPromise<T>(promise: Promise<T>): { read: () => T | undefined } {
  let status: PromiseStatuses = PromiseStatuses.PENDING;
  let result: T;
  const suspender = promise.then(
    r => {
      status = PromiseStatuses.SUCCESS;
      result = r;
    },
    e => {
      status = PromiseStatuses.ERROR;
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}

export default suspendPromise;
