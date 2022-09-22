import React from "react";
import MainHeader from "../../UI/MainHeader";
import Link from "next/link";
import LongLink from "../../UI/LongLink";

const ReceptionCampaign = ({ posts, commission }) => {
  return (
    <Wrapper>
      <MainHeader>поступающим</MainHeader>
      <div className="commission">
        <div>
          <div className="title">Контакты приемной комисии</div>
          <div className="items">
            <div className="item">
              <div className="name">Адресс: </div>
              {commission.attributes.address}
            </div>
            <div className="item">
              <div className="name">Номера телефона: </div>
              {commission.attributes.phone}
            </div>
            <div className="item">
              <div className="name">Эл. почта:</div>
              {commission.attributes.email}
            </div>
            <div className="item">
              <div className="name">Время работы:</div>
              {commission.attributes.worktime}
            </div>
          </div>
        </div>
      </div>
      <div className="pages">
        {posts.map((post, id) => {
          return (
            <Link href={`reception-campain/info?post=${post.attributes.name}`}>
              <a>
                <LongLink>
                  {id + 1}. {post.attributes.name}
                </LongLink>
              </a>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ReceptionCampaign;
