import React from "react";
import styled from "styled-components";


const PostCover = ({ entity }) => {
    return (
        <Wrapper>
            {entity.attributes.cover.data && <div className="flex w-full">
                <img
                    src={`${process.env.API_URL}${entity.attributes.cover.data.attributes.url}`}
                    alt={'Не удалось заргуить изображение'}
                    width={"100%"}
                    className="max-w-full h-96 rounded-xl my-4 mr-8" />
            </div>}
        </Wrapper>
    )
}

export default  PostCover

const Wrapper = styled.div`
  margin-bottom: 40px;
  
  img {
    border-radius: 5px;
  }
`

