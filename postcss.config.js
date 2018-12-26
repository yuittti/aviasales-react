module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
        require('autoprefixer')({
            flexbox: 'no-2009'
        })
    ],
};