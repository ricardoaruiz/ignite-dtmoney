import { createServer, Model } from 'miragejs';
import { transactionsMock } from './mocks/transactions';

const TRANSACTION_URI = '/transactions';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: transactionsMock,
    });
  },

  routes() {
    this.namespace = 'api';

    this.get(TRANSACTION_URI, () => {
      return this.schema.all('transaction');
    });

    this.post(TRANSACTION_URI, (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});
