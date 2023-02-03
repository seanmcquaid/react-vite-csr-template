import { createStandaloneToast } from '@chakra-ui/react';

const standaloneToast = createStandaloneToast({
  defaultOptions: {
    position: 'bottom',
  },
});

export const toast = standaloneToast.toast;

export const Toast = standaloneToast.ToastContainer;
