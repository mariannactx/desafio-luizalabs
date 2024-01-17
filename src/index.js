const Hapi = require('@hapi/hapi');
const { convert } = require('./convert.js');
const { filterByOrderId, filterByDate } = require('./filter.js');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'POST',
    path: '/convert',
    handler: (request, h) => {
      return convert(request.payload)
    }
  });

  server.route({
    method: 'POST',
    path: '/filter',
    handler: (request, h) => {

      if (request.query.orderId) {
        return filterByOrderId(request.payload, request.query.orderId)
      }

      if (request.query.beginDate && request.query.endDate) {
        return filterByDate(request.payload, request.query.beginDate, request.query.endDate)
      }

      return "Filters not defined correctly. Set a orderId or beginDate and endDate."
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();