

class Image extends React.Component {
  constructor(){
    super();
    this.state = {showResults: true}
  }
  _toggleImage(event){
    this.setState( {showResults: !this.state.showResults} );
  }
  render() {
    if (this.state.showResults){
      return (
        <div>
          <img src="http://www.pamperedpetz.net/wp-content/uploads/2015/09/Puppy1.jpg"  />
          <button type="button" class="btn btn-primary" onClick={this._toggleImage.bind(this)} >Show/Hide</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <button type="button" class="btn btn-primary" onClick={this._toggleImage.bind(this)} >Show/Hide</button>
        </div>
      )
    }
  }
}


ReactDOM.render(<Image />, document.getElementById('app-container'));
