var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');
var ProgressBar = require('./components/ProgressBar');
var Container = require('./components/Container');
var Sidebar = require('./components/Sidebar');
//var routes = require('./config/routes');

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {total:0,totalVol:0,totalWeight:0};
  }
	render(){
		return (
		<div style={{minHeight:'calc(100% - 145px)',overflow:'visible',width:'100%'}}>
			<div id="wrapper" className="clearfix">
				<ProgressBar/>
				<div id="content" className="clearfix">
          <Container id="categories" heading="Please <bold>Select</bold> The Categories That Apply To Your Move" />
				  <Sidebar id="sidebar" heading="Your Categories"/>
        </div>
			</div>
		</div>
		)
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