import { routes } from '@stricjs/app';
import { text } from '@stricjs/app/send';
import { qs } from '@stricjs/utils';

export function main() {
    const parse = qs.searchKey('name');

    return routes().get('/id/:id', c => text(
        c.params.id + ' ' + parse(c)
    ));
}
