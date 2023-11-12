import { Info } from "./types";

export const descript = (name: string, info: Info) =>
    `- [${name}](${info.homepage})` + (
        info.description ? `: ${info.description}.` : ''
    ) + `\n`;
