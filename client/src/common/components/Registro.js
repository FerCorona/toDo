import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { isMobile }  from '../helpers/helpers';

const Registro = ({ }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return(
    <div className='Registro'>
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
        <Form.Item
          label='Confirmar Contraseña'
          name='confirmPassword'
          rules={[{ required: true, message: 'Por favor confirma tu nombre de contraseña!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='link' htmlType='submit'>
            Registrarme
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registro;