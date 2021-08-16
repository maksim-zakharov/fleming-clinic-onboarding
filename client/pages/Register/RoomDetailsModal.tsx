import * as React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { onInput } from '../../shared/utils';

const defaultState = () => ({
  pcrTestName: '',
  pcrTestNameArab: '',
  price: '',
  pcrTestDescription: '',
  pcrTestDescriptionArab: '',
});

const RoomDetailsModal = (props) => {
  const { isVisible, onOk, onClose } = props;
  const [state, setState] = useState<any>(defaultState());

  const addItem = () => {
    onOk(state);
    setState(defaultState());
  };

  const onCancel = () => {
    setState(defaultState());
    onClose();
  };

  const renderFooter = () => {
    return (
      <Button
        text="Add PCR Type"
        onClick={addItem}
        type="primary"
        fullWidth={true}
      />
    );
  };

  return (
    <Modal
      title={null}
      visible={isVisible}
      okText="Submit"
      onOk={() => onOk}
      footer={renderFooter()}
      onCancel={onCancel}
    >
      <img src="../../assets/illustration.svg" />
      <div className="modal-description">
        Please enter the details of the PCR test types you would like us to display on the Sahala platform.
      </div>
      <form>
        <Input
          label="PCR Test Name"
          {...onInput(state, setState, 'pcrTestName')}
        />
        <Input
          label="PCR Test Name (Arabic)"
          {...onInput(state, setState, 'pcrTestNameArab')}
        />
        <Input
          label="Price (OMR)"
          {...onInput(state, setState, 'price')}
        />
        <Input
          label="PCR Test Description"
          {...onInput(state, setState, 'pcrTestDescription')}
        />
        <Input
          label="PCR Test Description (Arabic)"
          {...onInput(state, setState, 'pcrTestDescriptionArab')}
        />
      </form>
    </Modal>
  );
};

export default RoomDetailsModal;
