module.exports = {
  apps: [{
    name: 'devjw',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-52-56-47-88.eu-west-2.compute.amazonaws.com',
      key: 'C:\ssh\devjw.pem',
      ref: 'origin/master',
      repo: 'https://github.com/jackowild/devjw.com.git',
      path: '/home/ec2-user/devjw',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}