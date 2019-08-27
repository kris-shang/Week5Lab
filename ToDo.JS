let express=require('express');
let app=express();
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
let bodyParser=require('body-parser');
let path2View=__dirname+"/views/";
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('imges'));
app.use(express.static('CSS'));


let TaskDB=[];
app.get('/',function(req,res){
    console.log("hello");
    res.sendFile(path2View+'index.html');
});

app.get('/newtask',function(req,res){
    res.sendFile(path2View+'AddTask.html');
});

app.post('/newtaskrecord',function(req,res){
    console.log(req.body);
    TaskDB.push(req.body);
    res.sendFile(path2View+"index.html");
});
app.get('/listtasks',(req,res)=>{
    res.render(path2View+"ListAllTasks.html",{
        Task:TaskDB});
});

app.listen(8080);
