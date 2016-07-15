// DECLARING A COMPONENT IN REACT.JS

class Profile extends React.Component {
  
  // declaring state using constructor
    // this will allow us to mutate the state of our object
  constructor(props){
    super(props);
    this.state = {
      height:100
    };
  }
  
  render(){
    // we can console log properties about our component
      console.log(this.props.name);
      console.log(this.props.age);
      console.log(this.props.bio);    
    // deconstructing:
      var { name, age, bio, pic } = this.props;
      var { height } = this.state;
    
      return (
        // we can also output component properties to the DOM
        <div className="profile-box">
          <h2> { name } </h2>
          <h4>Age: { age }</h4>
          <h4>Bio: { bio }</h4>
          <img src={ pic } height={height} />
          <br/>
          <button onClick={this.zoomPicOut.bind(this)}>-</button>
          <button onClick={this.zoomPicIn.bind(this)}>+</button>
        </div>
      );
  }  
  zoomPicIn(){
    console.log(this);
    this.setState({height: this.state.height + 100});
  }  
  zoomPicOut(){
    console.log(this);
    this.setState({height: this.state.height - 100});
  }  
}

// RENDERING REACT.JS COMPONENTS TO THE DOM
  // declaring props within the render method, e.g. name, age, bio, pic

React.render(<Profile name="David Campos" age={26} bio="I like kittens" pic="https://avatars0.githubusercontent.com/u/3254723?v=3&s=460" />, document.getElementById('app'));