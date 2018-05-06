var express = require('express');
var app = express();

//ルートパスにアクセスされたときの異常系処理
app.get('/', function(req, res){
    res.send('Hello World');
});

//サーバ起動
app.listen(3000, function(){
    console.log('Example app listing on port 3000');
});

