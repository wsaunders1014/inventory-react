var React = require('react');
var Categories = require('../Categories');
var Sidebar = require('../Sidebar');

var SelectCategoryView = function(props){
	console.log(props);
	return (
		<div id="content" className="clearfix">
			<Categories id="categories" type="categories" addCategory={props.addCategory} user={props.user} heading="Please <bold>Select</bold> The Categories That Apply To Your Move"/>
			<Sidebar id="sidebar" removeCategory={props.removeCategory} heading="Your Categories" user={props.user} />
		</div>
	);
}
module.exports = SelectCategoryView;