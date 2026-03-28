const NBSP = "\u00A0"
const NNBSP = "\u202F"

export function applyFrenchTypography(text: string): string {
    return text
        .replace(/«\s*/g, `«${NNBSP}`)
        .replace(/\s*»/g, `${NNBSP}»`)
        .replace(/\s*([!?;])/g, `${NNBSP}$1`)
        .replace(/\s*:/g, `${NBSP}:`)
}
