export default {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                corejs: 3,
            },
        ],
    ],
    plugins: ["@babel/plugin-transform-arrow-functions"]
};