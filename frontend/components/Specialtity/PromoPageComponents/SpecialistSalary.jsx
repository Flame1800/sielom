import styled from "styled-components";
import {SpecialityPageTitle} from "../speciality-page-style";


const SpecialistSalary = ({salary}) => {

    if (salary.length === 0) {
        return null
    }

    return (
        <Wrapper>
            <SpecialityPageTitle>
               Какая зарплата?
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
  margin-top: 250px;
  max-width: 1000px;
  width: 100%;
  
  .cards {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .card:nth-child(2) {
      background: #FFF4DE;
      border: none;
    }

    .card:nth-child(3) {
      background: #FFCB5E;
      filter: drop-shadow(0px 0px 22px #FFD57E);
      border: none;
    }

    .card {
      border: 1px solid #B1B1B1;
      border-radius: 26px;
      width: 250px;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      margin-bottom: 20px;

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