/*
* 模板引擎
* */


/*var str="<div><%=abc%></div>";
var obj={abc:"我是变量"};
var tpl=str.replace(/<%=([\s\S]+?)%>/g,function(a,b){
    return " '+ obj. "+b+" +' ";
});

tpl="tpl=' "+tpl+" ';\nreturn tpl ";
var a=new Function("obj",tpl);
//console.log(a({abc:"我是变量"}));
console.log(a({aaa:"我是aaa"}));*/

/*

var str=`
<div>
<%= abc %>
<% if(abc) {%>
    <strong><%=abc%></strong>;
<% } %>

<% for(var i=0;i<10;i++){%>
    <em><%=i %></em>
<%} %>

</div>
`;
var obj={abc:"我是字符串"};
var tpl=str.replace(/\n/g,"\\n").replace(/<%=([\s\S]+?)%>/g,function(a,b){
    return " '+"+b+"+ ' ";
}).replace(/<%([\s\S]+?)%>/g,function(a,b){
    return "'\n"+b+ "tpl+='";
});

tpl="with(obj){\nvar tpl='"+tpl+"';\n return tpl}";

console.log(tpl);
var a=new Function("obj",tpl);
//console.log(a(obj))

console.log(a(obj));
*/


/*var str=`
<div>
 <%=abc%>
<%if(abc){%>
  <strong><%=abc%></strong>;
<%}%>
<%for(var i=0;i<10;i++){%>
 <em><%=i%></em>
<%}%>
</div>
`;*/

function compile(str){
    var tpl=str.replace(/\n/g,"\\n").replace(/<%=([\s\S]+?)%>/g,function(a,b){
    return  "'+"+b+"+'";
    }).replace(/<%([\s\S]+?)%>/g,function(a,b){
    return  "'\n"+b+"tpl+='";
    });

    tpl="with(obj){\nvar tpl='"+tpl+"';\n return tpl}";

    return new Function("obj",tpl);
}
//console.log(compile(str));
//console.log(render(str,compile(str)));

function render(str,data){
    if(typeof str=="string"){
        return compile(str)(data);
    }else if(typeof str=="function"){
        return str(data);
    }
}
module.exports.compile=compile;
module.exports.render=render;
