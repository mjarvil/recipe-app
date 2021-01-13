import React from 'react';

import { Table, Typography } from 'antd';

const NutritionFact = ({ nutrients }) => {
  // retrieve the keys from the object and
  // return each object as an array based on the key
  const tableData = Object.keys(nutrients).map((k) => {
    return {
      ...nutrients[k], // spread objects
      key: k,
      quantity: Math.round(nutrients[k].quantity),
    };
  });

  const { Title } = Typography;

  // spread the data
  const dataSource = [...tableData];

  const columns = [
    {
      title: 'Code',
      dataIndex: 'key',
      key: 'key',
      responsive: ['md', 'lg', 'sm'],
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
  ];
  return (
    <div style={{ overflow: 'auto' }}>
      <Title level={4}>Nutrition Facts</Title>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default NutritionFact;
