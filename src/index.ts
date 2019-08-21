import * as Hapi from '@hapi/hapi'
import { Version } from './version'
import { Status } from './status'

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	})

	server.route({
		method: 'GET',
		path: '/',
		handler: (req, h) => { 
			return { hapi: 'hapi' }
		}
	})

	server.route({
		method: 'GET',
		path: '/version',
		handler: (req, h) => Version('1')
	})

	server.route({
		method: 'GET',
		path: '/status',
		handler: (req, h) => Status('Good')
	})

  await server.start()
}

init()