import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45pm" content="Hey this is my comment"/>
      <CommentDetail author="Alex" timeAgo="Today at 4:45pm" content="Hey this is my comment"/>
      <CommentDetail author="JAne" timeAgo="Today at 4:45pm" content="Hey this is my comment"/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
