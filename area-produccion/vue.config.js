module.exports = {
    chainWebpack: config => {
        config.devServer.set('inline', false)
        config.devServer.set('hot', true)
        // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
        // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
        config.output.filename(`[name].js`)
        config.output
        config.externals(['vue', 'vue-router'])
    },
    filenameHashing: false
}
