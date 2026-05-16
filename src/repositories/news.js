import { db } from "../utils/database"

export const allNews = {
    async getNews() {
        const rows = await db`
      SELECT id, title, author, slug, published_at
      FROM news
      ORDER BY published_at DESC
    `
        return rows || []
    },

    async getNewsText(id) {
        const rows = await db`
      SELECT text
      FROM news
      WHERE id = ${id}
    `
        return rows[0] ?? null
    },
}
