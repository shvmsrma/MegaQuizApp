import React, { Component } from 'react';
import axios from 'axios'
import {Form,Checkbox} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';





export default class QuestionList extends Component {
    constructor(props){
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {questions:[] }
        
    }
    
    handleOptionChange = (e, { value }) => this.setState({ value })

    
    
    
    handleFormSubmit (e) {
      e.preventDefault();
    console.log('You have selected:', this.state.value);
      
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
        <Form onSubmit={this.handleFormSubmit}>
        <Form.Field>
         <h3>Q.  {currentquestion.ques}</h3>
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={currentquestion.options[0]}
            name='checkboxRadioGroup'
            value ={currentquestion.options[0]}
            checked = {this.state.value === currentquestion.options[0]}
            onChange={this.handleOptionChange}

          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={currentquestion.options[1]}
            name='checkboxRadioGroup'
            value ={currentquestion.options[1]}
            checked = {this.state.value === currentquestion.options[1]}
            onChange={this.handleOptionChange}

          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={currentquestion.options[2]}
            name='checkboxRadioGroup'
            value = {currentquestion.options[2]}
            checked = {this.state.value === currentquestion.options[2]}
            onChange={this.handleOptionChange}

          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={currentquestion.options[3]}
            name='checkboxRadioGroup'
            value={currentquestion.options[3]}
            checked = {this.state.value ===currentquestion.options[3]}
            onChange={this.handleOptionChange}

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