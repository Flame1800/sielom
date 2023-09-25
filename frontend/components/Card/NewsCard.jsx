import Link from "next/link";
import moment from "moment";
import {
  CardCategoryName,
  CardCover,
  CardParamsBlock,
  CardTitle,
  CardWrapper,
} from "./cardStyle";
import CardPlaceParameter from "./CardPlaceParameter";
import CardDateParameter from "./CardDateParameter";
import normalizeDate from "../../helpers/normalizeDate";

const NewsCard = ({ post }) => {
  const date = normalizeDate(post.attributes.date ?? post.attributes.createdAt);
  const coverImg = post.attributes.cover.data
    ? `${process.env.API_URL}${post.attributes.cover?.data?.attributes.url}`
    : false;


  return (
    <CardWrapper>
      <Link href={`/news/${post.id}`}>
        <a>
          <CardCover cover={coverImg} />
          <CardCategoryName>
            {post.attributes.type ? "мероприятие" : "новость"}
          </CardCategoryName>
          <CardTitle>{post.attributes.title}</CardTitle>
          <CardParamsBlock>
            {<CardDateParameter date={date} />}
          </CardParamsBlock>
        </a>
      </Link>
    </CardWrapper>
  );
};

export default NewsCard;
