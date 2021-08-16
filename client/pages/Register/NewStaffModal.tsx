import * as React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { RegisterMemberDto } from '../../services/dto/register-member.dto';
import * as NotificationService from '../../services/notification.service';

const NewStaffModal = ({ isVisible, onOk, onClose, members }) => {
  const [details, setDetails] = useState<RegisterMemberDto>({
    email: '',
    name: '',
    phoneNumber: '',
  });

  const addItem = () => {
    if (members.some(member => member.email.toLowerCase() === details.email.toLowerCase())) {
      NotificationService.error('Staff member with same email already exist');
      return;
    }

    if (members.some(member => member.phoneNumber.toLowerCase() === details.phoneNumber.toLowerCase())) {
      NotificationService.error('Staff member with same phone number already exist');
      return;
    }

    onOk(details);
    setDetails({
      email: '',
      name: '',
      phoneNumber: '',
    });
  };

  const onCancel = () => {
    setDetails({
      email: '',
      name: '',
      phoneNumber: '',
    });
    onClose();
  };

  const renderFooter = () => {
    return (
      <Button
        text="Add A New Staff Member"
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
      <img src="../../assets/Illustration-staff.svg" />
      <div className="modal-description">
        Please enter the details of the staff member you would like to provide Sahala access to.
      </div>
      <form>
        <Input
          value={details.name}
          label="Staff Name"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, name: text }))
          }
        />
        <Input
          value={details.phoneNumber}
          label="Staff Mobile Number"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, phoneNumber: text }))
          }
        />
        <Input
          value={details.email}
          label="Staff Email"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, email: text.trim() }))
          }
        />
      </form>
    </Modal>
  );
};

export default NewStaffModal;
