import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
      <div className={"wrapper"}>
        <Switch>
          <Route path={"/login"} component={Login}/>
          <Route path={"/"} component={Login}/>
        </Switch>

        <div className={"contentWrapper"}>
          <Switch>
            <PrivateRoute exact path={"/productdetails"} component={ProductDetails}/>
            <PrivateRoute exact path={"/cart"} component={Cart}/>
          </Switch>
        </div>


      </div>
      </Router>
  );
}

export default App;
