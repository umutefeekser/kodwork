import { Provider } from 'react-redux'
import Router from './src/Router'
import { store } from './src/redux/store'

export default () => {
    return(
        <Provider store={store}>
            <Router />
        </Provider>
    )
}