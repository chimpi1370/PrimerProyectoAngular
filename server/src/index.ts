import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//se importan las rutas de las paginas.
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

//se instancia el atributo app como tipo aplicacion. invocando ficheros desde Angular
    public app: Application;

//el constructor inicializa los metodos. 
    constructor(){
        this.app = express();
        this.config();
        this.routes();


    }
//aquí se configura los puertos mediante los metodos de la propiedad app.
    config(): void {
        this.app.set('port', process.env.PORT || 3000); //en esta linea se enruta a traves del puerto enviado o en defecto el 3000
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    //se almacenan las rutas de las paginas 
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);

    }
    // instancia apllicaciones para pasar el puerto enviando un mensaje por consola con el numero del puerto.
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log ('server en el puerto: ', this.app.get('port'));
        })
    }
}
//aqui se inicia instancia la clase server como servidor.
const server = new Server();
//dn esta ejecución de metodo se inicia el camino del servidor
server.start();