const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

function randomID(length: number) {
    let result = '', i = 0;
    while (i < length) {
        result += characters[Math.floor(Math.random() * charactersLength)];
        ++i;
    }
    return result;
}

export const randomString = randomID(3);
export const randomNum = Math.round(Math.random() * 100);
