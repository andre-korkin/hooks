import React, { useState, useEffect, useRef } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'


const PrevStateExample = () => {
    const [currentState, setCurrentState] = useState('COOL')
    console.log(currentState)
    
    const prevState = useRef('')
    useEffect(() => prevState.current = currentState, [currentState])

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Предыдущее состояние: {prevState.current}</p>
            <p>Текущее состояние: {currentState}</p>
            <button onClick={toggleState} className='btn btn-primary'>#</button>
        </CardWrapper>
    )


    function toggleState () {
        setCurrentState(currentState === 'COOL' ? 'not COOL' : 'COOL')
    }
}

export default PrevStateExample
