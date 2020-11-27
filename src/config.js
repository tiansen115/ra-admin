import developmentapi from './config/api_development'
import productionapi from './config/api_production'
import testapi from './config/api_test'
import localhostapi from './config/api_localhost'
import stageapi from './config/api_stage'
let url
if(process.env.REACT_APP_MODE === 'development') {
    console.log('开发环境')
    url = developmentapi
} else if(process.env.REACT_APP_MODE === 'production') {
    console.log('生产环境')
    url = productionapi
} else if(process.env.REACT_APP_MODE === 'test') {
    console.log('开发环境')
    url = testapi
} else if(process.env.REACT_APP_MODE === 'localhost') {
    console.log('本地环境')
    url = localhostapi
} else if(process.env.REACT_APP_MODE === 'stage') {
    console.log('stage环境')
    url = stageapi
}

export default url
