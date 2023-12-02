import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './sass/style.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
	const root = createRoot(rootElement);
	root.render(<App />);
}
