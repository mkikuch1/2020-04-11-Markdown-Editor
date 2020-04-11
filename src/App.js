import React from 'react';
import './App.css';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '' 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const showdown = require('showdown');
    let converter = new showdown.Converter(),
      text      = event.target.value

    this.setState({parsedValue: converter.makeHtml(text)});
    this.setState({value: event.target.value});
  }

  render() {
    console.log(this.state.parsedValue);
    return (
      <div className="example">
        <form onSubmit={this.handleSubmit}>
          <h1>Editor</h1>
            <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} />
        </form>
        <div className="preview">
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{ __html: this.state.parsedValue}}/>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EssayForm />
      </header>
    </div>
  );
}

export default App;
