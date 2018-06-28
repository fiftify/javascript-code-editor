import React from "react";
import CodeMirror from "react-codemirror";
import "../node_modules/codemirror/lib/codemirror.css";
import '../node_modules/codemirror/theme/solarized.css';
import './App.css';
import 'codemirror/mode/javascript/javascript';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "//code"
    };
    this.updateCode = this.updateCode.bind(this);
  }
  updateCode(newCode) {
    this.setState({
      code: newCode
    })
  }

  render() {
    let options = {
      lineNumbers:true, 
      mode:'javascript',
      theme: 'solarized'
    }
    return (<div className="container">
          <div className="jsEditor">
            <CodeMirror value={this.state.code} options={options} onChange={this.updateCode}/>
          </div>
          <div className="previewPanel">
          Result
          </div>
    </div>)
  }
}

export default App;
