import server from './server';
import { appConfig } from './settings.js'

//TODO: Clusterize
server.listen(appConfig.PORT, appConfig.HOST)