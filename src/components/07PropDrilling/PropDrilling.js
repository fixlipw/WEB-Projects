const CompA = () => {

    const varA = "Alguma coisa"

    return (
        <div>
            <CompB varA= {varA}/>
            <CompC varA= {varA}/>
        </div>
    )
}

const CompB = ({varA}) => {
    return (
        <div>
            <h3>B: {varA}</h3>
        </div>
    )
}

const CompC = ({varA}) => {
    return (
        <div>
            <CompD varA = {varA}/>
        </div>
    )
}

const CompD = ({varA}) => {
    return (
        <div>
            <CompE varA = {varA}/>
        </div>
    )
}

const CompE = ({varA}) => {
    return (
        <div>
            <h3>E: {varA}</h3>
        </div>
    )
}

export {CompA, CompB, CompC, CompD, CompE}
