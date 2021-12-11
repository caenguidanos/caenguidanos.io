import path from "path";

export function resolve(...args: string[]): string {
   return path.resolve(process.cwd(), ...args);
}
