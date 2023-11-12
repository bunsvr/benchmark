import { init } from '@stricjs/app';
import { head } from '@stricjs/app/send';

const notFound = { status: 404 };

init({
    routes: [import.meta.dir + '/src'],
    fallback: () => head(notFound)
});
