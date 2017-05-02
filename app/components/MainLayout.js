var React = require('react');
var ProgressBar = require('./ProgressBar');

var SaveBtn = require('./SaveBtn');
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
      },
      items:''
    }
    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }
  addCategory(cat){
    //onClick, make Category
    //console.log(this.state);
    this.setState((prevState,props) => {
      return prevState.user.inventory_obj.categories[cat].isActive = true;
    });
  }
  removeCategory(cat){
     this.setState((prevState,props) => {
      return prevState.user.inventory_obj.categories[cat].isActive = false;
    });
  }
  save(){
    //TO DO: upload user obj to mysql
    console.log('save test')
  }
  addItem(){
    console.log('add item')
  }
  removeItem(){
    console.log('remove item')
  }
	render(){
    var propsObj = {}
    if(this.props.location.pathname == '/large-items'){
      propsObj ={
        user:this.state.user,
        addItem: this.addItem,
        removeItem:this.removeItem,
        items:this.state.items
      }
    }else{
      propsObj ={
        user:this.state.user,
        addCategory: this.addCategory,
        removeCategory:this.removeCategory
      }
    }
    //var propsObj
		return (
		<div style={{minHeight:'calc(100% - 145px)',overflow:'visible',width:'100%'}}>
			<div id="wrapper" className="clearfix" >
				<ProgressBar/>
           {this.props.children && React.cloneElement(this.props.children, propsObj)}
        <div className="clearfix">
          <SaveBtn user={this.state.user} save={this.save}/>
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

    fetch('/js/items-list.json').then((response)=>{
      if(response.status >=400){
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then(function(data){
      that.setState({items: data});
    });
  }
}
module.exports = Main;