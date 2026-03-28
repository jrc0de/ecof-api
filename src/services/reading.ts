import { readings } from "../repositories/reading.js"
import { applyFrenchTypography } from "../utils/typography.js"
import type { ScriptureReading } from "../repositories/reading.js"

export async function getReading(id: string) {
    const reading = await readings.getScriptureReading(id)
    if (!reading) return null

    const result = reading.map((row: ScriptureReading) => ({
        ...row,
        book_txt: applyFrenchTypography(row.book_txt ?? ""),
        reading: applyFrenchTypography(row.reading ?? ""),
    }))

    return result
}
