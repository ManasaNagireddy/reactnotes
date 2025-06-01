import {useReducer} from 'react';
import {
    Flex,
    Input,
    Button,
    Card,
    Form,
    message
} from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import { useSelector,useDispatch } from 'react-redux';
import {loginUser} from  '../utils/UserSlice';
const LoginComponent = () => {
    const setCount = (counter, action) => {
        switch (action.type) {
            case 'add':
                return {
                    ...counter,
                    count: counter.count + 1
                };
            case 'sub':
                return {
                    ...counter,
                    count: counter.count - 1
                }
            default:
                return counter;
        }
    }
    const intialState = {
        count: 0
    };
    const [counter,
        dispatch1] = useReducer(setCount, intialState);

    const {count} = counter;
    const handlePlus = () => {
        dispatch1({type: 'add'});
    }
    const handleMinus = () => {
        dispatch1({type: 'sub'});
    }

    const [form] = Form.useForm();
    let dispatch = useDispatch();

      const { loading, error, token, user } = useSelector((state) => state.user);
    
    const handleLogin = (values) => {
        const {username, password} = values;
         message.success('Form Submitted successful!');
        dispatch(loginUser({ username, password }));
          console.log("User State:", user);
      console.log("Token State:", token);
    };

    return (
        <Flex
            justify="space-around"
            align="flex-start"
            style={{
            padding: 10,
            backgroundColor: '#54833dba'
        }}>
            <Card className="login-component">
                <h2>Login</h2>
                <Form form={form} layout="horizontal" onFinish={handleLogin} autoComplete="off">
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Please input your username!'
                        }
                    ]}>

                        <Input type="text" id="username" name="username" required/>

                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}>

                        <Input type="password" id="password" name="password" required/>

                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                           Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card className="login-image">
                <h2>Counter Example</h2>
                <Input
                    addonBefore={< PlusOutlined onClick = {
                    handlePlus
                }
                style = {{ cursor: "pointer" }}/>}
                    type="text"
                    value={count}
                    readOnly
                    placeholder="Type something..."
                    addonAfter
                    ={< MinusOutlined onClick = {
                    handleMinus
                }
                style = {{ cursor: "pointer" }}/>}/>
            </Card>
        </Flex>
    );
}
export default LoginComponent;