// ecosystem.config.js
module.exports = {
    apps: [
      {
        name: "2ul.top-3000",
        script: "yarn",
        args:"start",
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        instances: 1,
        env: {
            NODE_ENV: 'production',
            BASE_URL: 'https://2ul.top',
            CLIENT_URL: 'https://client.2ul.top',
            API_BASE_URL: 'https://api.2ul.top',
            API_READ_SHRTN_DATA: '/urls/',
            API_WRITE_SHRTN_DATA: '/urls',
            REDIRECT_DELAY_TIME: 15000
          }
      },
    ],
  };