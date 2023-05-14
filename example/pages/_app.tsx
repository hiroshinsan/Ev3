import 'styles/globals.css';
import '@ev3/components/FieldCheckbox.css';
import '@ev3/components/FieldRadio.css';
import '@ev3/components/FieldSwitch.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} session={pageProps.session} />
  );
};