module.exports = {
    publicRuntimeConfig: {
      localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
    },
    webpack: function(cfg) {
      const originalEntry = cfg.entry
      cfg.entry = async () => {
        const entries = await originalEntry()
  
        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./client/polyfills.js')
        ) {
          entries['main.js'].unshift('./client/polyfills.js')
        }
  
        return entries
      }
  
      return cfg
    },
  }
