import React from "react";
import styled from "styled-components";
import CommonMinCard from "../Card/CommonMinCard";
import _ from "lodash"

export default function MinTapePost({title, posts}) {

    return (
        <ListPosts>
            <div className="items">
            <div className='title'>{title}</div>
            {_.shuffle(posts).map((post, id) => {
                if (id < 7) {
                    return <CommonMinCard post={post} />
                }
                return null
            })}
        </div>
        </ListPosts>
    )
}

const ListPosts = styled.div`
  margin-left: 50px;
  position: sticky;
  top: 140px;
  height: 100%;
  
  
  .title {
    margin-bottom: 40px;
  }
`

