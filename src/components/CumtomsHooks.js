import React from 'react';
import { useFetchJon } from '../hooks/useFetchJon';

const CumtomsHooks = () => {
  let url = 'https://countriesnow.space/api/v0.1/countries/capital';

  let { data, isPending, error } = useFetchJon(url);

  return (
    <div>
      <h2>CumtomsHooks</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark> {JSON.stringify(error)} </mark>
      </h3>
      <h3>
        <code> {JSON.stringify(data)}</code>{' '}
      </h3>
    </div>
  );
};

export default CumtomsHooks;
