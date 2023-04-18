import { NewsArticle } from "@/modules/NewsArticle";
import Image from "next/image";
import { Card } from "react-bootstrap";
import newsImage from "@/assets/images/newsImage.jpg";
import styles from '@/styles/Home.module.css'

interface NewsArticleEntryProps {
  article: NewsArticle;
}

export default function NewsArticleEntry({
  article: { title, description, url, urlToImage },
}: NewsArticleEntryProps) {
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : undefined;

  return (
    <a href={url}>
      <Card className="h-100">
        <Image
          src={validImageUrl || newsImage}
          width={500}
          height={200}
          alt="News article image"
          className={`card-img-top ${styles.image}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}
