import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Input, Drawer } from 'antd';
import React, { Component, useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
import CodeEdit from './components/CodeEdit';

export default class SqlEdit extends Component {
  static defaultProps = {
    value: '',
    sqlPaste: '',
    onChange: () => {},
  };

  state = {
    showModal: false,
    source: {},
    sql: '',
  };

  uuid = '';

  onCursorActivity = (cm) => {
    if (!cm.getSelection()) {
      console.log(cm.getSelection()); // 获取到选中部分内容，用来实现执行部分内容
    }
  };

  onInputRead = async (cm, change, editor) => {
    // const { text } = change;
    // const dechars = ['.'];
    // const autocomplete = dechars.includes(text[0]);
    // if (autocomplete) {
    //   const data = getTableList(); // 获取库表列表
    //   editor.setOption('hintOptions', {
    //     tables: data,
    //     completeSingle: false,
    //   });
    //   cm.execCommand('autocomplete');
    // } else {
    //   const tableName = getTableList(); // 获取表列表
    //   editor.setOption('hintOptions', {
    //     tables: tableName,
    //     completeSingle: false,
    //   });
    // }
    // cm.execCommand('autocomplete');
  };

  render() {
    const { sqlPaste, onChange } = this.props;
    const { sql } = this.state;
    return (
      <PageContainer>
        <CodeEdit
          className="sql"
          value={sql}
          paste={sqlPaste}
          options={{readOnly:false}}
          onChange={(sql) => {
            onChange(sql);
          }} // sql变化事件
          onCursorActivity={(cm) => this.onCursorActivity(cm)} // 用来完善选中监听
          onInputRead={
            // 自动补全
            (cm, change, editor) => this.onInputRead(cm, change, editor)
          }
        />
      </PageContainer>
    );
  }
}
