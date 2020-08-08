"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//se importan las rutas de las paginas.
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    //el constructor inicializa los metodos. 
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //aquí se configura los puertos mediante los metodos de la propiedad app.
    config() {
        this.app.set('port', process.env.PORT || 3000); //en esta linea se enruta a traves del puerto enviado o en defecto el 3000
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //se almacenan las rutas de las paginas 
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    // instancia apllicaciones para pasar el puerto enviando un mensaje por consola con el numero del puerto.
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server en el puerto: ', this.app.get('port'));
        });
    }
}
//aqui se inicia instancia la clase server como servidor.
const server = new Server();
//dn esta ejecución de metodo se inicia el camino del servidor
server.start();
