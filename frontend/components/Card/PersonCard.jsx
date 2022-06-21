import { CardCategoryName, CardTitle, CardWrapper } from "./cardStyle";
import styled from "styled-components";
import Link from "next/link";

const PersonCard = ({ entity }) => {
  const coverImg = entity.attributes?.photo.data
    ? `${process.env.API_URL}${entity.attributes.photo?.data?.attributes.url}`
    : "/img/photo-holder.svg";

  return (
    <CardWrapper>
      <Wrapper cover={coverImg}>
        <Link href={`/employees/${entity.id}`}>
          <a>
            <div className="photo" />
            <CardCategoryName>{entity.attributes.position}</CardCategoryName>
            <CardTitle>{entity.attributes.name}</CardTitle>
          </a>
        </Link>
        <div className="contact">
          <a href={`tel:${entity.attributes.phone}`}>
            {entity.attributes.phone}
          </a>
        </div>
        <div className="contact">
          <a href={`mailto:${entity.attributes.email}`}>
            {entity.attributes.email}
          </a>
        </div>
      </Wrapper>
    </CardWrapper>
  );
};

const Wrapper = styled.div`
  .photo {
    background: url(${({ cover }) => cover}) no-repeat;
    width: 90%;
    height: 255px;
    position: relative;
    background-size: cover;
    margin-bottom: 20px;
  }

  .contact {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #2e2a5d;
    margin-bottom: 10px !important;
  }
`;

export default PersonCard;
