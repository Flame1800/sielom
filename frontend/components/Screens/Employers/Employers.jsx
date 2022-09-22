import React from "react";
import { SidebarLinks } from "../../../styles/sharedStyle";
import PersonCard from "../../Card/PersonCard";
import MainHeader from "../../UI/MainHeader";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
const list = ["Руководство", "Сотрудники", "Педагоги"];

const Employers = ({ employers }) => {
  const router = useRouter();
  const [currentPost, setCurrentPost] = React.useState(list[0]);

  const selectPost = (category) => {
    router.push(`${router.pathname}/?category=${category}`, undefined);
    setCurrentPost(category);
  };

  return (
    <>
      <MainHeader>Персонал</MainHeader>
      <Wrapper>
        <SidebarLinks>
          {list.map((item, id) => (
            <a
              key={id}
              onClick={() => selectPost(item)}
              className={item === currentPost ? "active" : ""}
            >
              {item}
            </a>
          ))}
          <Link href="/attestation">
            <a>Аттестация педагогов</a>
          </Link>
        </SidebarLinks>
        <div className="items">
          <Content>
            {employers.map((item) => (
              <PersonCard key={item.id} entity={item} />
            ))}
          </Content>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  .items {
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: 30px;
`;

export default Employers;
