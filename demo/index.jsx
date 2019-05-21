import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss'



import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";import Demo4 from "./demolist/Demo4";
var DemoArray = [{"example":<Demo1 />,"title":" AcEditorSany","code":"/**\n *\n * @title AcEditorSany\n * @description 复杂文本编辑器，可以插入下拉、日期、输入框、单选框和多选框等dom元素\n *\n */\n\nimport React, { Component } from 'react';\nimport { AcEditorSany } from '../../src/index';\nimport '../../src/index.less';\nimport AcEditorShow from '../../src/AcEditorShow';\n\nclass Demo1 extends Component {\n  saveFunc = () => {\n    // doc 为文本编辑器里的html字符串\n    // idList 为组件的id,type,direction\n    const { doc, idList } = this.child.getHtml2String();\n    console.log('文本编辑器内容为', doc, idList);\n  };\n\n  fixedDate = [\n    {\n      field: 'buyerwwyy1',\n      type: 'text',\n      filedType: '文本',\n      fieldName: '买方名称',\n      data: 'xxxx',\n      defaultValue: '买方名称',\n    },\n    {\n      field: 'salernameyy22',\n      type: 'text',\n      filedType: '文本',\n      fieldName: '卖方名称',\n      data: 'xxxx',\n      defaultValue: '卖方名称',\n    },\n    {\n      field: 'contractswwwignyy3',\n      type: 'date',\n      fieldName: '合同签订日期',\n      filedType: '日期',\n      data: '2019-02-20',\n      defaultValue: '2019-02-20',\n    },\n    {\n      field: 'contractstrwwwyy4',\n      type: 'date',\n      fieldName: '合同开始日期',\n      filedType: '日期',\n      data: '2019-02-20',\n      defaultValue: '2019-02-20',\n    },\n    {\n      field: 'contractendxxxyy5',\n      type: 'date',\n      fieldName: '合同结束日期',\n      filedType: '日期',\n      data: '2019-02-20',\n      defaultValue: '2019-02-20',\n    },\n    {\n      field: 'paytewwwrmyy6',\n      type: 'select',\n      filedType: '下拉',\n      fieldName: '付款条件',\n      data: '现金支付|||微信支付|||支付宝支付',\n      defaultValue: '微信支付',\n    },\n    {\n      field: 'isrebatwwweyy7',\n      type: 'radio',\n      filedType: '单选',\n      fieldName: '是否返利',\n      data: '是|||否',\n      defaultValue: '否',\n    },\n  ];\n\n\n  render() {\n    const defaultData = [\n      {\n        direction: 'horizontal',\n        type: 'select',\n        field: 'payterm1',\n        data: '微信支付|||支付宝支付|||银行卡支付|||现金支付|||其他支付',\n        defaultValue: '银行卡支付',\n      },\n    ];\n    let htmlString = '<div><h1 style=\"text-align: center;\">xxx公司供应商合同</h1><div><div><span>买方名称</span><textarea rows=\"1\" cols=\"30\" id=\"buyer1\" onkeyup=\"onKeyUpTextArea(\\'buyer1\\')\" style=\"resize: horizontal;vertical-align: middle;width: 80px;\">xxxx</textarea><span>卖方名称</span><textarea rows=\"1\" cols=\"30\" id=\"salername\" onkeyup=\"onKeyUpTextArea(\\'salername\\')\" style=\"resize: horizontal;vertical-align: middle;width: 80px;\">xxxx</textarea><span>合同签订日期</span><input type=\"text\" id=\"contractsign\" value=\"2019-03-13\" actype=\"date\" style=\"width: 90px\"><span>合同开始日期</span><input type=\"text\" id=\"contractstr\" value=\"2019-03-13\" actype=\"date\" style=\"width: 90px\"><span>合同结束日期</span><input type=\"text\" id=\"contractend\" value=\"2019-03-13\" actype=\"date\" style=\"width: 90px\"><span>付款条件</span><select id=\"payterm1\" class=\"select ac-select\" onchange=\"onChangeSelect()\"><option name=\"payterm\" value=\"0\" selected=\"\">现金支付</option>,<option name=\"payterm\" value=\"1\">微信支付</option>,<option name=\"payterm\" value=\"2\">支付宝支付</option></select></div><br></div><div><br></div><ul><li><div class=\"form\"><div class=\"row\"></div></div></li></ul></div>';\n\n    return (\n      <div className=\"demoPadding\">\n        <button onClick={this.saveFunc} style={{\n          marginLeft: '20px',\n          marginBottom: '10px'\n        }}>保存\n        </button>\n        <AcEditorSany\n          // 组件id\n          editorId=\"acEditorSanyId\"\n          // 设置ref属性\n          onRef={(ref) => {\n            this.child = ref;\n          }}\n          // 文本框默认值\n          htmlString={''}\n          // defaultData={defaultData} // 替换组件默认值\n          // 文本框默认最小高\n          height=\"300px\"\n          fixedDate={this.fixedDate}\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 复杂文本编辑器，可以插入下拉、日期、输入框、单选框和多选框等dom元素"},{"example":<Demo2 />,"title":" AcEditorShow","code":"/**\n *\n * @title AcEditorShow\n * @description 展示用 AcEditorSany 组件生成的 html 字符串，生成的内容可以交互，同时支持生成水印\n *\n */\n\nimport React, { Component } from 'react';\nimport { AcEditorShow } from '../../src/index';\nimport '../../src/index.less';\n\nclass Demo2 extends Component {\n\n  saveFunc = () => {\n    // 为文本编辑器里的html字符串\n    const { doc, idList } = this.child.getHtml2String();\n    console.log('文本编辑器内容为', doc, idList);\n  };\n\n  render() {\n    const defaultData = [\n      {\n        field: 'buyerww1',\n        direction: 'horizontal',\n        data: '买方名称',\n        type: 'text',\n        defaultValue: '买方名称eee'\n      },\n      {\n        field: 'salername22',\n        direction: 'horizontal',\n        data: '卖方名称',\n        type: 'text',\n        defaultValue: '卖方名称'\n      },\n      {\n        field: 'contractswwwign3',\n        direction: 'horizontal',\n        data: '2019-02-20',\n        type: 'date',\n        defaultValue: '2019-02-20'\n      },\n      {\n        field: 'contractstrwww4',\n        direction: 'horizontal',\n        data: '2019-02-20',\n        type: 'date',\n        defaultValue: '2019-02-20'\n      },\n      {\n        field: 'contractendxxx5',\n        direction: 'horizontal',\n        data: '2019-02-20',\n        type: 'date',\n        defaultValue: '2019-02-20'\n      }, {\n        field: 'paytewwwrm6',\n        direction: 'horizontal',\n        data: '现金支付|||微信支付|||支付宝支付',\n        type: 'select',\n        defaultValue: '微信支付'\n      },\n      {\n        field: 'isrebatwwwe7',\n        direction: 'horizontal',\n        data: '是|||否',\n        type: 'radio',\n        defaultValue: '是'\n      },\n      {\n        field: 'dd74eab6-bccd-4b0c-843d-c33eecfe2580',\n        direction: 'horizontal',\n        data: '1YYYYY|||2YYYYY|||3YYYYY',\n        type: 'checkbox',\n        defaultValue: '1YYYYY'\n      },\n\n    ];\n    const isActive = true;\n    const htmlString = '<span><input type=\"text\" value=\"买方名称\" onkeyup=\"onKeyUpInput(event)\" id=\"buyerww1\" acType=\"text\" /><input type=\"text\" value=\"买方名称\" onkeyup=\"onKeyUpInput(event)\" id=\"salername22\" value=\"卖方名称\" acType=\"text\" /><input type=\"text\" id=\"contractswwwign3\" value=\"2019-02-20\" actype=\"date\" style=\"width: 100px\" readonly=\"true\"><input type=\"text\" id=\"contractstrwww4\" value=\"2019-02-20\" actype=\"date\" style=\"width: 100px\" readonly=\"true\"><input type=\"text\" id=\"contractendxxx5\" value=\"2019-02-20\" actype=\"date\" style=\"width: 100px\" readonly=\"true\"><select id=\"paytewwwrm6\" class=\"select ac-select\" onchange=\"onChangeSelect(event)\"><option name=\"paytewwwrm6\" value=\"现金支付\">现金支付</option>,<option name=\"paytewwwrm6\" value=\"微信支付\" selected=\"\">微信支付</option>,<option name=\"paytewwwrm6\" value=\"支付宝支付\">支付宝支付</option></select><span id=\"dd74eab6-bccd-4b0c-843d-c33eecfe2580\" class=\"ac-checkbox-group\"><span><input name=\"dd74eab6-bccd-4b0c-843d-c33eecfe2580\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" checked=\"true\" value=\"1YYYYY\"><span style=\"margin: 0 10px\">1YYYYY</span></span><span><input name=\"dd74eab6-bccd-4b0c-843d-c33eecfe2580\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" value=\"2YYYYY\"><span style=\"margin: 0 10px\">2YYYYY</span></span><span><input name=\"dd74eab6-bccd-4b0c-843d-c33eecfe2580\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" value=\"3YYYYY\"><span style=\"margin: 0 10px\">3YYYYY</span></span></span><span id=\"isrebatwwwe7\" class=\"ac-radio-group\"><span><input name=\"isrebatwwwe7\" onclick=\"onClickRadio(event)\" type=\"radio\" style=\"vertical-align: middle;\" value=\"是\" actype=\"radio\" checked=\"true\"><span style=\"margin: 0 10px\">是</span></span><span><input name=\"isrebatwwwe7\" onclick=\"onClickRadio(event)\" type=\"radio\" style=\"vertical-align: middle;\" value=\"否\" actype=\"radio\"><span style=\"margin: 0 10px\">否</span></span></span></span>';\n    return (\n      <div className=\"demoPadding\">\n        <button onClick={this.saveFunc} style={{\n          marginLeft: '20px',\n          marginBottom: '10px'\n        }}>保存\n        </button>\n        <AcEditorShow\n          htmlString={htmlString} // 用 AcEditorShow 生成的html字符串\n          editorId=\"showId\" // 组件 id\n          isActive={isActive} // 组件是否可以操作\n          defaultData={defaultData} // 替换组件默认值\n          waterMarkerText=\"用友网络\" // 添加水印\n          // 设置ref属性\n          onRef={(ref) => {\n            this.child = ref;\n          }}\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 展示用 AcEditorSany 组件生成的 html 字符串，生成的内容可以交互，同时支持生成水印"},{"example":<Demo3 />,"title":" AcEditorPDF","code":"/**\n *\n * @title AcEditorPDF\n * @description 展示用 AcEditorSany 组件生成的 html 字符串转换成PDF格式打印\n *\n */\n\nimport React, { Component } from 'react';\nimport { AcEditorShow, AcEditorPDF, } from '../../src/index';\nimport '../../src/index.less';\n\n\nclass Demo3 extends Component {\n\n\n  getFormInfo = () => {\n    // 为文本编辑器里的html字符串\n    // const { doc, idList } = this.child.getHtml2String();\n    // const { doc, idList } = this.child.getHtml2String();\n    console.log('this.child.getHtml2String();', this.child.getHtml2String());\n    return this.child.getHtml2String();\n    // console.log('文本编辑器内容为', doc, idList);\n  };\n\n  render() {\n    const defaultData =\n      [{\n        field: 'd9e40ab6-a2e1-48ea-8e5e-a5b451bdd132',\n        direction: 'horizontal',\n        data: '',\n        type: 'text',\n        defaultValue: ''\n      },\n        {\n          field: '1d560209-1347-4133-9b7f-b01b6ff491f7',\n          direction: 'horizontal',\n          data: '',\n          type: 'text',\n          defaultValue: ''\n        },\n        {\n          field: '2e5fcbf7-c7ff-4a3d-852f-b159549cfaf8',\n          direction: 'horizontal',\n          data: '2019-05-07',\n          type: 'date',\n          defaultValue: '2019-05-07'\n        },\n        {\n          field: '26222e13-2782-4495-893a-b1eb13097450',\n          direction: 'horizontal',\n          data: '现金支付|||微信支付|||银行卡支付',\n          type: 'select',\n          defaultValue: '现金支付'\n        },\n        {\n          field: '065c0a49-fb1d-4171-9c2d-057836b2220c',\n          direction: 'horizontal',\n          data: '1XXXXX|||2XXXXX|||3XXXXX',\n          type: 'radio',\n          defaultValue: '1XXXXX'\n        },\n        {\n          field: '99c19ed0-2a89-4eca-8910-d79effd0fea3',\n          direction: 'horizontal',\n          data: '1YYYYY|||2YYYYY',\n          type: 'checkbox',\n          defaultValue: '1YYYYY'\n        },\n      ];\n    const isActive = true;\n    let htmlString = '<div><h1 style=\"text-align: center;\">xxx公司供应商合同</h1><div>\\n' +\n      '<span style=\"color: rgb(117, 117, 117);\">买方名称<input id=\"d9e40ab6-a2e1-48ea-8e5e-a5b451bdd132\" type=\"text\"  onkeyup=\"onKeyUpInput(event)\" acType=\"text\" /></span><span style=\"color: rgb(117, 117, 117);\">卖方名称<input  id=\"1d560209-1347-4133-9b7f-b01b6ff491f7\" type=\"text\" value=\"\" onkeyup=\"onKeyUpInput(event)\" acType=\"text\" /></span><span style=\"color: rgb(117, 117, 117);\">合同签订日<input type=\"text\" id=\"2e5fcbf7-c7ff-4a3d-852f-b159549cfaf8\" value=\"2019-05-07\" actype=\"date\" style=\"width: 100px\" readonly=\"true\"><select id=\"26222e13-2782-4495-893a-b1eb13097450\" class=\"select ac-select\" onchange=\"onChangeSelect(event)\"><option name=\"26222e13-2782-4495-893a-b1eb13097450\" value=\"现金支付\" selected=\"\">现金支付</option>,<option name=\"26222e13-2782-4495-893a-b1eb13097450\" value=\"微信支付\">微信支付</option>,<option name=\"26222e13-2782-4495-893a-b1eb13097450\" value=\"银行卡支付\">银行卡支付</option></select><span id=\"99c19ed0-2a89-4eca-8910-d79effd0fea3\" class=\"ac-checkbox-group\"><span><input name=\"99c19ed0-2a89-4eca-8910-d79effd0fea3\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" checked=\"true\" value=\"1YYYYY\"><span style=\"margin: 0 10px\">1YYYYY</span></span><span><input name=\"99c19ed0-2a89-4eca-8910-d79effd0fea3\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" value=\"2YYYYY\"><span style=\"margin: 0 10px\">2YYYYY</span></span></span><span id=\"065c0a49-fb1d-4171-9c2d-057836b2220c\" class=\"ac-radio-group\"><span><input name=\"065c0a49-fb1d-4171-9c2d-057836b2220c\" onclick=\"onClickRadio(event)\" type=\"radio\" checked=\"true\" style=\"vertical-align: middle;\" value=\"1XXXXX\" actype=\"radio\"><span style=\"margin: 0 10px\">1XXXXX</span></span><span><input name=\"065c0a49-fb1d-4171-9c2d-057836b2220c\" onclick=\"onClickRadio(event)\" type=\"radio\" style=\"vertical-align: middle;\" value=\"2XXXXX\" actype=\"radio\"><span style=\"margin: 0 10px\">2XXXXX</span></span><span><input name=\"065c0a49-fb1d-4171-9c2d-057836b2220c\" onclick=\"onClickRadio(event)\" type=\"radio\" style=\"vertical-align: middle;\" value=\"3XXXXX\" actype=\"radio\"><span style=\"margin: 0 10px\">3XXXXX</span></span></span></span><span style=\"color: rgb(117, 117, 117);\"></span><span style=\"color: rgb(117, 117, 117);\"></span> ';\n\n    return (\n      <div className=\"demoPadding\">\n        <div style={{\n          marginLeft: '20px',\n          marginBottom: '10px'\n        }}>\n          <AcEditorPDF\n            pdfId=\"demo3EditorId\"\n            title={<button>打印PDF</button>}\n            // htmlString={htmlString} // 用 AcEditorShow 生成的html字符串\n            formInfo={() => {\n              return this.child.getHtml2String();\n            }}\n          />\n        </div>\n        <AcEditorShow\n          htmlString={htmlString} // 用 AcEditorShow 生成的html字符串\n          editorId=\"demo3EditorId\" // 组件 id\n          isActive={isActive} // 组件是否可以操作\n          defaultData={defaultData} // 替换组件默认值\n          waterMarkerText=\"用友网络\" // 添加水印\n          // 设置ref属性\n          onRef={(ref) => {\n            this.child = ref;\n          }}\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 展示用 AcEditorSany 组件生成的 html 字符串转换成PDF格式打印"},{"example":<Demo4 />,"title":" AcEditorWord","code":"/**\n *\n * @title AcEditorWord\n * @description 展示用 AcEditorSany 组件生成的 html 字符串转换成word 格式下载\n *\n */\n\nimport React, { Component } from 'react';\nimport { AcEditorShow, AcEditorWord, } from '../../src/index';\nimport '../../src/index.less';\nimport AcEditorPDF from '../../src/AcEditorPDF';\n\n\nclass Demo4 extends Component {\n\n  render() {\n    // word 样式\n    const styles = '.testClass{background-color: #ff00ff;}';\n\n\n    const defaultData = [\n      {field: \"ff55b00a-f4aa-43b7-b7eb-f545ccac0fd9\", direction: \"horizontal\", data: \"1YYYYY|||2YYYYY|||3YYYYY|||4YYYYY\", type: \"checkbox\", defaultValue: \"1YYYYY\"},\n      {field: \"629180d0-ff59-44a5-8f86-9c7360961e12\", direction: \"horizontal\", data: \"1XXXXX|||2XXXXX|||3XXXXX\", type: \"radio\", defaultValue: \"1XXXXX\"},\n      {field: \"9013b8fc-e610-419d-bba0-196ec76b73cd\", direction: \"horizontal\", data: \"法师打发斯蒂芬\", type: \"text\", defaultValue: \"法师打发斯蒂芬\"},\n      {field: \"a0a8252d-94b3-4436-9433-d37e589508eb\", direction: \"horizontal\", data: \"支付宝|||银行卡|||微信\", type: \"select\", defaultValue: \"支付宝\"},\n    ]\n\n    const isActive = false;\n    let htmlString = '<span id=\"ff55b00a-f4aa-43b7-b7eb-f545ccac0fd9\" class=\"ac-checkbox-group\"><span><input name=\"ff55b00a-f4aa-43b7-b7eb-f545ccac0fd9\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" checked=\"true\" value=\"1YYYYY\"><span style=\"margin: 0 10px\">1YYYYY</span></span><span><input name=\"ff55b00a-f4aa-43b7-b7eb-f545ccac0fd9\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" value=\"2YYYYY\"><span style=\"margin: 0 10px\">2YYYYY</span></span><span><input name=\"ff55b00a-f4aa-43b7-b7eb-f545ccac0fd9\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" value=\"3YYYYY\"><span style=\"margin: 0 10px\">3YYYYY</span></span><span><input name=\"ff55b00a-f4aa-43b7-b7eb-f545ccac0fd9\" onclick=\"onClickCheckbox(event)\" type=\"checkbox\" actype=\"checkbox\" value=\"4YYYYY\"><span style=\"margin: 0 10px\">4YYYYY</span></span></span><span style=\"color: rgb(66, 66, 66);\">互<span id=\"629180d0-ff59-44a5-8f86-9c7360961e12\" class=\"ac-radio-group\"><span><input name=\"629180d0-ff59-44a5-8f86-9c7360961e12\" onclick=\"onClickRadio(event)\" type=\"radio\" checked=\"true\" style=\"vertical-align: middle;\" value=\"1XXXXX\" actype=\"radio\"><span style=\"margin: 0 10px\">1XXXXX</span></span><span><input name=\"629180d0-ff59-44a5-8f86-9c7360961e12\" onclick=\"onClickRadio(event)\" type=\"radio\" style=\"vertical-align: middle;\" value=\"2XXXXX\" actype=\"radio\"><span style=\"margin: 0 10px\">2XXXXX</span></span><span><input name=\"629180d0-ff59-44a5-8f86-9c7360961e12\" onclick=\"onClickRadio(event)\" type=\"radio\" style=\"vertical-align: middle;\" value=\"3XXXXX\" actype=\"radio\"><span style=\"margin: 0 10px\">3XXXXX</span></span></span></span><span style=\"color: rgb(66, 66, 66);\">交<input id=\"9013b8fc-e610-419d-bba0-196ec76b73cd\" type=\"text\" value=\"法师打发斯蒂芬\" onkeyup=\"onKeyUpInput(event)\" actype=\"text\" style=\"width: 158px;\"><select id=\"a0a8252d-94b3-4436-9433-d37e589508eb\" class=\"select ac-select\" onchange=\"onChangeSelect(event)\"><option name=\"a0a8252d-94b3-4436-9433-d37e589508eb\" value=\"支付宝\" selected=\"\">支付宝</option>,<option name=\"a0a8252d-94b3-4436-9433-d37e589508eb\" value=\"银行卡\">银行卡</option>,<option name=\"a0a8252d-94b3-4436-9433-d37e589508eb\" value=\"微信\">微信</option></select></span>'\n\n    return (\n      <div className=\"wordTest\">\n        <AcEditorWord\n          wordId=\"wordTestId\"\n          fileName=\"合同\"\n          wordStyles={styles}\n          title={<button>导出word</button>}\n        />\n        <AcEditorShow\n          htmlString={htmlString} // 用 AcEditorShow 生成的html字符串\n          editorId=\"wordTestId\" // 组件 id\n          isActive={isActive} // 组件是否可以操作\n          defaultData={defaultData} // 替换组件默认值\n          waterMarkerText=\"用友网络\" // 添加水印\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 展示用 AcEditorSany 组件生成的 html 字符串转换成word 格式下载"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
