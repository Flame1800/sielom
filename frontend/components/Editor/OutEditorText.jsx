import React from 'react'
import OutputComponent from 'editorjs-react-renderer'

const OutEditorText = ({ data }) => {
    if (!data) {
        return null
    }

    return (
        <>
            {Object.keys(data).length > 0 && (
                <OutputComponent data={data} />
            )}
        </>
    )
}

export default OutEditorText
