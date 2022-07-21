
# Lite PNG captcha generator

More faster and colorful version of [`captchapng`](https://www.npmjs.com/package/captchapng). (2~3 faster than orginal)

Added typings into captchapng2

## Installation

```shell
npm install typed-captchapng
```

## Examples

```javascript
const http = require('http');
const captchapng = require('typed-captchapng');

http.createServer(function (req, res) {
  if(req.url == '/captcha.png') {
    let rand = parseInt(Math.random() * 9000 + 1000);
    let png = new captchapng(80, 30, rand); // width,height, numeric captcha

    res.writeHead(200, { 'Content-Type': 'image/png'});
    res.end(png.getBuffer());
  } else {
    res.end('');
  }
}).listen(8181);

console.log('Web server started.\nSee http:\\\\127.0.0.1:8181\\captcha.png');
```

output:

![captcha](examples/captcha.png)
