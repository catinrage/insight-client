import { createClient, everything } from '../../api';

const client = createClient({
  url: `http://${document.location.hostname}:4000/graphql`,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  },
});

export { client, everything };
