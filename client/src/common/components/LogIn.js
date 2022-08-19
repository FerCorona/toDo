import React from 'react';
import { Form, Input, Button, message } from 'antd';

// require('../stylesheets/login.scss');

import { logIn } from '../helpers/api-helpers';

const LogIn = () => {
  const onFinish = (values) => {
    logIn(values)
      .then((data) => {
        const token = data.data.token;
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('id_user', data.data.id_user);
          localStorage.setItem('username', data.data.username);
          message.success('Loggeado correctamente!');
          window.location = window.location.protocol + '//' + window.location.host + '/';
        } else {
          message.error('Usuario no encontrado!');
        }
      })
      .catch(e => console.log(e));
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return(
    <div className='LogIn'>
      <Form
        name='basic'
        labelCol={{
          xs: { span: 24 },
          xl: { span: 24 },
        }}
        wrapperCol={{
          xs: { span: 24 },
          xl: { span: 24 },
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Usuario'
          name='username'
          rules={[{ required: true, message: 'Por favor ingresa tu nombre de usuario!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Contraseña'
          name='password'
          rules={[{ required: true, message: 'Por favor ingresa tu nombre de contraseña!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block >
            Iniciar sesión
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type='link' style={{color: '#ffb300'}} block onClick={() => window.location = window.location.protocol + '//' + window.location.host + '/registro'}>
            Registrate
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogIn;