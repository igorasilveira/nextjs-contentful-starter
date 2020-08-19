import { AppProps } from 'next/app';
import { Router } from 'next/dist/client/router';

import '../styles/global.css';

import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}

export default App;
