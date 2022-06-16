interface Size {
  mobile: number;
  desktop: number;
  largeDesktop: number;
  extraLargeDesktop: number;
}

const size: Size = {
  mobile: 960,
  desktop: 961,
  largeDesktop: 1340,
  extraLargeDesktop: 2040,
};

interface Device {
  mobile: string;
  desktop: string;
  largeDesktop: string;
  extraLargeDesktop: string;
}

const device: Device = {
  mobile: `(max-width: ${size.mobile}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  largeDesktop: `(min-width: ${size.largeDesktop}px)`,
  extraLargeDesktop: `(min-width: ${size.extraLargeDesktop}px)`,
};

export default device;
