import './App.css'
import {Switch,Route,Redirect} from 'react-router-dom'
import Index from './components/Index/Index'
import Login from './components/Login/Login'
import Food from './components/Food/Food'
import FoodDetail from './components/FoodDetail/FoodDetail'
import Movie from './components/Movie/Movie'
import MovieDetail from './components/MovieDetail/MovieDetail'


import Myrouter from './components/Myroute/Myroute'
function App() {
  return (
    <div className="App">
      {/* 路由出口 */}
       <Switch>
          <Route path='/login' component={Login}></Route>
          <Myrouter path='/index' component={Index}></Myrouter>
          <Myrouter path='/food' component={Food}></Myrouter>
          <Myrouter path='/fooddetail/:foodId' component={FoodDetail}></Myrouter>
          <Myrouter path='/movie' component={Movie}></Myrouter>
          <Myrouter path='/moviedetail' component={MovieDetail}></Myrouter>
          <Redirect to='/login'></Redirect>
       </Switch>

    </div>
  );
}

export default App;
