import { db } from "../utils/pg_database"

export const vitaMonitoring = {
    async getSaintsWithBioStatus() {
        return await db`
            SELECT 
                saint, id,
                v_short IS NOT NULL AND v_short != '' as has_v_short,
                v_long IS NOT NULL AND v_long != '' as has_v_long,
                v_liturgy IS NOT NULL AND v_liturgy != '' as has_v_liturgy
            FROM synaxar
            WHERE calendrier = 1
            ORDER BY saint ASC
        `
    },
}
