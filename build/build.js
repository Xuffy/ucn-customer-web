require('./check-versions')()

var argument = process.argv.splice(2)
  , toEnv = {dev: 'develop', test: 'test', pro: 'production', mock: 'mock'};

if (!toEnv[argument[0]]) {
  throw new Error('argument is undefined\nYou can use it "dev" or "test" or "pro" or "mock"');
}
process.env.NODE_ENV = toEnv[argument[0]];

var ora = require('ora')
var webpackConfig = require('./webpack.prod.conf')
var spinner = ora('building for ' + process.env.NODE_ENV + '...')

spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
