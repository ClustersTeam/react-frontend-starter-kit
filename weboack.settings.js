// webpack.settings.js - webpack settings config

require('dotenv').config();

// Webpack settings exports
// noinspection WebpackConfigHighlighting
module.exports = {
    name: "Example Project",
    copyright: "Example Company, Inc.",
    paths: {
        src: {
            base: "./src/",
            css: "./src/styles/",
            js: "./src/scripts/"
        },
        dist: {
            base: "./dist/",
            clean: [
                "./images",
                "./criticalcss",
                "./styles",
                "./scripts"
            ]
        },
        templates: "./templates/"
    },
    urls: {
        live: "https://example.com/",
        local: "http://example.test/",
        critical: "http://example.test/",
        publicPath: "/dist/"
    },
    vars: {
        cssName: "styles"
    },
    entries: {
        "app": "app.js"
    },
    copyWebpackConfig: [
        {
            from: "./src/scripts/workbox-catch-handler.js",
            to: "scripts/[name].[ext]"
        }
    ],
    criticalCssConfig: {
        base: "./dist/criticalcss/",
        suffix: "_critical.min.css",
        criticalHeight: 1200,
        criticalWidth: 1200,
        ampPrefix: "amp_",
        ampCriticalHeight: 19200,
        ampCriticalWidth: 600,
        pages: [
            {
                url: "",
                template: "index"
            }
        ]
    },
    devServerConfig: {
        public: () => process.env.DEVSERVER_PUBLIC || "http://localhost:8080",
        host: () => process.env.DEVSERVER_HOST || "localhost",
        poll: () => process.env.DEVSERVER_POLL || false,
        port: () => process.env.DEVSERVER_PORT || 8080,
        https: () => process.env.DEVSERVER_HTTPS || false,
    },
    manifestConfig: {
        basePath: ""
    },
    purgeCssConfig: {
        paths: [
            "./src/react/**/*.{js,jsx}"
        ],
        whitelist: [
            "./src/styles/components/**/*.{css,scss, sass}"
        ],
        whitelistPatterns: [],
        extensions: [
            "html",
            "js",
            "jsx",
        ]
    },
    saveRemoteFileConfig: [
        {
            url: "https://www.google-analytics.com/analytics.js",
            filepath: "js/analytics.js"
        }
    ],
    createSymlinkConfig: [
        {
            origin: "images/favicons/favicon.ico",
            symlink: "../favicon.ico"
        }
    ],
    webappConfig: {
        logo: "./src/images/favicon-src.png",
        prefix: "images/favicons/"
    },
    workboxConfig: {
        swDest: "../sw.js",
        precacheManifestFilename: "scripts/precache-manifest.[manifestHash].js",
        importScripts: [
            "/dist/workbox-catch-handler.js"
        ],
        exclude: [
            /\.(png|jpe?g|gif|svg|webp)$/i,
            /\.map$/,
            /^manifest.*\\.js(?:on)?$/,
        ],
        globDirectory: "./",
        globPatterns: [
            "offline.html",
            "offline.svg"
        ],
        offlineGoogleAnalytics: true,
        runtimeCaching: [
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
                handler: "cacheFirst",
                options: {
                    cacheName: "images",
                    expiration: {
                        maxEntries: 20
                    }
                }
            }
        ]
    }
};