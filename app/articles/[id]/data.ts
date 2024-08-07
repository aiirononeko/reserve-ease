import { createClient } from '@/lib/microcms'

export const getArticle = async (articleId: string) => {
  const microcms = createClient()

  const result = await microcms.get({
    endpoint: 'articles',
    contentId: articleId,
    customRequestInit: {
      next: { tags: [`articles/${articleId}`] },
    },
  })
  return result
}
