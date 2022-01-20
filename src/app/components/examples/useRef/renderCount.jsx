import React, { useState, useEffect, useRef } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'


const RenderCountExample = () => {
    const renderCount = useRef(0)
    useEffect(() => renderCount.current++)

    const [otherState, setOtherState] = useState(true)
    console.log(otherState)

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count: {renderCount.current}</p>
            <button onClick={() => setOtherState(!otherState)} className='btn btn-primary'>+</button>
        </CardWrapper>
    )
}

export default RenderCountExample
