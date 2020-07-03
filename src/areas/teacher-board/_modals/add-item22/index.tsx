import React, {useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';

function AddItemModal(props: IProps) {
    const [addItemModal] = a.Modal.useModal();
    const [addItemForm] = a.Form.useForm();
    const [title, setTitle] = useState('');

    function onFinish() {
        props.onClick(title);
    }

    return <a.Form form={addItemForm} onFinish={() => onFinish()} name={"add_item_form" + props.formKey} key={"add_item_form" + props.formKey}>
        <a.Form.Item key={'module:title'}
                     name={'module:title:'}
                     fieldKey={'add_item:title'}
                     rules={[{required: true, message: props.errorMessage}]}
                     style={{marginBottom: 0, paddingTop: '12px'}}
                     className="custom-form-item__wrapper"
        >
            <div className="custom-form-item">
                <a.Input onChange={(e) => setTitle(e.target.value)} />
                <div className="custom-form-item__actions">
                    <a.Button htmlType="submit" style={{marginLeft: '.5rem'}} icon={<i.PlusOutlined />}>
                        {props.buttonValue}
                    </a.Button>
                </div>
            </div>
        </a.Form.Item>
    </a.Form>
}

interface IProps {
    buttonValue: string;
    errorMessage: string;
    onClick(text: string): void;
    formKey: any;
}

export default AddItemModal
