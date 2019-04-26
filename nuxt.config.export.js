import config from './nuxt.config'

config.build.extractCSS = true
config.build.splitChunks = {
  layouts: false,
  pages: false,
  commons: false
}
config.build.filenames = { css: () => 'export.css' }
config.generate.dir = 'export'
export default config
