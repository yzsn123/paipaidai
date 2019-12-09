import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'lib-flexible/flexible'
//全局样式
import './style/reset.scss'
import './style/style.scss'
import store from './store/index'
import {Provider} from 'react-redux'

ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>),

    document.querySelector('#root')
)