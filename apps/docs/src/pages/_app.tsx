import './index.css';

import { MonaSans } from '@/lib/fonts';

export default function App({ Component, pageProps }) {
  return (
    <>
      <style
        jsx
        global>
        {`
          :root {
            font-size: 0.9em;
            --font-mona-sans: ${MonaSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
