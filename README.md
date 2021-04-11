# node-crawler

#### 介绍
nodejs写的爬虫定时任务，用于爬取gitee推荐项目。
关于本项目的详细介绍，可以参阅[《用nodejs写一个简单的爬虫爬取gitee上的推荐项目》](https://www.orzzone.com/node-crawler-gitee-recommend-projects.html)。

#### 软件架构
node v14.15.5


#### 安装教程

1. 下载源码：`git clone https://gitee.com/bulls-cows/node-crawler.git`
2. 进入项目根目录，安装依赖，如果安装过pm2的话执行`npm install`，否则执行`npm run installDependencies`，
3. 本地运行：执行`npm run debug`。
4. 服务器上部署。执行`npm run start`启动服务，并且执行`npm run getShellUsedToStartProjectAfterReboot`来保证服务会在服务器开机后自动重启。

#### 使用说明

需要使用mysql数据库的话可以打开`src/config/database.config.js`文件修改其中的配置为真实配置，
然后修改`src/index.js`文件中被注释掉的数据库相关代码，
其中的sql语句根据实际需要来写。


#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### License

[MIT License](./LICENSE)
