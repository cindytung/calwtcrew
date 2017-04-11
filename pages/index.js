import React from 'react';
import Helmet from 'react-helmet';
import Officers from '../components/Officers'

const IndexComponent = () => (
  <div>
    <Helmet
      title="Hello World"
      meta={[
        {
          name: 'description',
          content: 'Sample',
        },
        {
          name: 'keywords',
          content: 'sample, something',
        },
      ]}
    />
    <h1>
      Hello World!
    </h1>
    <Officers />
  </div>
);

export default IndexComponent;
