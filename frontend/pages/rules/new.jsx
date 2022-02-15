import MainLayout from "../../layouts/MainLayout";

import dynamic from "next/dynamic";
import React from "react";
import router from 'next/router'
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {fetchCreateRule} from "../../redux/slices/rules";
import Editor from "../../components/Editor/Editor";
import Button from "../../components/Shared/Button";
import styled from "styled-components";



export default function NewPost() {
    const [status, setStatus] = React.useState('process')
    const [title, setTitle] = React.useState( '')
    const [body, setBody] = React.useState('')
    const [error, setError] = React.useState(false)

    const dispatch = useAppDispatch()

    const createPostHandle = async () => {
        setError(false)

        if (title && body) {
            dispatch(fetchCreateRule({ title, body }))
            setStatus('success')
        }
        else {
            setError(true)
        }
    }

        const editorJS = React.useRef(null)

    const handleSave = React.useCallback(async () => {
        const savedData = await editorJS.current.save();
        setBody(savedData)
    }, [])

    const handleInitialize = React.useCallback((instance) => {
        editorJS.current = instance
    }, [])

    const successBlock = (
            <Success>
                Статья опубликованна!
            </Success>
    )

    return (
        <MainLayout>
                    <Title>
                        Новый регламент
                    </Title>
                    <div>
                        {status === 'process' ? <>
                            {error && <Error>Заполните заголовок и саму статью прежде чем опубликовать!</Error>}
                            <Textarea
                                placeholder="Заголовок - Начите писать здесь"
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                            />
                            <EditorWrapper>
                                <Editor data={body} instanceRef={editorJS} handleSave={handleSave} init={handleInitialize} />
                            </EditorWrapper>
                        </> : successBlock}

                        {status !== 'success' &&
                        <div onClick={() => createPostHandle()} >
                            <Button>Опубликовать</Button>
                        </div>}
                    </div>
F        </MainLayout>
    )
}

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -1px;
  margin-top: -10px;
  margin-bottom: 40px;
  color: #3E3E3E;
`

const Textarea = styled.textarea`
  border: none;
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #3E3E3E;
  outline: none;
  
  &::placeholder {
    color: #3E3E3E;
  }
`

const Error = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  color: red;
`

const Success = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  color: green;
  font-weight: 500;
`

const EditorWrapper = styled.div`
  margin-left: -80px;
`