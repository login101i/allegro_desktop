window.process = {};

import ReactDOM from 'react-dom';
import App from './App';
import { CartContextProvider } from './context/cart.context';

import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
	<Provider store={store}>
		<CartContextProvider>
			<App />
		</CartContextProvider>
	</Provider>,
	document.getElementById('root'),
);
