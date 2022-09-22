import styled from "styled-components";
import { SpecialityPageTitle } from "../Specialties.style";
import { baseTheme } from "../../../../styles/theme";

// Список который полностью изменяется в админке (промо контент)

const PromoList = ({ list, title }) => {
  if (list.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <SpecialityPageTitle>
        {title}
        <img
          src="/img/title-line.png"
          alt="line"
          width="100%"
          className="line"
        />
      </SpecialityPageTitle>
      <div className="items">
        {list.map((item) => (
          <div className="item">
            <div>
              <div className="marker" />
            </div>
            <div className="discipline">{item.name}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 200px;
  max-width: 1000px;
  width: 100%;

  .line {
    margin-top: -15px;
    margin-bottom: 45px;
    z-index: -1;
    position: relative;
    width: 100%;
  }

  .items {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .item {
      display: flex;
      width: 50%;
      margin-bottom: 35px;

      @media (max-width: 768px) {
        width: 100%;
      }

      .marker {
        margin-top: 15px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 15px;
        background: ${baseTheme.colors.gold};
      }

      .discipline {
        font-weight: 500;
        font-size: 18px;
        line-height: 45px;
        letter-spacing: -1px;
        color: #000000;
      }
    }
  }
`;

export default PromoList;
