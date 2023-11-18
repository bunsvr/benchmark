import { routes } from '@stricjs/app';
import { text } from '@stricjs/app/send';

export const main = () => routes()
    .get('/', () => text('Hi'));
