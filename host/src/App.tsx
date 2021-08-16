import * as React from "react";
import Button from "@my-module-federation/remote_comp";

console.log('hi there')

// const RemoteButton = React.lazy(() => import("@mytypescript/app2"));

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <Button name="Hihi" />
    </React.Suspense>
  </div>
);

export default App;
