import styled from "styled-components";


const Technologies = ({technologies}) => {

    if (technologies.length === 0) {
        return null;
    }

    return (
        <Wrapper>
            <div className="title">Технологии которые вы изучите</div>
            <div className="items">
                {technologies.map(item =>
                    <div className='item'>
                        {/*<img*/}
                        {/*    src={process.env.API_URL + item.icon.data.attributes.url}*/}
                        {/*    alt='logo'*/}
                        {/*    className='logo'*/}
                        {/*/>*/}
                        <div className="name">{item.name}</div>

                    </div>)}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #000000;

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 45px;
    letter-spacing: -1px;
    color: #7c7c7c;
    padding-bottom: 5px;
    border-bottom: 1px solid #BDBDBD;
    margin-bottom: 30px;
  }

  .items {
    display: flex;
    flex-wrap: wrap;

    .item {
      display: flex;

      img {
        margin-right: 10px;
      }

      .name {
        font-weight: 500;
        font-size: 18px;
        line-height: 36px;
        font-feature-settings: 'liga' off;
        color: #000000;
        margin-right: 30px;
      }
    }
  }

`

export default Technologies