// 动态生成入口
import app from './app';

let element = document.createElement('div');
element.className = 'root';

document.body.appendChild(element);

app.start(element);