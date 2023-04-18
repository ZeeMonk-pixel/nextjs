// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewsResponse } from '@/modules/NewsArticle';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();
  if (!searchQuery){
    return res.status(400).json({error: "Please provide a search query"})
  }
  const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=92ad7c6c57b94edfbe768d01c6d5c8ae`);
  const newsResponse: NewsResponse = await response.json();

  res.status(200).json(newsResponse.articles)
}
