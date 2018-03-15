
//server相关
const Koa = require("koa");
const app = new Koa();
const PORT = 8080;
const promise = require('./promise');
const init = ctx => {
  if (ctx.method === 'GET' && ctx.url.split('?')[0] === '/getData.jsonp') {
    // 获取jsonp的callback
    console.log(promise)
    let callbackName = ctx.query.callback || 'callback'
    let returnData = {
      success: true,
      data: {
        text: 'this is a jsonp api',
        time: new Date().getTime(),
      }
    }

    // jsonp的script字符串
    let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`

    // 用text/javascript，让请求支持跨域获取
    ctx.type = 'text/javascript'

    // 输出jsonp字符串
    ctx.body = jsonpStr
  }
}

app.use(init);

app.listen(PORT, () => console.log("running on port " + PORT));
