module.exports = {
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                // '@':'src',
                'assets':'@/assets',
                'views':'@/views',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',

            }
        }
    }
}