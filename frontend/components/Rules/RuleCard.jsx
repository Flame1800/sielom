import Link from "next/link";
import React from "react";
import moment from "moment";
import 'moment/locale/ru'
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";

export default function RuleCard({ rule }) {
    console.log(rule)

    const date = moment(rule.attributes.published_at).calendar()
    return (
        <Wrapper>
            <Link href={`/rules/${rule.id}`}>
                <a>
                    <div>
                        <div className='title'>{rule.attributes.title}</div>
                        <p className="text-md overflow-hidden max-h-24 line-clamp-4">
                            {rule.attributes.body?.blocks ? rule.attributes.body.blocks[0].data.text : ''}
                        </p>
                        <div className='info-block'>
                            <div className='info-item'>
                                <div>{date}</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: -1px;
  border: 1px solid ${baseTheme.colors.light};
  padding: 30px;
  background: #fff;
  
  p {
    margin-top: 10px;
    max-width: 600px;
  }
  
  .head {
    display: flex;
    margin-bottom: 20px;
    
    .category {
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: ${baseTheme.colors.gold};
    }
  }
  
  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.01em;
    max-width: 530px;
  }
  
  .info-block {
    display: flex;
    max-width: 530px;
    width: 100%;
    margin-top: 50px;
  }
  
  .info-item {
    display: flex;
    width: 100%;
    
    img {
      margin-right: 8px;
    }
  }
`