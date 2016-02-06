var config = {
    ddbb: true,
    domain: {
        url: '', // /htmlEditor
        host: 'http://localhost', // http://DOMAIN.com/htmlEditor
        port: '8010' // null
    },
    env: 'dev', // dev or prod
    mongodb: {
        credentials: '', // username:password@
        host: 'localhost',
        port: ':27017', // :port
        dbName: 'localSurvey'
    },
    public: {
        siteName: 'localSurvey',
        siteDescription: 'localSurvey',
        api: {
            articles: '/form'
        },
        url: {
            admin: '/',
        }
    }
};

module.exports = config;