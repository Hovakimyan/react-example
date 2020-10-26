module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-styled-components',
        [
            'module-resolver',
            {
                alias: {
                    'redux-store': './src/redux-store',
                    components: './src/components',
                    constants: './src/constants',
                    helpers: './src/helpers',
                    assets: './src/assets',
                    pages: './src/pages',
                    api: './src/api',
                },
            },
        ],
    ],
}
