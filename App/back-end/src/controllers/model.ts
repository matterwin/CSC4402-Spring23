import { type Router } from 'express';

export enum HttpMethod {
  post = 'post',
  put = 'put',
  delete = 'delete',
  get = 'get',
}

export interface RouteConfig {
  path: string;
  type: HttpMethod;
}

export interface RouterConfig {
  router: Router;
  routerName: string;
  routerDetails: RouteConfig[];
}
