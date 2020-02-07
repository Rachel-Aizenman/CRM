import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
// import { inject } from 'mobx-react';


import './Actions.css'



// const useStyles = makeStyles(theme => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

  export default function Update(props) {
    // const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //   setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);
  
    const handleChange = event => {
      setAge(event.target.value);
    };
  
    const allOwners = props.clients.map(c => c.owner)
    let filteredOwners = [...new Set(allOwners)];
    const ownerList = filteredOwners.map(o => <MenuItem>{o}</MenuItem>)
    const emailList = props.clients.map(c => c.emailType)
    const filteredEmails = [...new Set(emailList)]
    const email = filteredEmails.map(e => <MenuItem>{e}</MenuItem>)

        return (
            <div className='component'>

                <h className='title'>  Update </h>

                <div className='actions'>

                    <div className='options client'>

                        Client:
                    <Input placeholder="Client's Name"
                            className='input' />
                    </div>

                    <div className='options'> Transfer Ownership to:
    
                    <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            value={age}
                            onChange={'handleChange'}
                            displayEmpty
                            className={'classes.selectEmpty'}
                        >
                            <ul>{ownerList}</ul>
                        </Select>
                        <Button className='button' style={{
                            color: "rgb(255, 187, 0)",
                        }}>TRANSFER</Button>

                    </div>


                    <div className='options'> Send email:
    
                <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                         {emailList}
                        </Select>
                        <Button className='button' style={{
                            color: "rgb(255, 187, 0)"
                        }}>SEND</Button>
                    </div>


                    <div className='options'> Declare Sale!
                    <Button className='button' style={{
                            color: "rgb(255, 187, 0)",
                        }}>DECLARE</Button>
                    </div>

                </div>
            </div>
        )
    }





