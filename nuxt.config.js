import fs from 'fs'
import path from 'path'
import util from 'util'

import glob from 'glob'
import yaml from 'js-yaml'

export default {
  mode: 'universal',

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  modules: ['@nuxtjs/axios'],

  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    async routes() {
      const files = await util.promisify(glob)('content/news/posts/*.yml')
      const routes = []
      for (const file of files) {
        const yamlStr = await util.promisify(fs.readFile)(file, 'utf8')
        const yamlObj = yaml.safeLoad(yamlStr)
        const basename = path.basename(file, path.extname(file))
        routes.push({ route: `/news/${basename}`, payload: yamlObj })
      }
      return routes
    }
  },

  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active'
  }
}
