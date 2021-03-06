import * as compose from 'koa-compose'
import * as cors from '@koa/cors'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as helmet from 'koa-helmet'

import session from './session'
import passport from '../auth/passport'
import flash from './flash'

export default function middleware (app) {
  return compose([
    // HTTP headers secure
    helmet(),
    // request body
    bodyParser(),
    // handle cross-origin
    cors(),
    // logger
    logger(),
    // session
    session(app),

    flash()
  ])
}
