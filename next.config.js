const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://xchux.github.io/tmp_resume/' : undefined
}
