import { Hono } from "hono"
import { compress } from "hono/compress"
import { cors } from "hono/cors"
import calendar from "./calendar"
import parish from "./parish"
import news from "./news"
import vita from "./vita"
import reading from "./reading"
import synaxar from "./synaxar"
import images from "./images"
import privacy from "./privacy"
import support from "./support"
import monitoredVitas from "./vitaMonitoring"
import appConfigRouter from "./appConfig"
import mapData from "./mapData"

const routes = new Hono()

routes.use("*", cors())
routes.use("*", compress())

routes.route("/api/calendarv2", calendar) // delete when frontend migrate to /api/calendar

routes.route("/api/calendar", calendar)
routes.route("/api/parish", parish)
routes.route("/api/vita", vita)
routes.route("/api/news", news)
routes.route("/api/reading", reading)
routes.route("/api/synaxar", synaxar)
routes.route("/api/images", images)
routes.route("/api/privacy", privacy)
routes.route("/api/support", support)
routes.route("api/monitoring", monitoredVitas)
routes.route("/api/app-config", appConfigRouter)
routes.route("/api/map-data", mapData)

export default routes
