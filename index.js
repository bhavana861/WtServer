const jsonServer = require('json-server')

const WTServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = process.env.PORT || 3000  // Use environment variable for PORT or fallback to 3000

const route = jsonServer.router('db.json')

WTServer.use(middleware)
WTServer.use(route)

WTServer.listen(PORT, () => {
    console.log(`WTServer started at PORT : ${PORT} and waiting for client request!!!`)
})
