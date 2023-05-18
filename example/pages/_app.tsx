import 'styles/globals.css';
import '@ev3/ui/FieldCheckbox.css';
import '@ev3/ui/FieldRadio.css';
import '@ev3/ui/FieldSwitch.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} session={pageProps.session} />
  );
};