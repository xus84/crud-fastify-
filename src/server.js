const fastify = require('fastify')({ logger: true })

const routes = require('./routes/products.routes');

const productRoutes = require("./routes/products.routes")

require('./utils/mongoose')

fastify.get("/", (request, reply) => {
  reply.send({ hello: "bots"})
});


productRoutes.forEach((route) => {
  fastify.route(route);
})



  const start = async () => {
  
      await fastify.listen(3000)
     fastify.log.info('server started')
  }
  start()