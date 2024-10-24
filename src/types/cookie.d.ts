declare module 'cookie' {
    interface CookieParseOptions {
        decode?(value: string): string;
    }

    function parse(cookie: string, options?: CookieParseOptions): { [key: string]: string };
    function serialize(name: string, value: string, options?: CookieParseOptions): string;

    export { parse, serialize };
}
