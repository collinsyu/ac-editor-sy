/* eslint-disable no-multiple-empty-lines,spaced-comment,no-multi-spaces,react/prop-types,react/destructuring-assignment,react/jsx-filename-extension,jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Table, Checkbox } from 'tinper-bee';


import './index.less';


class FixedModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropStatus: false,
      fixedDate: this.props.fixedDate,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { dropStatus } = nextProps;
    this.setState({ dropStatus });
  }

  // 获取单选框设置
  getInputSetting = () => {
    const { fixedDate } = this.state;
    this.props.onInsertFixed(fixedDate);
    this.setState({ fixedDate: this.props.fixedDate, dropStatus: false });
  };

  // 打开弹框
  onShow = () => {
    this.props.showCloseBar('fixedStatus');
  };

  onClickCheck = (index, param) => {
    const { fixedDate } = this.state;
    fixedDate[index][param] = !fixedDate[index][param];
    this.setState({ fixedDate });
  };


  columns = [
    {
      title: '选择',
      dataIndex: 'status',
      key: 'status',
      width: '50px',
      render: (text, record, index) => (
        <Checkbox
          checked={text}
          onClick={() => {
            this.onClickCheck(index, 'status');
          }}
        />
      ),
    },
    {
      title: '显示名称',
      dataIndex: 'fieldName',
      key: 'fieldName',
      width: '100px',
    },
    {
      title: '类型',
      dataIndex: 'filedType',
      key: 'filedType',
      width: '60px',
    },
    // {
    //   title: '是否编辑',
    //   dataIndex: 'isEdit',
    //   key: 'isEdit',
    //   width: '30px',
    //   render: (text, record, index) => {
    //     return (
    //       <Checkbox
    //         checked={text}
    //         onClick={() => {
    //           this.onClickCheck(index, 'isEdit');
    //         }}
    //       />
    //     );
    //   }
    // },
  ];


  render() {
    const { dropStatus, fixedDate } = this.state;

    return (
      <span
        className="w-e-menu"
        onMouseOver={() => {
          if (!dropStatus) {
            this.props.showCloseBar('fixedStatus');
          }
        }}
        onMouseLeave={() => {
          this.props.showCloseBar();
        }}
      >
        <span className="iconfont icon-menu" />
        <div className={dropStatus ? 'w-e-droplist' : 'w-e-droplist-h'} style={{ width: '250px',marginTop:'30px' }}>
          <p className="w-e-dp-title">插入固定字段</p>
          <Table
            rowKey={(r, i) => i} //生成行的key
            columns={this.columns}
            data={fixedDate}
          />
          <div className="ac-pop-action" onClick={this.getInputSetting}>插入</div>
        </div>
      </span>
    );
  }
}

export default FixedModal;
