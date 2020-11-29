module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: false,
    purgeLayersByDefault: false
  },
  purge: {
    enabled: false,
  },
  theme: {}
});
