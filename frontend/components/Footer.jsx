import styled from "styled-components";

const Footer = () => {
    return (
    <Wrapper>
        {/*Yandex.Metrika informer*/}
        <a href="https://metrika.yandex.ru/stat/?id=52013204&amp;from=informer" target="_blank" rel="no
        follow">
            <img src="https://informer.yandex.ru/informer/52013204/3_0_FFFFFFFF_EFEFEFFF_0_pageviews" style={{ width:'88px', height: '31px', border: '0' }} alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="52013204" data-lang="ru" />
        </a>
        {/* /Yandex.Metrika informer*/}

        <div className="item">
            © Сургутский институт экономики, управления и права. 2022
        </div>
        <div className="contacts">
            <a href="tel:+7 (3462) 55-09-18" className="phone">+7 (3462) 55-09-18</a>
            <a href="mailto:sielom@yandex.ru" className="email">sielom@yandex.ru</a>
        </div>
    </Wrapper>
    );
};

export const Wrapper = styled.div`
  border-top: 1px solid #b4b4b4;
  width: 100%;
  max-width: 1320px;
  margin: -1px auto;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    margin-top: 10px;
    color: #3E3E3E;
  }

    .contacts {
      display: flex;
      flex-direction: column;
      .phone {
        font-weight: bold;
        font-size: 14px;
        line-height: 15px;
        margin-bottom: 15px;
        color: #3E3E3E;
      }
      
      .email {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #3E3E3E;
      }
    }

`

export default Footer




