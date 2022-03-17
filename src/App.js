import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import Routes from "./constants/routes";
import ProductListScreen from "./screens/products_list/products_list.screen";
import ProductDetailsScreen from "./screens/product_details/product_details.screen";

function App() {
  
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path={Routes.PRODUCTLISTROUTE} component={ProductListScreen}/>
          <Route exact path={`${Routes.PRODUCTLISTROUTE}/:id`} component={ProductDetailsScreen}/>
          <Redirect to={Routes.PRODUCTLISTROUTE}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
