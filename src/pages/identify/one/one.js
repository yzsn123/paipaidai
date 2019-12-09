import React, { PureComponent } from 'react'
import './one.scss'
import {connect} from 'react-redux'
class One extends PureComponent {
    constructor(props){
      super(props);
      this.state={
          imgPathOne:null,
          imgPathTwo:null,
      }
    }
    render() {
        return (
            <div className="One">
                <div className="title">
                    <h3>身份证信息验证</h3>
                    <span>拍拍贷承诺保护您的信息安全</span>
                </div>

                <ul className="identify">
                   <li>
                        <img src={this.state.imgPathOne || require("@/assets/sfz_03.jpg")} alt=""/>
                        <span onClick={this.cameraAction.bind(this,1)}>点击识别</span>
                   </li>
                   <li>
                        <img src={this.state.imgPathTwo || require("@/assets/sfz_03.jpg")} alt=""/>
                        <span onClick={this.cameraAction.bind(this,2)}>点击识别</span>
                   </li>
                </ul>

                <div className="tabs" onClick={this.nextAction.bind(this)}>下一步</div>
            </div>
        )
    }

    cameraAction(count){
        if(window.plus){
            let c =  window.plus.camera.getCamera();
            c.captureImage(
              (file)=>{
                let newPath = window.plus.io.convertLocalFileSystemURL(file);

                  if(count === 1){
                    this.setState({
                      imgPathOne:newPath
                    })
                  }else if(count === 2){
                    this.setState({
                      imgPathTwo:newPath
                    })
                  }
              },
              (error)=>{
                alert('拍照失败:', error.message);
              }
            );
          }else{
              alert('该设备不支持拍照')
          }
    }
    nextAction(){
      if(this.state.imgPathOne && this.state.imgPathTwo){
      // if(true){
        this.props.identfy(true);
        //认证完要跳转的路径
        let path = this.props.idPath;
        this.props.history.push(path);
      }else{
        alert('请补全所有身份证信息');
      }
    }
}
const mapStateToProps = (state)=>{
    return {
        idPath:state.Mine.idPath
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
        identfy(bol){
            dispatch({
                type:'identify',
                val:bol
            })
        }
      }
    }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(One);
  
  