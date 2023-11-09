import { routes } from '@stricjs/app';
import * as send from '@stricjs/app/send';

export const main = () => routes()
    .get('/', () => send.text('Hi'))
    .post('/api/json', c => c.json().then(send.json));
