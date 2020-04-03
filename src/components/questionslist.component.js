import React, { Component } from 'react';
import axios from 'axios'
import {Form,Checkbox} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';





export default class QuestionList extends Component {
    constructor(props){
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleIdChange =this.handleIdChange.bind(this);

        this.state = {questions:[],
          value:'',
          id:''
          
          
          }
        
    }
    handleChange(e){
      this.handleIdChange(e);
      this.handleOptionChange(e);
    }
    
    handleOptionChange(e){
      this.setState({ 
        value:e.target.value 
      }
      )}
    handleIdChange(e)
    {
      this.setState({
        id:e.target.id
      }
    )}
    
    handleFormSubmit (e) {
      e.preventDefault();
    axios.get('https://megaquizappbackend.herokuapp.com/question/ '+ this.state.id)
    .then(response => {
      if(this.state.value ==response.ans){
        console.log('Correct Answer')
      }
      else{
        console.log('Wrong Answer')
      }
    })
      console.log('You have selected:', this.state.value);
      console.log('You have selected:', this.state.id);
      
    }
  

    componentDidMount(){
        axios.get('https://megaquizappbackend.herokuapp.com/question/')
        .then(respose =>{
            this.setState({questions:respose.data})
        })
        .catch(error => {
            console.log(error);
        });
        
    };

    

    questionList() {

        return this.state.questions.map(currentquestion => {

          return(
        <Form onSubmit ={this.handleFormSubmit}>
        <Form.Field>
         <h3>Q.  {currentquestion.ques}</h3>
          <h6>Correct Answer is {currentquestion.ans} </h6>
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={currentquestion.options[0]}
            name='checkboxRadioGroup'
            id = {currentquestion._id}
            value ={currentquestion.options[0]}
            checked = {this.state.value === currentquestion.options[0] && this.state.id === currentquestion.id}
            onChange={this.handleChange}

          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={currentquestion.options[1]}
            name='checkboxRadioGroup'
            id = {currentquestion._id}
            value ={currentquestion.options[1]}
            checked = {this.state.value === currentquestion.options[1] && this.state.id === currentquestion.id}
            onChange={this.handleChange}

          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={currentquestion.options[2]}
            name='checkboxRadioGroup'
            id = {currentquestion._id}
            value = {currentquestion.options[2]}
            checked = {this.state.value === currentquestion.options[2] && this.state.id === currentquestion._id}
            onChange={this.handleChange}

          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={currentquestion.options[3]}
            name='checkboxRadioGroup'
            id = {currentquestion._id}
            value={currentquestion.options[3]}
            checked = {this.state.value ===currentquestion.options[3] && this.state.id === currentquestion._id}
            onChange={this.handleChange}

          />
        </Form.Field>
        
        <button type ="submit" class="ui button" >Submit Answer</button>
        <hr />

      </Form>
      
          );
        })
      }



  render() {
    return (
        <div>
        <h2>Questions</h2>
        <hr />
        <hr />
        <p>{ this.questionList() } </p>
          
      </div>
    )
  }
}