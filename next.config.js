module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/recipes/granny-s-spice-cookies',
                permanent: true,
            },
        ]
    },
}