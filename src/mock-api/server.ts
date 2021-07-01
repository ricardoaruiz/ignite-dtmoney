import { createServer } from 'miragejs';
import { transactionsMock } from 'components/TransactionTable/mock';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return transactionsMock;
    });
  },
});
