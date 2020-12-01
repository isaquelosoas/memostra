import React from 'react'

export default class ProfileNav extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            hidden:true
        }
    }
    mudaClasse = () =>{
        this.setState({hidden:!this.state.hidden})
    }
    hiddenTrue = () =>{
        this.setState({hidden:true})
    }
    hiddenFalse = () =>{
        this.setState({hidden:false})
    }

    render(){
        const{hidden} = this.state
        return(<nav className={hidden? 'hidden':'shown'}  onMouseLeave={this.hiddenTrue} onMouseOver={this.hiddenFalse}>                   
            <div><button className='profile' onClick={this.mudaClasse}></button><a>Isaque Lopes</a></div>
            <ul>
                <li>oi</li>
                <li>tudo</li>
                <li>bem?</li>
            </ul>
        </nav>
        
        )
    }
}