import React, { Component } from 'react';
import './Actions.css'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';



class Actions extends Component {
    constructor(){
        super()
        this.state = {
            firstName: null,
            surname: null,
            country: null, 
            owner: null
        }
    }

    handleChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
       console.log(this.state)
    }

    

    render() {
        return (
            
            <div className='component'>
            <h className='title'> Add Client </h>
            <div className='actions'>
            <div className='options'  onChange={this.handleChange}>
                First Name:
                <Input name='firstName'></Input>
            </div>
            <div className='options' onChange={this.handleChange}>
                Surname:
                <Input name='surname'></Input>
            </div>
            <div className='options' onChange={this.handleChange}>
                Country:
                <Input name='country'></Input>
            </div>
            <div className='options' onChange={this.handleChange}>
                Owner:
                <Input name='owner'></Input>
            </div>
            </div>
            <Button variant="contained" color="secondary"
                    style={{
                        backgroundColor: "rgb(255, 187, 0)",
                        color: "black"
                    }}
                    className='update-button' onClick={this.handleClick}>
                    Add New Client
                </Button>

            </div>
        )
    }

}




export default Actions;