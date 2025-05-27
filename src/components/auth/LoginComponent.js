import { useReducer } from 'react';
import { Flex,Input,Button,Card } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const LoginComponent = () => {
  const handleLogin = (event) => {
    event.preventDefault();

  };
const setCount = (counter,action) => {
  switch(action.type){
    case 'add' :
      return {...counter,count :  counter.count+1};
    case 'sub' :
      return {...counter,count :  counter.count-1}
    default:
      return counter;
    }
}
 const intialState = { count: 0 };
 const [counter,dispatch1] = useReducer(setCount,intialState);
 const { count } = counter;
 const handlePlus = () =>{
    dispatch1({type:'add'});
 }
 const handleMinus = () =>{
    dispatch1({type:'sub'});
 }

 


  return (
      <Flex justify="space-around" align="flex-start"  style={{ padding: 10,backgroundColor: '#54833dba' }}>
        <Card className="login-component">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <Input type="text" id="username" name="username" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Input type="password" id="password" name="password" required />
            </div>
            <br/>
            <Button type="submit" variant='solid' color="green" gap="2">Login</Button>
          </form>
        </Card>
        <Card className="login-image">
          <h2>Counter Example</h2>
           <Input addonBefore={<PlusOutlined onClick={handlePlus} style={{ cursor: "pointer" }} />}
            type="text" value={count} readOnly placeholder="Type something..."
             addonAfter ={<MinusOutlined onClick={handleMinus} style={{ cursor: "pointer" }} />}/>   
        </Card>
      </Flex>
  );
}
export default LoginComponent;