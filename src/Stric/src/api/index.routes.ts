import { routes } from '@stricjs/app';
import { text, json } from '@stricjs/app/send';
import { qs } from '@stricjs/utils';

export function main() {
    const parse = qs.searchKey('name');

    return routes()
        .post('/json', c => c.json().then(json))
        .get('/id/:id', c => text(
            c.params.id + ' ' + parse(c)
        ));
}