import React from 'react'
import Output from "editorjs-react-renderer"

const OutEditorText = ({ data }) => {
    if (!data) {
        return null
    }

    return (
        <>
            {Object.keys(data).length > 0 && (
                <Output data={data} />
            )}
        </>
    )
}

export default OutEditorText
