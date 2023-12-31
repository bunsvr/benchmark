import { routes } from '@stricjs/app';
import { text } from '@stricjs/app/send';
import { qs } from '@stricjs/utils';

const parse = qs.searchKey('name');

export default routes()
    .get('/id/:id', c => text(c.params.id + ' ' + parse(c)));

