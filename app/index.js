var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');
var ProgressBar = require('./components/ProgressBar');
var Container = require('./components/Container');
var Sidebar = require('./components/Sidebar');
//var routes = require('./config/routes');
import Promise from 'promise-polyfill'; 

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {total:0,totalVol:0,totalWeight:0, user:{}};
  }
	render(){
		return (
		<div style={{minHeight:'calc(100% - 145px)',overflow:'visible',width:'100%'}}>
			<div id="wrapper" className="clearfix">
				<ProgressBar/>
        {console.log(this.state)}
				<div id="content" className="clearfix">
          <Container id="categories" heading="Please <bold>Select</bold> The Categories That Apply To Your Move" />
				  <Sidebar id="sidebar" heading="Your Categories"/>
        </div>
			</div>
		</div>
		)
	}
  componentDidMount() {
    var that = this;
    fetch('/inv/test').then(function(response){
      if(response.status >= 400){
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then(function(data){
      that.setState({user:data[0]});
    });
  }
}
ReactDOM.render(<Main/>, app);


/*
App-
  -Progress Bar
  -Category Container
  	-Category extends Item
  -Cat Sidebar
  -Item Container 
  	-Item
  -Box Container
   	-Box extends Item
  -Save Button
  -Email Section
  -Review extends Container
  -Review Sidebar
  -Final page
*/