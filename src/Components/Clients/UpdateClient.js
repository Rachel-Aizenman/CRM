import React, { Component } from 'react';
import './UpdateClient.css'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { inject } from 'mobx-react';

@inject('ClientStore')
class UpdateClient extends Component {
    constructor(){
        super()
        this.state = {
            name: null,
            surname: null,
            country: null
        }
   }

   componentDidMount = () => {
    this.setState({
        name: this.props.name,
        surname: this.props.surname,
        country: this.props.country
      })
   }

    exit = () => {
        this.props.displayUpdate('exit')
    }

    handleChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
       
    }
    
    handleClick = () => {
        this.props.ClientStore.updateClient(this.props.surname, this.state)
        this.exit()
    }

    render() {
        
        return (
            <div className='pop-up'>
        <div href="#" ></div>
        <i className="fas fa-times-circle close" onClick={this.exit}></i>

<div className='categories'>
              <div className='category'> 
              
              Name: 
               <Input name='name' defaultValue={this.props.name}  className='input-update' 
                style={{
                    color: "white",
                }} onChange={this.handleChange}/>
              </div> 

               <div className='category'> 
               Surname: 
               
               <Input name='surname' defaultValue={this.props.surname} className='input-update' inputProps={{ 'aria-label': 'description' }}
                style={{
                    color: "white",
                }} onChange={this.handleChange}/>

               </div> 

               <div className='category'> 
               Country: 

               <Input name='country' defaultValue={this.props.country}  className='input-update' inputProps={{ 'aria-label': 'description' }}
                style={{
                    color: "white",
                }} onChange={this.handleChange}/>

</div>
               </div> 
                <Button variant="contained" color="secondary"
                    style={{
                        backgroundColor: "rgb(255, 187, 0)",
                        color: "black"
                    }}
                    className='update-button' onClick={this.handleClick}>
                    Update
                </Button>
            </div>
        )
    }
}

export default UpdateClient;