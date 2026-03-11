import { marked } from "marked"

// Configure une seule fois pour toute l'app
marked.setOptions({
    gfm: true, // GitHub Flavored Markdown (tables, strikethrough…)
    breaks: true, // \n → <br>
})

export function parseMarkdown(text: string | null): string | null {
    if (!text) return null
    return marked(text) as string
}
