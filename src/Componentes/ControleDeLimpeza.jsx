import { Button, DivCardMaior, DivImg, DivPrincipal, H1, Img, Input, InputComentario, Label } from "../Style/ControleDeLimpeza"
import Img1 from '../../Image/carrinho-limpeza.png'

const App1 = () => {
    return(
        <DivPrincipal>
            <DivCardMaior>
                <H1>Controle de Limpeza</H1>
                <Input type="text" placeholder="Nome"/>
                <Input type="text" placeholder="Horário da limpeza"/>
                <Input type="text" placeholder="Número da sala"/>
                <Input type="text" placeholder="Data"/>
                <Label>Deixe aqui seu comentário</Label>
                <InputComentario type="text"/>
                <Button>Enviar</Button>
            </DivCardMaior>
            <DivImg>
                <Img src={Img1}/>
            </DivImg>
        </DivPrincipal>
    )
}

export default App1;