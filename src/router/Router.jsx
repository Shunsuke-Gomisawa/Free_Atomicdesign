import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
};
