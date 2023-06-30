import Link from "next/link";
import styled from "styled-components";
import Tag from "../../../UI/Tag";

const SpecCard = ({ entity }) => {
  const { attributes } = entity;
  const img = attributes.cover.data
    ? process.env.API_URL + attributes.cover.data[0].attributes.url
    : null;
  const isCourse = attributes.education_type === "courses";

  return (
    <Wrapper imgUrl={img}>
      <div className="white"></div>
      <Link href={`/specialties/${entity.id}`}>
        <a className="container">
          <div className="info">
            <div
              className={isCourse ? "title-card title-card_small" : "title-card"}
            >
              {attributes.name}
            </div>
            {isCourse ? (
              <div className="time">{attributes.time} ч</div>
            ) : (
              <div className="tags">
                {attributes.durations.find((item) => item.class === "nine") && (
                  <Tag>9 классов</Tag>
                )}
                {attributes.durations.find(
                  (item) => item.class === "eleven"
                ) && <Tag>11 классов</Tag>}
                {attributes.durations.find(
                  (item) => item.education_form === "full_time"
                ) && <Tag>очно</Tag>}
                {attributes.durations.find(
                  (item) => item.education_form === "distant"
                ) && <Tag>заочно</Tag>}
                {attributes.durations.find(
                  (item) => item.education_form === "part_time"
                ) && <Tag>очно-заочно</Tag>}
              </div>
            )}
          </div>
          <img
            src={img ? img : "/img/placeholder.png"}
            className="cover"
            alt="Фото специальности"
          />
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 620px;
  margin: 20px 20px;
  background-size: cover;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.57);

  .white {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid;
    background: url(${props => props.imgUrl}) no-repeat;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
  }

  .container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      flex-wrap: wrap;
    }
  }

  .info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media (max-width: 768px) {
      width: auto;
    }

    .time {
      margin-left: 10px;
      margin-bottom: 20px;
      font-weight: 700;
      color: #7e7e7e;
      font-size: 20px;
    }

    .title-card {
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.5px;
      margin-bottom: 20px;

      &_small {
        font-size: 17px;
        line-height: 22px;
      }
    }
  }

  .placeholder-cover {
    width: 50%;
    min-width: 300px;
    height: 265px;
    object-fit: cover;
    border: 20px solid #fff;
    background: #e2e2e2;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cover {
    width: 50%;
    min-width: 300px;
    height: 265px;
    padding: 20px;
    object-fit: cover;
    border-radius: 35px;

    @media (max-width: 768px) {
      margin-top: 40px;
      width: 100%;
      padding: 0;
      border-radius: 15px;
    }
  }
`;

export default SpecCard;
