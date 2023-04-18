import { appendFile } from "fs/promises";
import os from "os";

const list = ["B", "KB", "MB", "GB", "TB"];
const formatByte = (bytes: number) => {
    let i = 0;
    while (bytes >= 1000) {
        bytes = Math.round(bytes / 10) / 100;
        ++i;
    }
    return bytes + list[i];
}
const formatOS = (str: string) => {
    switch (str) {
        case "Windows_NT":
            return "Windows";
        case "Darwin":
            return "Mac";
        default:
            return "Linux";
    }
}

const desFile = process.env.DES;

// Get OS details
let str = "";
str += "## OS Details\n";

const cpus = os.cpus();
str += "- Cores: " + cpus.length + "\n";
str += "- OS: " + formatOS(os.type()) + "\n";
str += "- System memory: " + formatByte(os.totalmem()) + "\n";
str += "- Architecture: " + os.arch() + "\n";
str += "\n## Results\n";

await appendFile(desFile, str);