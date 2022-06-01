import React from 'react';
import {API} from "../../libs/API";
import Specialties from "./index";
import MainLayout from "../../layouts/MainLayout";
import styled from "styled-components";
import ArrowButton from "../../components/Common/ArrowButton";

const Employer = ({employer}) => {
    const coverImg = employer.attributes?.photo.data
        ? `${process.env.API_URL}${employer.attributes.photo?.data?.attributes.url}`
        : "/img/photo-holder.svg"

    return (
        <MainLayout>
            <Wrapper cover={coverImg}>
                <ArrowButton back>назад</ArrowButton>
                <div className="header">
                    <div className="portrait"/>
                    <div className="info">
                        <div className="naming">
                            <div className="name">{employer.attributes.name}</div>
                            <div className="position">{employer.attributes.position}</div>
                        </div>
                        <div className="contacts">
                            <div className="item">
                                <div className="caption">Телефон</div>
                                <div className="value">{employer.attributes.phone}</div>
                            </div>
                            <div className="item">
                                <div className="caption">Почта</div>
                                <div className="value">{employer.attributes.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div dangerouslySetInnerHTML={{ __html: employer.attributes.biography }}></div>
                </div>
            </Wrapper>
        </MainLayout>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  .header {
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .name {
      font-size: 26px;
      font-weight: 700;
      max-width: 300px;
      margin-top: 10px;
    }

    .position {
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .contacts {
      display: flex;
      flex-wrap: wrap;

      .item {
        margin-right: 50px;

        .caption {
          color: #8c8c8c;
          font-weight: 500;
          font-size: 15px;
          margin-bottom: 5px;
        }

        .value {
          color: #3E3E3E;
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
        }
      }
    }

    .portrait {
      height: 300px;
      width: 280px;
      border-radius: 50% 50% 0 0;
      background: url(${({cover}) => cover}) no-repeat;
      background-size: cover;
      margin-right: 30px;
    }
  }

  .body {
    max-width: 800px;
    font-size: 18px;
    margin-top: 56px;
    line-height: 28px;
  }
`

Employer.getInitialProps = async (ctx) => {
    const { data } = await API.getEmployer(ctx.query.id)
    return { employer: data.data }
}

export default Employer;