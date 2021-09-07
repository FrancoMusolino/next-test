const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: "public",
        disable: false,
        // n b
        disable: process.env.NODE_ENV === 'development'
    },
    reactStrictMode: true,
});