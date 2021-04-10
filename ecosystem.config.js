module.exports = {
    apps: [
        {
            name: `node-crawler`,
            script: './src/index.js',
            // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
            args: '',
            instances: 1,
            autorestart: true,
            watch: [
                'index.js',
                'app.js',
            ],
            watch_delay: 1000,
            ignore_watch: [
                'node_modules',
                'logs',
            ],
            max_memory_restart: '200M',
            env: { // pm2 start ecosystem.config.js
                NODE_ENV: 'production',
            },
            error_file: 'logs/err.log',
            out_file: 'logs/out.log',
            log_file: 'logs/combined.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS',
        },
    ],
}
