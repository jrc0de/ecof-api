import { allNews } from "../repositories/news"

export async function getNews() {
    const news = await allNews.getNews()
    return news
}

export async function getNewsText(id) {
    const result = await allNews.getNewsText(id)
    return result
}
