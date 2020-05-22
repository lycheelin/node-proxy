const express = require('express');
const router = express.Router();

const proxy = require('http-proxy-middleware');

//设置跨域问题
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  next();
});

const proxyOption = {
  target: 'http://10.10.52.120:8080',
  // pathRewrite: {
  //    '^/ftc/req/mapbox/' : '/' // 重写请求，api/解析为/
  //  },
   changeOrigoin:true
 };
router.use('/geoserver',proxy.createProxyMiddleware(proxyOption))

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'node-proxy' });
// });

router.get('/test', function(req, res, next) {
  console.log('test ');
  res.send('test success!');
});



module.exports = router;
