import styled from "styled-components";
import {SpecialityPageTitle} from "../speciality-page-style";
import {baseTheme} from "../../../styles/theme";


const MainDisciplines = ({disciplines}) => {
    return (
        <Wrapper>
            <SpecialityPageTitle>
                Основные дисциплины
            </SpecialityPageTitle>
            <div className="items">
                {disciplines.map(item =>
                    <div className="item">
                        <div>
                            <div className="marker" />
                        </div>
                        <div className="discipline">{item.name}</div>
                    </div>)}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom: 170px;
  
    .items {
      display: flex;
      flex-wrap: wrap;
      
      .item {
        display: flex;
        width: 50%;
        margin-bottom: 35px;
        
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
`

export default MainDisciplines