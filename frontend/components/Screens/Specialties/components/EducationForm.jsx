import Tag from "../../../UI/Tag";
import styled from "styled-components";

const EducationForm = ({ durations }) => {
  const fullTime = durations.filter(
    (item) => item.education_form === "full_time"
  );
  const distant = durations.filter((item) => item.education_form === "distant");
  const partTime = durations.filter(
    (item) => item.education_form === "part_time"
  );

  const mapClass = (classItem) =>
    `На базе ${classItem === "nine" ? 9 : 11} классов`;

  return (
    <Wrapper>
      <div className="content">
        {fullTime.length > 0 && (
          <div className="param">
            <div className="form">Очно</div>
            <div className="items">
              {fullTime.map((item) => (
                <div className="item">
                  <div className="class">{mapClass(item.class)}:</div>
                  <Tag>{item.duration}</Tag>
                </div>
              ))}
            </div>
          </div>
        )}
        {distant.length > 0 && (
          <div className="param">
            <div className="form">Заочно</div>
            <div className="items">
              {distant.map((item) => (
                <div className="item">
                  <div className="class">{mapClass(item.class)}:</div>
                  <Tag>{item.duration}</Tag>
                </div>
              ))}
            </div>
          </div>
        )}
        {partTime.length > 0 && (
          <div className="param">
            <div className="form">Очно-заочно</div>
            <div className="items">
              {partTime.map((item) => (
                <div className="item">
                  <div className="class">{mapClass(item.class)}:</div>
                  <Tag>{item.duration}</Tag>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;

  .content {
    margin-bottom: 60px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .param {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
  }

  .form {
    font-weight: 600;
    font-size: 24px;
    line-height: 11px;
    letter-spacing: -0.25px;
    color: #b1b1b1;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 15px;

    .class {
      margin-right: 20px;
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 14px;
      line-height: 11px;
      letter-spacing: -0.25px;
      white-space: nowrap;
    }
  }
`;

export default EducationForm;
