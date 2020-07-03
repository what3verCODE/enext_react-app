import React, {useState} from 'react';
import * as a from 'antd';
import {LessonSectionType} from "../../../../core/domain/enum/lesson-section";

function AddLessonSectionModal(props: IProps) {
    const [addSectionSelectData, setAddSectionSelectData] = useState(LessonSectionType.Text);
    const [addSectionForm] = a.Form.useForm();
    const { Option } = a.Select;

    return <a.Modal
        title="Добавить секцию"
        centered
        visible={props.visible}
        footer={[
            <a.Button key="cancel" danger onClick={() => {
                props.visibleChange();
            }}>
                Отмена
            </a.Button>,

            <a.Button key="submit" type="primary" onClick={() => {
                addSectionForm
                    .validateFields()
                    .then(() => {
                        props.onAddSection(addSectionSelectData);
                    })
                props.visibleChange();
            }}>
                Добавить
            </a.Button>
        ]}
    >
        <a.Form form={addSectionForm}
                name="add_section_form"
                size="middle"
                layout="vertical"
        >
            <a.Form.Item initialValue={addSectionSelectData}
                         rules={[{required: true, message: 'Выберите тип секции'}]}
            >
                <a.Select size="middle"
                          onChange={(e) => setAddSectionSelectData(Number.parseInt(e.toString()))}
                >
                    <Option value={LessonSectionType.Text}>Секция с текстом</Option>
                    <Option value={LessonSectionType.Video}>Секция с видео</Option>
                    <Option value={LessonSectionType.Quiz}>Секция с тестом</Option>
                </a.Select>
            </a.Form.Item>
        </a.Form>
    </a.Modal>
}

interface IProps {
    visible: boolean;
    visibleChange(): void;
    onAddSection(section_type: LessonSectionType): void;
}

export default AddLessonSectionModal
