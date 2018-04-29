import React from 'react';
import Spin from '../components/Spin';

const WithLoading = Component => ({ isLoading = false, ...props }) => {
  return (
    <>
      <Component {...props} />
      {isLoading ? <Spin /> : null}
    </>
  )
}

export default WithLoading