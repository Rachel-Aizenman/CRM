import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UpdateClient from './UpdateClient'

import './Clients.css'
import { inject } from 'mobx-react';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "rgb(255, 187, 0)",
      color: theme.palette.common.black,
      fontWeight: "bold"
    },
    body: {
    //   fontSize: 20,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);



@inject("ClientStore")
class Client extends Component {
    constructor(){
        super()
        this.state = {
          displayStatus: false,
          name: null,
          surname: null,
          country: null
        }
    }


     displayUpdate = e => {
       e === 'exit'  ? this.setState({displayStatus: false}) : 
       this.getClientInfo(e)
    }

    getClientInfo = e => {
      const name = e.target.getAttribute('name')
      const client = this.props.ClientStore.clients.find(c => c.name.split(" ")[1] === name)

      this.setState({
        name: client.name.split(" ")[0],
        surname: client.name.split(" ")[1],
        country: client.country
      })   
      this.setState({displayStatus: true})  
    }

    render() {
      const dates = this.props.ClientStore.getDate(d => d)       
        return (
            <div>
                { this.state.displayStatus ? <UpdateClient name={this.state.name} surname={this.state.surname} country={this.state.country} displayUpdate={this.displayUpdate}/> : null}
                <TableContainer component={Paper}>
      <Table className='table' aria-label="customized table">
        <TableHead className='table-head' >
          <TableRow >
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Surname</StyledTableCell>
            <StyledTableCell align="left">Country</StyledTableCell>
            <StyledTableCell align="left">First Contact</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Sold</StyledTableCell>
            <StyledTableCell align="left" >Owner</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.ClientStore.clients.map((c, i) => (
            <StyledTableRow onClick={this.displayUpdate}>
              <StyledTableCell name={c.name.split(" ")[1]} component="th" scope="row" >
                {c.name.split(" ")[0]}
              </StyledTableCell>
              <StyledTableCell name={c.name.split(" ")[1]}component="th" scope="row" >
                {c.name.split(" ")[1]}
              </StyledTableCell>
              <StyledTableCell name={c.name.split(" ")[1]}align="left">{c.country}</StyledTableCell>
              <StyledTableCell name={c.name.split(" ")[1]}
              align="left">{dates[i]}</StyledTableCell>
              <StyledTableCell name={c.name.split(" ")[1]}align="left">{c.email}</StyledTableCell>
              <StyledTableCell name={c.name.split(" ")[1]}align="left">{c.sold ? 'true' : 'false'}</StyledTableCell>
              <StyledTableCell name={c.name.split(" ")[1]}align="left">{c.owner}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        )
    }

}




export default Client;