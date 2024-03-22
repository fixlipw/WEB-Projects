import React from 'react'
import Luffy from '../assets/luffy.jpg'
import Kaido from '../assets/kaido.jpg'

const Hero = ({name}) => {
    return (
        <div className='img'>
            <h2>{name}</h2>
            <img src={Luffy} alt="Heroi" />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={Kaido} alt="Inimigo" />
        </div>
    )
}

// Arena normal
const Arena = () => {
    return(
        <div>
            <h1>Topo de Onigashima</h1>
            <Hero name="Luffy"/>
            <br/>
            <Enemy name="Kaido"/>
        </div>
    )
}

// Arena com React.Children
// const Arena = ({arena, children}) => {
//     return (
//         <div>
//             <h1>{arena}</h1>
//             {React.Children.map(children, (child) =>
//                 React.cloneElement(child, { arena: arena })
//             )}
//         </div>
//     )
// }

const World = ({children}) => {
    return <div>{children}</div>
}

export { Hero, Enemy, Arena, World }