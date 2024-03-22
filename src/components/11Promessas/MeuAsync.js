import {useEffect, useState} from "react";

const MinhaPromessa = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const myNum = Math.floor(Math.random() * 10) + 1

                if (myNum % 2 === 0) resolve("Yes, seu número é " + myNum)
                else reject("Nope, seu número é " + myNum)

            }, 5000
        )
    }
)

const ComponentePromessa = () => {

    const [resultado, setResultado] = useState()

    async function apiGetPromessa() {
        try {
            const result = await MinhaPromessa
            setResultado(result)
        } catch (error) {
            setResultado(error)
        }
    }

    useEffect(() => {
        apiGetPromessa()
    }, []);

    return (
        <>
            <h3>Promessa!</h3>
            <h4>Resultado: {resultado}</h4>
        </>
    )
}

export default ComponentePromessa