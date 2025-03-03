import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { AddPostForm } from "./features/posts/AddPostForm";
import { PostsList } from "./features/posts/PostsList";
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/EditPost/:postId" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
