import { synaxarSaints } from "../repositories/synaxar"

/**
 * Get all saints by alphabetical order
 * @returns {Promise<Object>}
 */
export async function getSaints() {
    const saints = await synaxarSaints.getSaints()
    return saints
}
