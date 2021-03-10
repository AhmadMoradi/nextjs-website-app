module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/recipes/spice-cookies',
                permanent: true,
            },
        ]
    },
}