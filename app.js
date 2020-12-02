const http = require('http');
const fs = require('fs');


//http =>
//cliente =>(request, response) servidor
http.createServer((request, response)=>{
  fs.readFile('index.html', (err, data)=>{

    // Encabezado de la respuesta http
    // 1) Estatus del protocolo http
    // 2) Tipo de contenido (Content Type) => text/html text/plain application/json
    response.writeHead(500,{"Content-Type":"text/html "});
    //contenido del cuerpo de la respuesta
    if(request.url == "/pagina")
    response.write(data);
    //response.write("<html><head></head><body><p>Hola soy un parrafo</p></body></html>");
    else if (response.url == "/adios" )
      response.write("Hasta luego");
    else
    response.write("Bienvenido al servidor del proyecto, incluye /pagina para visualizar");
    response.end();

  });
}).listen(4000);
