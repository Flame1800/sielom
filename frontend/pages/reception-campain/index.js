import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import NewsPost from "../news/[id]";
import axios from "axios";
import Link from "next/link";
import {} from "../../styles/homeStyle";
import MainHeader from "../../components/Shared/MainHeader";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import LongLink from "../../components/Shared/LongLink";


const ReceptionCampain = ({ posts, commission }) => {

    console.log(commission)
    return (
        <MainLayout>
            <Wrapper>
                <MainHeader>поступающим</MainHeader>
                <div className="commission">
                    <div className='item'>
                        <div className="name">Адресс: </div>
                        {commission.attributes.address}
                    </div>
                    <div className='item'>
                        <div className="name">Номера телефона: </div>
                        {commission.attributes.phone}
                    </div>
                    <div className='item'>
                        <div className="name">Эл. почта:</div>
                        {commission.attributes.email}
                    </div>
                    <div className='item'>
                        <div className="name">Время работы:</div>
                        {commission.attributes.worktime}
                    </div>
                </div>
                <div className="pages">
                    {posts.map((post, id) => {
                        return (
                            <Link href={`reception-campain/${post.id}`}>
                                <a>
                                    <LongLink>
                                        {id + 1}. {post.attributes.name}
                                    </LongLink>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </Wrapper>
        </MainLayout>
    )
}



ReceptionCampain.getInitialProps = async ctx => {
    const posts = await API.getReceptionCampainPages()
    const commission = await API.getCommissonPage()
    return { posts: posts.data.data, commission: commission.data.data  }
}


const Wrapper = styled.div`
    .commission {
      border-bottom: 1px solid #3e3e3e;
      margin-bottom: 100px;
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      
      .item {
        margin-bottom: 40px;
        max-width: 400px;
        
        .name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
          color: ${baseTheme.colors.light};
        }
      }
    }
    
  .pages {
    max-width: 800px;
    margin-bottom: 100px;
  }
`


export default ReceptionCampain