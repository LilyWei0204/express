/*


var express=require("./express.js");
var app=express("abc");
app.listen(8888);

app.set("/abc/",function(req,res){
    res.send("abc");
})
app.set("/abc/:id",function(req,res){
    res.send(res.param.id);
})

*/




var express=require("./express.js");
var app=express("abc");
var fs=require("fs");

app.listen(8888);
app.set("/abc/:id",function(req,res){
    //res.send("跟目录");
    //res.send("abcsdsdfdfdf");
    //res.send(res.param.id);
    //res.sendFile("./abc/a.html");

    //var result=query("select * from abc where id="+res.param.id);
    var str=fs.readFileSync("../jade/tpl/index.tpl");
    //console.log(str.toString());
    res.render(str.toString(),{abc:res.param.id});
});


/*app.set("/abc/:id",function(req,res){
    res.send(res.param.id);
})*/