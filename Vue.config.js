
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    // 输出文件目录
    outputDir: './www',
    assetsDir: 'static',
    lintOnSave: true,
    // webpack配置
    chainWebpack: () => {},
    configureWebpack: () => {},
    productionSourceMap: true,
    runtimeCompiler:true,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
        },
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
    }
}
