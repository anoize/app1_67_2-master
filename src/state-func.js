import React ,{useState, usestate} from 'react';

export default function MessageBox(){
    let [text, setText] = useState('Hello World')
    let [size, setSize] = React.useState(16)

    const onClickSetText = () => {
        let t = prompt('กำหนดข้อความ')
        if (t) {
            setText(t)
        }
    }
    const onClickZoomln = () => {
        let newSize = size+1
        setSize(newSize)
    }
    let msgboxSyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,
        backgroundColor:'#ccc',
        padding: 5,
        textAlign: 'left'
    }

    return (
        <div style={{textAlign:'center',marginTop:20}}>
            <div style={msgboxSyle}>[text]</div>
            <button onClick={onClickSetText}>ข้อความ</button>
            <button onClick={onClickZoomln}>เพิ่มขนาด</button>
            <button onClick={() => setSize(size - 1)}>]ลดขนาด</button>



        </div>
           
    
    
    
    
        )


}