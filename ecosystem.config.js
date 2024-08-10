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
            API_READ_SHRTN_DATA: 'https://api.2ul.top/urls',//'/urls/:id'
            API_WRITE_SHRTN_DATA: 'https://api.2ul.top/urls',//'/urls'
            REDIRECT_DELAY_TIME: 15000
          }
      },
    ],
  };