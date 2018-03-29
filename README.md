# 个人练习聊天室项目

使用:

clone项目
[https://github.com/gmkgmk/onlineTalk]

# 打开方式:

执行npm install;

下载 parcel (直接用的全局parcel运行项目,所以需要下载);

npm install parcel

npm run dev 开启项目

个人练习使用
此为前端,后台使用egg完成,地址如下;

## 后台地址:[egg-socket.io-tail-online](https://github.com/gmkgmk/egg-socket.io-tail-online)

## 前端使用技术:

* react 16.0+
* antd 3.0+
* dva 2.0+
* parcel

## 后台使用技术:

* egg 2.0
* egg-mysql
* egg-session
* egg-socket.io

mysql配置见后台项目.待更新

## 计划功能:

* 在线聊天 √
* 好友列表 √
* 一对多聊天 √
* 一对一与好友私聊 √
* 消息可换行(控制鼠标位置) √
* 个人信息读取 √
* 后台使用数据库保存信息等 √
* session保存登陆状态 √
* 根据随机数生成base64头像图标 √
* 用户在线状态 √
* 个人信息修改
* 动态添加好友
* 群聊天
* 表情功能
* 后台用户管理
* redis持久化聊天记录
* 发布到个人网站

项目结构
----app 已启用(最开始使用的一个项目,使用koa2搭建后台)
----common 常用的工具
---static 静态图片
----src 代码目录
  ---api
  ---component组件
  ---fetch
  ---layout 布局(主要页面)
  ---model dva模型
  ---pages 登陆等页面
  ---index.js dva初始配置;
  ---root.js 项目与dva连接
  ---app.js react的入口


![]("./pic-login.png)
![]("./pic-talk.png)