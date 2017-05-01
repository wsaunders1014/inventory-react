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
    this.state = {
      user:{
        total:0,
        totalVol:0,
        totalWeight:0,
        inventory_obj:{
          "categories":{
            "Sofas & Couches":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Dressers & Cabinets":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false,"Dining","Office","Bedroom","Entertainment"],"total":0},
            "Tables & Chairs":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false,"Dining","Coffee & End Tables","Living Room","Office","Patio","Other"],"total":0},
            "Desks":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Musical Instruments":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "TVs & Electronics":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false,"TVs","Stereos","Computers","Office","Other"],"total":0},
            "Appliances":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false,"Kitchen","Laundry","Other"],"total":0},
            "Bookcases":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Beds & Cribs":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false,"Mattress Only","Mattress & Box Spring","Bed Frames","Futons","Nursery","Other"],"total":0},
            "Futons":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Children & Nursery":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Lamps & Mirrors":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Motorcycles & ATVs":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Tools":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Sports & Hobbies":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Miscellaneous":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0},
            "Boxes":{"items":[false],"itemCount":[false],"isActive":false,"sub_categories":[false],"total":0}
          }
        }
      }
    }
    this.selectCategory = this.selectCategory.bind(this)
  }
  selectCategory(cat){
    //onClick, make Category
    //console.log(this.state);
    this.setState((prevState,props) => {
      return prevState.user.inventory_obj.categories[cat].isActive = true;
    });
  }
	render(){
		return (
		<div style={{minHeight:'calc(100% - 145px)',overflow:'visible',width:'100%'}}>
			<div id="wrapper" className="clearfix" >
				<ProgressBar/>
        {/*console.log(this.state)*/}
				<div id="content" className="clearfix">
          <Container id="categories" type="categories" selectCategory={this.selectCategory} user={this.state.user} heading="Please <bold>Select</bold> The Categories That Apply To Your Move" />
				  <Sidebar id="sidebar" heading="Your Categories" user={this.state.user} />
        </div>
			</div>
		</div>
		)
	}
  componentDidMount() {
    var that = this;
    fetch('/inv/test').then((response)=>{
      if(response.status >= 400){
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then(function(data){
      data[0].inventory_obj = JSON.parse(data[0].inventory_obj);
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