import { Hono } from "hono"
import { getCalendarInfo } from "../services/calendarv2.js"

const calendarv2 = new Hono()

calendarv2.get("/:date", async (c) => {
    const date = c.req.param("date")
    const calendarInfo = await getCalendarInfo(date)
    return c.json(calendarInfo)
})

export default calendarv2
