import React from "react";
import styled from "styled-components";
import { SpecialityPageTitle } from "../Specialties.style";
import LongLink from "../../../UI/LongLink";

const Questions = ({ questions }) => {
  const [openTape, setTape] = React.useState(null);

  if (questions.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <SpecialityPageTitle>Часто задаваемые вопросы</SpecialityPageTitle>
      <div className="questions">
        {questions.map((item, i) => (
          <div onClick={() => setTape(openTape?.id === item.id ? null : item)}>
            <LongLink
              key={i}
              answer={item.id === openTape?.id ? item.answer : null}
            >
              {item.question}
            </LongLink>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 160px;

  .questions {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .answer {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 400;
  }
`;

export default Questions;
