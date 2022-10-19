import {TitleHeader,FotoPerfil} from './styled'

export const Header = (props) => {
    return(

        <TitleHeader>
            <FotoPerfil src={props.header.foto}></FotoPerfil>
            <p>{props.header.nome}</p>
            Insta4
        </TitleHeader>
    )
}