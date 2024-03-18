const ComFilho = ({mensagem, enviarMensagemParaOPai}) => {

    return (
        <>
            <h2>Mensagem do pai: {mensagem}</h2>
            <button onClick={()=>(enviarMensagemParaOPai("Corno"))}>
                Enviar mensagem para o pai
            </button>
        </>
    )

}

export default ComFilho