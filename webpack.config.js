
module.exports = {
    entry:'./src/js/entry.js',
    output:{
        path:'./out/',
        publicPath:'http://localhost:8080/out/',
        filename:'index.js'
    },
    module:{
        loaders:[
            {test:/.js$/, loader:'babel',query:{presets:['es2015', 'react']}, exclude:/node_modules/},
            {test:/.less$/,loader:'style!css!less'},
            {test:/.(png|jpg|jpeg)$/,loader:'url?limit=8192'}
        ]
    }
}
