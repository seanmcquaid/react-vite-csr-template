import { createStandaloneToast } from '@chakra-ui/react';

const standaloneToast = createStandaloneToast({
  defaultOptions: {
    position: 'bottom',
    isClosable: true,
  },
});

export const createToast = standaloneToast.toast;

const Toast = standaloneToast.ToastContainer;

export default Toast;
