//buat server
const http = require('http');
const PORT = 3002;
 
//buat route pakai HTTP Method (GET, POST, PUT, PATCH, DELETE)
//pakai req.method dulu 
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write("Dari main route");
    res.end();
  }
 
  if (req.url === "/about" && req.method === "GET") {
    res.write("About Page");
    res.end();
    //didalam res.end ini bisa diisiin style, string, dll
  }
});
 
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})