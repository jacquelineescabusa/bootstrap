import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Button,ButtonGroup,
    Form,FormGroup,ControlLabel,FormControl,
    HelpBlock,Checkbox,Radio,Grid,Row,Col
        } from 'react-bootstrap';

class App extends Component {
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    lastname:"",
    pet:[],
    status:"",
    
  };
  
  onChange = (fieldName)=>{
    return(event)=>{
      var state=this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf(event.target.value)>=0)
    targetArray.splice(
      targetArray.indexOf(event.target.value),1
    );
    else
    targetArray.push(event.target.value);
    var state = this.state;
    state[fieldName]=targetArray;
    this.setState(state);
  }
};


  
  render() {
    return (
      <div className="container">
        <div className="page-header">    
          <h2>Student Survey!!!</h2>
        </div>
        <p className="jumbotron">
        
        <Grid>
        <Row>
          <Col md={6}>
        
        <Form>
        <FormGroup>
        <ControlLabel> Name please....</ControlLabel>
        <FormControl type="text"
                       placeholder="Name here..."
                       value={this.state.name}
                       onChange={this.onChange('name')}
                       />
        <HelpBlock>use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel> Choose Favorite Color</ControlLabel>
        <FormControl componentClass="select" 
                      placeholder="Name here..."
                      value={this.state.color}
                       onChange={this.onChange('color')} >                  
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
        
        </FormControl>
        <HelpBlock>use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Movie</ControlLabel>
        <Checkbox value="Harry Potter"
       checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}  
                  onChange={this.checkboxChange('movies')}>
                  Harry Potter
        </Checkbox>        
        <Checkbox value="Vampire Diaries"
        checked={this.state.movies.indexOf('Vampire Diaries')>=0 ? true:false}  
                  onChange={this.checkboxChange('movies')}>
                   Vampire Diaries
         </Checkbox>     
        <Checkbox value = "GOT"
        checked={this.state.movies.indexOf('GOT')>=0 ? true:false}  
                  onChange={this.checkboxChange('movies')}>
                 GOT
         </Checkbox>            
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Gender </ControlLabel>
        <Radio name="gender" value="male"
        onChange={this.onChange('gender')}> Male </Radio>
         <Radio name="gender" value="female"
        onChange={this.onChange('gender')}> Female </Radio>
        </FormGroup>
        
        
        <FormGroup>
        <ControlLabel> Last Name please....</ControlLabel>
        <FormControl type="text"
                       placeholder="Last Name here..."
                       value={this.state.lastname}
                       onChange={this.onChange('lastname')}
                       />
        <HelpBlock>use to identify you</HelpBlock>
        </FormGroup>
         <FormGroup>
        <ControlLabel>Favorite Pet</ControlLabel>
        <Checkbox value="Dog"
       checked={this.state.pet.indexOf('Dog')>=0 ? true:false}  
                  onChange={this.checkboxChange('pet')}>
                  Dog
        </Checkbox>        
        <Checkbox value="Cat"
        checked={this.state.pet.indexOf('Cat')>=0 ? true:false}  
                  onChange={this.checkboxChange('pet')}>
                   Cat
         </Checkbox>     
        <Checkbox value = "Rabbit"
        checked={this.state.pet.indexOf('Rabbit')>=0 ? true:false}  
                  onChange={this.checkboxChange('pet')}>
                 Rabbit
         </Checkbox> 
            <Checkbox value = "Fish"
        checked={this.state.pet.indexOf('Fish')>=0 ? true:false}  
                  onChange={this.checkboxChange('pet')}>
                 Fish
         </Checkbox>         
        </FormGroup>
         <FormGroup>
        <ControlLabel>Status </ControlLabel>
        <Radio name="status" value="Single"
        onChange={this.onChange('status')}> Single </Radio>
         <Radio name="status" value="Married"
        onChange={this.onChange('status')}> Married </Radio>
         <Radio name="status" value="Complicated"
        onChange={this.onChange('status')}> Complicated </Radio>
        </FormGroup>
      
       
         <ButtonGroup>
          <Button bsStyle="info"><span className="glyphicon glyphicon-camera"></span>  Photography  </Button>        
           <Button bsStyle="primary"><span className="glyphicon glyphicon-headphones"></span> Music </Button>
           <Button bsStyle="warning"><span className="glyphicon glyphicon-certificate"></span> Sunset </Button>
           <Button bsStyle="danger"><span className="glyphicon glyphicon-hand-down"></span> Pizza </Button>
           </ButtonGroup>
           </Form>
           </Col>
           <Col md={6}>
           <strong>Name is {this.state.name}</strong><br/>
           <strong>Color is {this.state.color}</strong><br/>
           <strong>Movies is {
                  this.state.movies.map((item,i)=>{
                    return <div>
                    <span className="label label-info">{item}</span>
                    </div>
                  })}</strong><br/>
           <strong>Gender is {this.state.gender}</strong><br/>
           
           
            <strong>Last Name is {this.state.lastname}</strong><br/>
            <strong>Favorite Pet is {
                  this.state.pet.map((item,i)=>{
                    return <div>
                    <span className="label label-info">{item}</span>
                    </div>
                  })}</strong><br/>
                   <strong>Status is {this.state.status}</strong><br/>
           </Col>
           </Row>
           </Grid>
        </p>
      </div>
      
    );
  }
}

export default App;