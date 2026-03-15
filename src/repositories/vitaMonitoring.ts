import { db } from "../utils/database"

export const vitaMonitoring = {
    async getSaintsWithBioStatus() {
        return await db`
            SELECT 
                s.saint,
                v.vita_liturgy IS NOT NULL AND v.vita_liturgy != '' as has_biography
            FROM synaxaire s
            LEFT JOIN vies v ON s.vies_id = v.id
            WHERE s.calendrier = 1
            ORDER BY s.saint ASC
        `
    },
}
