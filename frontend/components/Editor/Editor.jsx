import React from 'react'
import dynamic from 'next/dynamic'

let CustomEditor

if (typeof window !== 'undefined') {
    CustomEditor = dynamic(() => import('./CoreEditor'))
}

const Editor = ({ data, instanceRef, handleSave, init }) => {
    return (
        <>
                {CustomEditor && (
                    <CustomEditor value={data} instanceRef={instanceRef} handleSave={handleSave} init={init} />
                )}
        </>
    )
}


export default Editor
