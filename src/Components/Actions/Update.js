import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClientInput from './Inputs/ClientInput'
import TextField from '@material-ui/core/TextField';
import OwnerInput from './Inputs/OwnerInput';
import EmailInput from './Inputs/EmailInput'
import { inject } from 'mobx-react'
import './Actions.css'



@inject('ClientStore')
class Update extends Component {
    constructor() {
        super()
        this.state = {
            clientId: null,
            clientInputDisplay: false,
            clientName: null,
            ownerDisplay: false,
            ownerName: null, 
            emailDisplay: false,
            email: null

        }
    }

    getClientId = async(id) => {
     this.setState({
         clientId: id
     })
    }  
    
    update = (e) => {
        const id = this.state.clientId
        const action = e.target.name
        console.log(action)

        let value = null
        if(action === 'transfer'){
            value = this.state.ownerName
        } 
        if(action === 'send'){
            value = this.state.email
        }
        this.props.ClientStore.updateClientAction(id, action, value)
    }

    clientDisplay = () => {
        this.state.clientInputDisplay ?
            this.setState({
                clientInputDisplay: false
            }) :
            this.setState({
                clientInputDisplay: true
            })
    }

    getClientName = async (name) => {
        await this.setState({
            clientName: name
        })
        console.log(this.state)
    }

    
    ownerDisplay = () => {
        this.state.ownerDisplay ?
            this.setState({
                ownerDisplay: false
            }) :
            this.setState({
                ownerDisplay: true
            })
    }

    getOwnerName = async (name) => {
        await this.setState({
            ownerName: name
        })
        console.log(this.state)
    }

    emailDisplay = () => {
        this.state.emailDisplay ?
            this.setState({
                emailDisplay: false
            }) :
            this.setState({
                emailDisplay: true
            })
    }

    getEmail = async (val) => {
        await this.setState({
            email: val
        })
        console.log(this.state)
    }

    render() {

        return (
            <div className='component'>

                <h className='title'>  Update </h>

                <div className='actions'>

                    <div className='options client'>

                        Client:
                        <div className='space'></div>
                        <TextField id="standard-basic" placeholder='Client Name' value={this.state.clientName} onClick={this.clientDisplay} />
                        {this.state.clientInputDisplay ? <ClientInput getClientId={this.getClientId} getClientName={this.getClientName} clientDisplay={this.clientDisplay} /> : null}
                    </div>

                    <div className='options'> Transfer Ownership to:

                    <div className='space'></div>
                    <TextField id="standard-basic" placeholder='Owner Name' value={this.state.ownerName} onClick={this.ownerDisplay} className='input-line' />
                    
                    <i class="fas fa-sort-down"  onClick={this.ownerDisplay}></i>
                        {this.state.ownerDisplay ? <OwnerInput getClientName={this.getOwnerName} clientDisplay={this.ownerDisplay}/> : null}

                        <Button className='button' name='transfer' onClick={this.update}style={{
                            color: "rgb(255, 187, 0)",
                        }} >TRANSFER</Button>

                    </div>


                    <div className='options'> Send email:
                    <div className='space'></div>
                    <TextField placeholder='Email Type' value={this.state.email} className='input-line' onClick={this.emailDisplay}/>

                    <i class="fas fa-sort-down"  onClick={this.emailDisplay}></i>
                        {this.state.emailDisplay ? <EmailInput getClientName={this.getEmail} clientDisplay={this.emailDisplay} /> : null}
                        <Button className='button' name='send' onClick={this.update} style={{
                            color: "rgb(255, 187, 0)"
                        }}>SEND</Button>
                    </div>


                    <div className='options'> Declare Sale!
                    <Button className='button' name='declare' onClick={this.update} style={{
                            color: "rgb(255, 187, 0)",
                        }}>DECLARE</Button>
                    </div>

                </div>
            </div>
        )
    }
}


export default Update;


