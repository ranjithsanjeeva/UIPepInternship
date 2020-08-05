const http =  require('http');
const hostname='127.0.0.1';
const port = 3000;

const server=http.createServer((req,res)=>{
  
   res.setHeader(200,'content-type','text/plain');
   res.end("Hello");
});

server.listen(port,hostname,()=>{
    console.log('server started on the port'+port);
})
