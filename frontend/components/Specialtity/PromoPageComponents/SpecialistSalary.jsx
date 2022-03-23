import styled from "styled-components";
import {SpecialityPageTitle} from "../speciality-page-style";


const SpecialistSalary = ({salary}) => {
    return (
        <Wrapper>
            <SpecialityPageTitle>
                Сколько может получать программист
            </SpecialityPageTitle>
            <div className="cards">
                {salary.map(item =>
                    <div className="card">
                        <div>
                            <div className="value">{item.value}</div>
                            <div className="caption">{item.description}</div>
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-bottom: 200px;
  
  .cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .card:nth-child(2) {
      background: #FFE5AE;
    }

    .card:nth-child(3) {
      background: #FFD273;
    }

    .card {
      background: #FFF4DD;
      border-radius: 26px;
      width: 250px;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

      .value {
        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        letter-spacing: -1px;
        color: #3D3D3D;
      }

      .caption {
        margin-top: 10px;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -1px;
        color: #616161;

      }
    }
  }
`

export default SpecialistSalary