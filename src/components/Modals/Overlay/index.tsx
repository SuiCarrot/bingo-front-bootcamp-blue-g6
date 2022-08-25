import React, { ReactNode } from 'react'
import './style.scss';

interface Props {
    children: ReactNode;
}

const Overlay = ({children}: Props) => {
  return (
    <section className='Overlay'>
        {children}
    </section>
  )
}

export default Overlay