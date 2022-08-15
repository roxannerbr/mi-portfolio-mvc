/* Livereload */
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();
/* entry point */
const express= require('express');
const connectLivereload = require('connect-livereload')
const path= require('path');
const app= express();
const port= 3000;

/* rutas */
const mainRouter=require('./routers/main');

app.set('views', path.join(__dirname,'views'));/* renderiza el home */
app.set('view engine','ejs');

/* archivos estaticos */
app.use(express.static(path.resolve(__dirname, 'public')));

/* Archivos estaticos monitoreados */
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

app.use("/", mainRouter);


/* Funcion de actualizacion del servidor */
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 50);
  });

  /* levantamos el servidor con app listen */
app.listen(port,()=>console.log(`El servidor fue levantado con exito en el puerto ${port}`));