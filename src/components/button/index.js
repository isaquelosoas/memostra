import React from 'react'

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {classe, acao, texto} = this.props
        return(        
            <button className={classe} onClick={acao}>{texto}</button> 
        )
    }

}