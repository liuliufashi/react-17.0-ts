import React from 'react';
import {Button} from "antd";
import './App.css';
interface IP{
    nAme:String,
    nUm:Number,
    sayHi: ()=>string
}
class  App extends React.Component<any, any>{
        constructor(props:any) {
            super(props);
            this.state={
                data:1
            }
        }
   data:IP={
        nAme:"123",
        nUm:0,
       sayHi:()=>{
            return "123"
       }
    }
     datas = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',];
    sel=()=>{
        this.datas.splice(this.datas.length-1,1)
        this.setState({})
    }
render() {

        return (
            <>
                <Button type="primary" size="small"  onClick={()=>{this.sel()}}>
                    {this.data.nAme}+{this.data.nUm}+{this.data.sayHi()}
                </Button>
                {
                    this.datas.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </>
        );
    }
}
export default App;
