import { db } from "../utils/database.js"

export const synaxarVita = {
    async getVita(id) {
        const rows = await db`
                SELECT vie_b, vita_long, vita_liturgy, img
                FROM vies
                WHERE id = ${id}
            `
        return rows[0] || null
    },
}
