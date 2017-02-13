const env = process.env.NODE_ENV || 'development'
const __DEV__ = env === 'development'
const __STAGING__ = env === 'staging'
const __TEST__ = env === 'test'
const __PROD__ = env === 'production'
const __BASE__ = '/'

let config = {
  env,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: __dirname,
  dir_src: 'src',
  dir_dist: 'dist',
  dir_docs_root: 'docs',
  dir_example_root: 'example',
  dir_example_src: 'example/src',
  dir_docs_src: 'docs/app',
  dir_docs_dist: 'docs/build',
  dir_umd_dist: 'dist/umd',
  dir_test: 'test',
}

module.exports = config