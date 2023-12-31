import { routes } from '@stricjs/app';
import { text } from '@stricjs/app/send';

export default routes().get('/', () => text('Hi'));
