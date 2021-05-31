const customViewports = {
  XS: {
    name: 'ExtraSmall',
    styles: {
      width: '575px',
      height: '963px',
    },
  },
  SM: {
    name: 'Small',
    styles: {
      width: '767px',
      height: '963px',
    },
  },
  MD: {
    name: 'Medium',
    styles: {
      width: '991px',
      height: '963px',
    },
  },
  LG: {
    name: 'Large',
    styles: {
      width: '1199px',
      height: '963px',
    },
  },
  XL: {
    name: 'XtraLarge',
    styles: {
      width: '1200px',
      height: '963px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}