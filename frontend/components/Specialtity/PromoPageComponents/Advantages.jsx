import styled from "styled-components";
import {SpecialityPageTitle} from "../speciality-page-style";

const cardsAdvantages = [
    {
        title: "Совеременный подход и технологии",
        caption: "В отличии от многих образовательных учережжений мы используем современный и э" +
            "ффективный подход к обучению, обучаем технологиям которые востребованны на рынке и просты в использовании"
    },
    {
        title: "Диплом государственного образца",
        caption: "В отличии от большинства курсов, по окончанию обучения мы выдаем диплом государственного образца. " +
            "Наше образовательное учереждение акредитованно... и.т.д"
    },
    {
        title: "Много практики, алгоритмическое решение, портфолию",
        caption: "По выходу из института у вас будет не только знание языков программирования, " +
            "а также понимание и алгоритмическое мышление. А так же проекты приближенные к коммерческим решениям"
    },
]

const Advantages = () => {
    return (
        <Wrapper>
            <SpecialityPageTitle>
                Преимущества <br /> обучения у нас
            </SpecialityPageTitle>
            <div className="cards">
                {cardsAdvantages.map((item, id) =>
                    <div className="card" key={id}>
                            <div className="num">{id + 1}</div>
                            <div className="title">{item.title}</div>
                            <div className="caption">{item.caption}</div>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  .cards {
    width: 100%;
    margin-bottom: 30px;
    
    .card:nth-child(2) {
      background: linear-gradient(180deg, #FFAAC4 0%, #CFCBFF 100%);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .card:nth-child(3) {
      background: linear-gradient(180deg, #B1AAFF 0%, #B4F6FF 100%);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .card {
      margin-bottom: -20px;
      min-height: 272px;
      border-radius: 40px;
      background: linear-gradient(180deg, #FFE3AA 0%, #FFB7B7 100%);
      display: flex;
      justify-content: space-between;
      padding: 40px;
      
      .num {
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 60px;
        color: #000000;
        opacity: 0.6;
      }
      
      .title {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 37px;
        color: #000000;
        width: 40%;
      }
      
      .caption {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 31px;
        color: #000000;
        width: 50%;
      }
    }
  }
`

export default Advantages
