const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"]
    }
}