import { init } from '@stricjs/app';
import { status } from '@stricjs/app/send';

const app = await init({
    routes: [import.meta.dir + '/src'],
    fallback: () => status(404)
});

app.logRoutes();
