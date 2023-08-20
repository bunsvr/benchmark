import { render } from "lib/utils/chart";
import data from '../results/data.json';

render(process.cwd() + '/results/chart.png', data);
