/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {
  Unstable_StatefulDataTable,
  BooleanColumn,
  CategoricalColumn,
  NumericalColumn,
  StringColumn,
} from '../index.js';

export const name = 'data-table-columns';

export const component = () => {
  const columns = [
    BooleanColumn({title: 'boolean-column'}),
    CategoricalColumn({title: 'categorical-column'}),
    NumericalColumn({title: 'numerical-column'}),
    StringColumn({title: 'string-column'}),
  ];

  const rows = [
    {id: 1, data: [true, 'A', 2, 'one']},
    {id: 2, data: [false, 'B', 1, 'two']},
    {id: 3, data: [true, 'A', 4, 'three']},
    {id: 4, data: [false, 'A', 3, 'four']},
  ];

  return (
    <React.Fragment>
      <div style={{height: '600px', width: '1000px', marginBottom: '100px'}}>
        <Unstable_StatefulDataTable columns={columns} rows={rows} />
      </div>
    </React.Fragment>
  );
};
