import server from './server';
import { HOST, PORT } from './settings.js'

//TODO: Clusterize
server.listen(PORT, HOST, () => {
	console.log("H2PAAS are running on %s:%s", HOST, PORT)
})