new OptimizeCssAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {discardComments: {removeAll: true}},
    canPrint: false,
});
