import { createReactEditorJS } from 'react-editor-js'
import Embed from '@editorjs/embed'
import List from '@editorjs/list'
import Image from '@editorjs/image'
import Header from '@editorjs/header'
import Marker from '@editorjs/marker'
import Delimiter from '@editorjs/delimiter'
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import React from 'react'
import axios from "axios";

const CustomEditor = ({ value, instanceRef, handleSave, init }) => {
    const ReactEditorJS = createReactEditorJS()

    const EDITOR_JS_TOOLS = {
        table: Table,
        warning: Warning,
        code: Code,
        linkTool: LinkTool,
        raw: Raw,
        quote: Quote,
        checklist: CheckList,
        inlineCode: InlineCode,
        simpleImage: SimpleImage,
        embed: Embed,
        marker: Marker,
        list: List,
        image: {
            class: Image,
            config: {
                uploader: {
                    uploadByFile(file){
                        const form = new FormData
                        form.append('files', file)
                        return axios.post('http://localhost:1337/upload', form).then(({data}) => {
                            const imageUrl = data[0].url

                            return {
                                success: 1,
                                file: {
                                    url: `http://localhost:1337${imageUrl}`
                                }
                            };
                        });
                    },
                }
            }
        },
        header: {
            class: Header,
            config: {
                placeholder: 'Заголовок',
                defaultLevel: 2
            },
            inlineToolbar: true
        },
        delimiter: Delimiter
    }

    return (
        <ReactEditorJS
            placeholder="Сам пост - тут будет что то интересное"
            tools={EDITOR_JS_TOOLS}
            data={value}
            ref={instanceRef}
            onChange={handleSave}
            onInitialize={init}
        />
    )
}

export default CustomEditor
