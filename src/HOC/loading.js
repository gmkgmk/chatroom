import React from 'react';
import Spin from '../components/Spin';

const WithLoading = Component => ({ isLoading, ...props }) => {
  console.log(isLoading)
  return (
    <section>
      <Component {...props} />
      {isLoading ? <Spin /> :null}
    </section>
  )
}

export default WithLoading