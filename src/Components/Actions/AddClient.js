import React, { Component } from 'react';
import './Actions.css'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { inject } from 'mobx-react';

@inject('ClientStore')
class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            firstName: null,
            surname: null,
            country: null,
            owner: null
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = async () => {
        const client = {
            firstName: this.state.firstName,
            surname: this.state.surname,
            country: this.state.country,
            owner: this.state.owner
        }
        await this.props.ClientStore.addClient(client)
        this.setState({
            firstName: null,
            surname: null,
            country: null,
            owner: null
        })

    }


    render() {
        return (

            <div className='component'>
                <h className='title'> Add Client </h>
                <div className='actions'>
                    <div className='options' onChange={this.handleChange}>
                        First Name:
                <Input value={this.state.firstName} name='firstName'></Input>
                    </div>
                    <div className='options' onChange={this.handleChange}>
                        Surname:
                <Input value={this.state.surname} name='surname'></Input>
                    </div>
                    <div className='options' onChange={this.handleChange}>
                        Country:
                <Input value={this.state.country} name='country'></Input>
                    </div>
                    <div className='options' onChange={this.handleChange}>
                        Owner:
                <Input value={this.state.owner} name='owner'></Input>
                    </div>
                </div>
                <Link to='/clients'>
                    <Button variant="contained" color="secondary"
                        style={{
                            backgroundColor: "rgb(255, 187, 0)",
                            color: "black"
                        }}
                        className='update-button' onClick={this.handleClick}>
                        Add New Client
                </Button>
                </Link>

            </div>
        )
    }

}




export default AddClient;