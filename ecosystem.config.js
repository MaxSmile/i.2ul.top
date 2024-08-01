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
            NODE_ENV: 'production'
          }
      },
    ],
  };