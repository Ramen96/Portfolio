import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import styles from "./root.module.css";

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <div className={styles.container}>
          <nav>
            <div className={styles.navcon}>
              <h1 className={styles.homebutton}>Home</h1>
            </div>
          </nav>
          <div className={styles.container}>
            <div className={styles.subcon}>
              
            </div>
          </div>
        </div>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

