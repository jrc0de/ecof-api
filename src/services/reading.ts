import { readings } from "../repositories/reading.js"

export async function getReading(id: string) {
    const reading = await readings.getScriptureReading(id)
    return reading
}
