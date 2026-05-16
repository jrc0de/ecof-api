import { Hono } from "hono"
import { getNews, getNewsText } from "../services/news.js"

const news = new Hono()

news.get("/", async (c) => {
    const article = await getNews()
    return c.json(article)
})

news.get("/:id/text", async (c) => {
    const id = c.req.param("id")
    const result = await getNewsText(id)

    if (!result) {
        return c.json({ error: "News not found" }, 404)
    }

    return c.json(result)
})

export default news
