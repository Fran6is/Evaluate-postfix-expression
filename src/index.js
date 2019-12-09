import  React          from 'react';
import  ReactDOM       from 'react-dom';
import  './style/App.css';
import  evaluate       from './helper';
import  Header         from './components/Header';
import  Input          from './components/Input';
import  DisplayResult  from './components/DisplayResult';



class PostFix extends React.Component{
    state = {
        answer: undefined,
        error: undefined
    }
    handleExpression = (e) =>
    {
        e.preventDefault();
        let expression = e.target.elements.exp.value.trimStart();
        if(expression === "")
        {
            this.setState({error: "Field cannot be empty"})
        }
        else
        {
            // 'evaluate()' will returns -1 for an invalid expression
            let answer = evaluate(expression);
        
            if(answer === -1 || answer === undefined){
                this.setState({
                    answer: undefined, 
                    error:"Not a valid Postfix expression"
                  });
            }
            else{
                this.setState({
                    answer: answer,
                    error: undefined
                });
                e.target.elements.exp.value = "";
            } 
        }
    }
    render()
    {
        let title = "Evaluate a Postfix expression";
        return (<div>
                    <Header title={title}/>
                    <div className="container">
                        {
                            this.state.error && 
                            <p className="error-msg" >{this.state.error}</p>
                        }
                        <Input handleExpression={this.handleExpression}/>
                        <DisplayResult answer={this.state.answer}/>
                    </div>
               </div>);
    }
}

ReactDOM.render(<PostFix />, document.getElementById('root'));
