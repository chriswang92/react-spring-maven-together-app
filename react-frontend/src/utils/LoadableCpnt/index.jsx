import React from 'react';
import { Spin } from 'antd';
import Loadable from 'react-loadable';

function handleLoading(props) {
  if (props.error) {
    console.log(props.error);
    return <div>ERROR Component</div>;
  }
  if (props.timedOut) {
    return <Spin tip="Taking a long time...Time out?" />;
  }
  return (
    <div
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '80vh',
        background: 'rgba(0,0,0,0.05)'
      }}
    >
      <Spin size="large" tip="Loading App..." />
    </div>
  );
}

const LoadableCpnt = input =>
  Loadable({
    loading: handleLoading,
    ...input
  });

// Loading multiple resources
// Loadable.Map({
//   loader: {
//     Bar: () => import('./Bar'),
//     i18n: () => fetch('./i18n/bar.json').then(res => res.json()),
//   },
//   render(loaded, props) {
//     let Bar = loaded.Bar.default;
//     let i18n = loaded.i18n;
//     return <Bar {...props} i18n={i18n}/>;
//   },
// });
export default LoadableCpnt;
