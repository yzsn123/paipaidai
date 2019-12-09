import React, { PureComponent, lazy, Suspense } from 'react'
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Tab from './components/tab-bar/Tab'
import Loading from './components/Loading/Loding'
//组件懒加载
const Home = lazy(()=>import('./pages/home/root/home'));
const Mine = lazy(()=>import('./pages/mine/root/mine'));
const Found = lazy(()=>import('./pages/found/root/found'));

const Login = lazy(()=>import('./pages/mine/login/Login'))
const Set = lazy(()=>import('./pages/mine/root/children/Set'))
const Identify = lazy(()=>import('./pages/mine/root/children/Id'))
const Loan = lazy(()=>import('./pages/home/loan/loan'))
const BorrowHistory = lazy(()=>import('./pages/mine/root/children/BorrowHistory'))
export default class App extends PureComponent {
    render() {
        return (
            <div id="app">
                <Router>
                    {/*懒加载需要Suspense包裹*/}
                    <Suspense fallback={<Loading/>}>
                        {/*switch匹配到下一个就不往下匹配*/}
                        <Switch>
                            {/*重定向首页*/}
                            <Route path="/" exact render={()=>{
                                return <Redirect to="/home"/>
                            }}/>
                            {/*配置路由*/}
                            <Route path="/home"  component={Home}/>
                            <Route path="/found" component={Found}/>
                            <Route path="/mine"  component={Mine}/>
                            
                            {/* 公共页面 */}
                            <Route path="/login" exact render={(props)=>{
                                return <Login {...props}/>
                            }}/>
                         </Switch>


                         {/* 子页面 */}
                        <>
                            <Route path="/mine/set" component={Set}/>
                            <Route path="/mine/id" component={Identify} />
                            <Route path="/home/loan" component={Loan} />
                            <Route path="/mine/borrowHistory" component={BorrowHistory}/>
                        </>

                    </Suspense>
                    
                    


                    <Tab/>
                </Router>
            </div>
        )
    }
}


