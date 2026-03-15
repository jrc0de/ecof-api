import { marked } from "marked"

marked.setOptions({
    gfm: true,
    breaks: false,
})

export function parseMarkdown(text: string | null): string | null {
    if (!text) return null
    return marked(text) as string
}
