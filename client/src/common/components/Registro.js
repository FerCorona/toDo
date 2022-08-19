import React from 'react';
import { Form, Input, Button, message } from 'antd';

import { registrarme } from '../helpers/api-helpers';

// require('../stylesheets/login.scss');

const Registro = ({ }) => {
  const onFinish = (values) => {
    registrarme(values)
      .then((data) => {
        message.warning(data.data.message);
        window.location = window.location.protocol + '//' + window.location.host + '/login';
      })
      .catch(e => message.warning('Intenta mas tarde'));
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
          name='password'
          label='Contraseña'
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu contraseña!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='confirm'
          label='Confirmar contraseña'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Por favor confirma tu contraseña!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Las dos contraseñas ingresadas deben ser iguales!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block >
            Registrarme
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registro;