import type { Context } from 'koa';

declare module 'koa-router' {
  declare function KoaMiddleware(ctx: Context, next: Function): ?Promise<any>

  declare class Router {
    static constructor(options?: {
      prefix?: string,
    }): Router;
    static (options?: {
      prefix?: string,
    }): Router;
    delete(name: string, route: string, handler: KoaMiddleware): this;
    delete(route: string, handler: KoaMiddleware): this;
    get(name: string, route: string, handler: KoaMiddleware): this;
    get(route: string, handler: KoaMiddleware): this;
    patch(name: string, route: string, handler: KoaMiddleware): this;
    patch(route: string, handler: KoaMiddleware): this;
    post(name: string, route: string, handler: KoaMiddleware): this;
    post(route: string, handler: KoaMiddleware): this;
    prefix(prefix: string): this;
    put(name: string, route: string, handler: KoaMiddleware): this;
    put(route: string, handler: KoaMiddleware): this;
    routes(): KoaMiddleware;
    use(...middlewares: Array<KoaMiddleware>): this;
    use(path: string|string[], ...middlewares: Array<KoaMiddleware>): this;
    allowedMethods(options?: {
      throw?: bool,
      notImplemented?: Function,
      methodNotAllowed?: Function,
    }): Function;
    param(param: string, middleware: Function): this;
    redirect(source: string, destination: string, code?: number): this;
    route(name: string): any|false;
    url(name: string, params?: any): string|Error;
    url(path: string, params: Object): string;
  }
  declare var exports: Class<Router>;
}
