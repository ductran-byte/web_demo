module.exports = {
    devServer: {
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }
            // Thêm các middleware tùy chỉnh của bạn ở đây nếu cần
            return middlewares;
        },
    },
};
