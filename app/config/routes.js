var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var MainLayout = require('../components/MainLayout');
var SelectCategoryView = require('../components/views/SelectCategoryView');
var ItemsView = require('../components/views/ItemsView');
var routes = (
	<Router history={browserHistory}>
			<Route path="/" component={MainLayout}>
				<Route path='/categories' component={SelectCategoryView}/>
				<Route path='/large-items' component={ItemsView} />
				<IndexRoute component={SelectCategoryView}/>
			</Route>
	</Router>
);
module.exports = routes;