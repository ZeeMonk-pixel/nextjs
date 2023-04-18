import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/modules/NewsArticle'
import NewsArticleGrid from '@/components/NewsArticleGrid'
import { Alert } from 'react-bootstrap'

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () =>{
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=92ad7c6c57b94edfbe768d01c6d5c8ae`);
  const newsResponse: NewsResponse = await response.json();
  
  return{
    props: { newsArticles: newsResponse?.articles || null}
  }
}

export default function BreakingNewsPage({newsArticles}: BreakingNewsPageProps) {
  return (
    <>
    <Head>
      <title key="title">Breaking News - Nextjs News App</title>
    </Head>
      <main>
        <h1>Breaking News</h1>
        <Alert>
          This page uses <strong>getServerSideprops</strong> to fetch data server-side on every request. this allows search engines to crawl the page content and <strong>improves SEO.</strong>
        </Alert>
        <NewsArticleGrid articles={newsArticles} />
      </main>
    </>
  )
}
