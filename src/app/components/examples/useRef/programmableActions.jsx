import React, { useRef } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'


const ProgrammableActionsExample = () => {
    const inpRef = useRef()

    return (
        <CardWrapper>
            <SmallTitle className='card-title'>Программируемые действия и свойства</SmallTitle>
            <Divider />
            <label htmlFor="email" className='form-label'>Email</label>
            <input ref={inpRef} type='email' id='email' className='form-control' />
            <button onClick={() => inpRef.current.focus()} className='btn btn-primary'>Focus</button>
            <button onClick={() => inpRef.current.style.width = '200px'} className='btn btn-warning m-2'>Down width</button>
        </CardWrapper>
    )
}

export default ProgrammableActionsExample
