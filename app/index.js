import server from './server';
import { HOST, PORT } from './settings.js'

//TODO: Clusterize
server.listen(PORT, HOST)