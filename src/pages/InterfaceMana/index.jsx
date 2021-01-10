import React, { Component, useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';

export default class InterfaceMana extends Component {
  static defaultProps = {
    value: '',
    sqlPaste: '',
    onChange: () => {},
  };

  state = {
    showModal: false,
    source: {},
  };


  

  render() {
    // const { sqlPaste, onChange } = this.props;
    return (
      <PageContainer>
        接口管理
      </PageContainer>
    );
  }
}
