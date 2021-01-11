import React from 'react';
import { Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { queryRule, updateRule, addRule, removeRule } from './service';

export type TableListItem = {
  id: number;
  name: string;
  type: string;
  ip: string;
  port: number;
  username: string;
  password: string;
  dbName: string;
  mark: string;
};
//{
//   "id": 5,
//   "name": "datasource1",
//   "type": "MYSQL",
//   "ip": "39.105.90.208",
//   "port": 13306,
//   "username": "root",
//   "password": "passwd",
//   "dbName": "test",
//   "mark": null
// }
const tableListDataSource: TableListItem[] = [];

// for (let i = 0; i < 5; i += 1) {
//   tableListDataSource.push({
//     key: i,
//     name: 'AppName',
//     creator: creators[Math.floor(Math.random() * creators.length)],
//     createdAt: Date.now() - Math.floor(Math.random() * 100000),
//   });
// }


/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async (selectedRows) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '数据源名称',
    dataIndex: 'name',
    // render: (_) => <a>{_}</a>,
  },
  {
    title: '数据库类型',
    dataIndex: 'type',
  },
  {
    title: '地址',
    dataIndex: 'ip',
  },
  {
    title: '端口',
    dataIndex: 'port',
  },
  {
    title: '登录账号',
    dataIndex: 'username',
  },
  {
    title: '备注',
    dataIndex: 'mark',
  },
  {
    title: '操作',
    width: '164px',
    key: 'option',
    valueType: 'option',
    render: () => [<a key="link" >编辑</a>, <a key="link2"
    onClick={async () => {
              await handleRemove('selectedRowsState');
              // actionRef.current?.reloadAndRest?.();
            }}
    >删除</a>],
  },
];

export default () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
      // request={
      //   (params, sorter, filter) => {
      //   // 表单搜索项会从 params 传入，传递给后端接口。
      //   console.log(params, sorter, filter);
      //   return Promise.resolve({
      //     data: tableListDataSource,
      //     success: true,
      //   });
      // }}
      rowKey="id"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        filterType: 'light',
      }}
      dateFormatter="string"
      headerTitle="数据源管理"
      toolBarRender={() => [
        <Button type="primary" key="primary">
          新增
        </Button>,
      ]}
    />
  );
};
