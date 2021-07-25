import * as React from 'react';
import { useState } from 'react';
import * as api from '../../services/api.service';
import * as NotificationService from '../../services/notification.service';

import '../../css/form_styles.css';
import RoomDetailsModal from './RoomDetailsModal';
import RoomDetails from './RoomDetails';
import Input from '../../components/Input';
import Section from '../../components/Section';
import Button from '../../components/Button';
import NewStaffModal from './NewStaffModal';
import MemberDetails from './MemberDetails';
import Uploader from '../../components/Upload';
import { useHistory } from 'react-router-dom';
import { Modal, Select, Spin } from 'antd';
import { onChange, onInput } from '../../shared/utils';

const Index = () => {
  const history = useHistory();
  const [state, setState] = useState<any>({
    loading: false,
    pcrTestTypes: [],
    members: [],
    labCRFile: [],
    mohFile: [],
    clinicCRFile: [],
  });

  const { members, pcrTestTypes, isStaffModalVisible, isModalVisible } = state;

  const addItem = (item) => {
    setState((prev) => ({
      ...prev,
      pcrTestTypes: prev.pcrTestTypes.concat(item),
      isModalVisible: false,
    }));
  };

  const deleteRoom = (item) => {
    setState((prev) => ({
      ...prev,
      pcrTestTypes: prev.pcrTestTypes.filter((r) => r !== item),
      isModalVisible: false,
    }));
  };

  const deleteMember = (item) => {
    setState((prev) => ({
      ...prev,
      members: prev.members.filter((r) => r !== item),
      isStaffModalVisible: false,
    }));
  };

  const addStaffMember = (member) => {
    setState((prev) => ({
      ...prev,
      members: prev.members.concat(member),
      isStaffModalVisible: false,
    }));
  };

  const register = async () => {
    if (state.pageType === 'Lab') {
      if (!state.labCRFile.length) {
        NotificationService.error('At least one Lab CR file is required');
        return;
      }
      setLoading(true);
      const { id, error } = await api.registerLab(state);
      if (error) {
        NotificationService.error(error.message);
      } else {
        await api.uploadLabCRFile(id, state.labCRFile, true);
        await api.uploadMohFile(id, state.mohFile);
        history.push('/thanks');
      }
      setLoading(false);
    } else {
      if (!state.labCRFile.length) {
        NotificationService.error('At least one Lab CR file is required');
        return;
      }
      if (!state.mohFile.length) {
        NotificationService.error('At least one MoH Letter is required');
        return;
      }
      if (!state.clinicCRFile.length) {
        NotificationService.error(
          'At least one Clinic CR file is required',
        );
        return;
      }
      setLoading(true);
      const { id, error } = await api.registerClinic(state);
      if (error) {
        NotificationService.error(error.message);
      } else {
        await api.uploadLabCRFile(id, state.labCRFile);
        await api.uploadMohFile(id, state.mohFile);
        await api.uploadClinicCRFile(id, state.clinicCRFile);
        history.push('/thanks');
      }
      setLoading(false);
    }
  };

  const setLoading = (loading) => {
    setState((prev) => ({ ...prev, loading: loading }));
  };

  const showModal = () => {
    setState((prev) => ({ ...prev, isModalVisible: true }));
  };

  const showStaffModal = () => {
    setState((prev) => ({ ...prev, isStaffModalVisible: true }));
  };

  const onClose = () => {
    setState((prev) => ({
      ...prev,
      isModalVisible: false,
      isStaffModalVisible: false,
    }));
  };

  const pageTypeOptions = ['Sample Collector', 'Lab'];

  return (
    <>
      <div className="container mainTextDir">
        <div style={{ width: '40rem' }}>
          <h1 style={{ fontWeight: 'bold' }} id="registrationPage">
            Sahala PCR Test Registration
          </h1>
          <div style={{ textAlign: 'center' }}>
            <img
              src="css/images/Page Header Illustration.png"
              style={{ width: '30rem' }}
            />
          </div>

          <Section
            title="Clinic Details"
            description={`Please enter your clinic details below, in both Arabic and English (where applicable).

              Sample Collector: A sample collector is a clinic that collects PCR samples, sample collectors need to be connected to a lab in order to have their samples processed.

              Lab: A lab is an entity that processes collected PCR samples, for the purposes of this dashboard labs cannot collect samples, sample need to be collected by a sample collector.

              If your institution satisfies both definitions, please fill the form twice once for each Establishment Type.`}
          />

          <Select  {...onChange(state, setState, 'pageType')} placeholder="Establishment Type (Sample Collector or Lab)"
                   allowClear>
            {pageTypeOptions.map(option => <Select.Option value={option}>{option}</Select.Option>)}

          </Select>

          {state.pageType === 'Sample Collector' &&
          <>
            <Input
              {...onInput(state, setState, 'clinicName')}
              label="Clinic Name"
            />
            <Input
              {...onInput(state, setState, 'clinicNameArab')}
              label="Clinic Name (Arabic)"
            />
            <Input
              {...onInput(state, setState, 'clinicWebsite')}
              label="Clinic Website (optional)"
            />
            <Input {...onInput(state, setState, 'governate')} label="Governate" />
            <Input {...onInput(state, setState, 'city')} label="City/Welayat" />
            <Input
              {...onInput(state, setState, 'clinicDescription')}
              label="Clinic Description"
              type="textarea"
            />
            <Input
              {...onInput(state, setState, 'clinicDescriptionArab')}
              label="Clinic Description (Arabic)"
              type="textarea"
            />
            <Section
              title="Clinic CR Details"
              description="Please enter the details of your clinc’s Company Registration. eMushrif will use these details to draft a business contract between your clinic and eMushrif."
            />
            <Input
              {...onInput(state, setState, 'legalCompanyName')}
              label="Legal Company Name (as written on CR)"
            />
            <Input {...onInput(state, setState, 'clinicCRNumber')} label="CR Number" />
            <Input
              {...onInput(state, setState, 'contactPerson')}
              label="Contact Person (as listed on CR)"
            />
            <Input
              {...onInput(state, setState, 'contactDetails')}
              label="Contact Details (as listed on CR)"
            />
            <Input
              {...onInput(state, setState, 'signatoryName')}
              label="Authorized Signatory Name"
            />
            <Input
              {...onInput(state, setState, 'signatoryPhoneNumber')}
              label="Authorized Signatory Phone Number"
            />
            <Input
              {...onInput(state, setState, 'signatoryEmail')}
              label="Authorized Signatory Email"
            />
            <Uploader
              title="Please Upload a copy of CR (1MB Max)"
              onUpload={(text) =>
                setState((prevState) => ({ ...prevState, clinicCRFile: text }))
              }
            />

            <Section
              title="Clinic’s Contracted Lab Details"
              description="Please enter the details of you the lab, contracted to test the samples collected by your clinic."
            />
            <Input {...onInput(state, setState, 'labName')} label="Lab Name" />
            <Input
              {...onInput(state, setState, 'legalLabName')}
              label="Legal Lab Name (as written on CR)"
            />
            <Input {...onInput(state, setState, 'labCRNumber')} label="CR Number" />
            <Uploader
              title="Please Upload a copy of the Lab’s CR"
              onUpload={(text) =>
                setState((prevState) => ({ ...prevState, labCRFile: text }))
              }
            />

            <Section
              title="MoH Letter of Approval"
              description="Please upload a copy of the letter of approval from the Ministry of Health."
            />
            <Uploader
              title="Please Upload a copy of MoH letter of approval"
              onUpload={(text) =>
                setState((prevState) => ({ ...prevState, mohFile: text }))
              }
            />

            <Section
              title="Clinic’s Contracted Lab Details"
              description="Please enter the details of your clinic’s bank account. eMushrif will use these details to set up the reconciliation process with your clinic. Reconciliation between eMushrif and the clinc will happen weekly.

eMushrif will collect the clients' advanced payments, deduct its 15%  fee, and passes on the clincs' payments."
            />
            <Input {...onInput(state, setState, 'bankName')} label="Bank Name" />
            <Input {...onInput(state, setState, 'branch')} label="Branch" />
            <Input
              {...onInput(state, setState, 'bankAccountName')}
              label="Bank Account Number"
            />

            <Section
              title="Clinic Focal Point"
              description="Please share the name and the contact details of the focal point within your clinic. The focal point needs to be a person that eMushrif can communicate with when needed."
            />
            <Input
              {...onInput(state, setState, 'focalPointName')}
              label="Focal Point Name"
            />
            <Input
              {...onInput(state, setState, 'focalPointEmail')}
              label="Focal Point Email"
            />
            <Input
              {...onInput(state, setState, 'focalPointPhoneNumber')}
              label="Focal Point Phone Number"
            />
            <Section
              title="Sahala Access"
              description="Please share the information about the staff you would like to provide Sahala platform access to. The staff will be able to log into the platform using either their mobile number or email.

Please enter the details of a minimum of 2 and a maximum of 5 staff members. "
            />

            <MemberDetails details={members} onDelete={deleteMember} />
            <Button
              withIcon={true}
              text="Add A New Staff Member"
              onClick={showStaffModal}
              type="primary"
            />

            <Section
              title="PCR Test Type Details"
              description="Please enter the details of the different PCR tests that you would like to display on the platform. Please make sure this information is accurate, as eMushrif will showcase it directly on the Sahala platform."
            />

            <RoomDetails details={pcrTestTypes} onDelete={deleteRoom} />

            <Button
              withIcon={true}
              text="Add A New PCR Test Type"
              onClick={showModal}
              type="primary"
            />
          </>}

          {state.pageType === 'Lab' &&
          <>
            <Input
              {...onInput(state, setState, 'labName')}
              label="Lab Name"
            />
            <Section
              title="Lab CR Details"
              description="Please enter the details of your clinc’s Company Registration. eMushrif will use these details to draft a business contract between your lab and eMushrif."
            />
            <Input
              {...onInput(state, setState, 'labCompanyName')}
              label="Legal Company Name (as written on CR)"
            />
            <Input
              {...onInput(state, setState, 'labCRNumber')}
              label="CR Number"
            />
            <Input
              {...onInput(state, setState, 'contactPerson')}
              label="Contact Person (as listed on CR)"
            />
            <Input
              {...onInput(state, setState, 'contactDetails')}
              label="Contact Details (as listed on CR)"
            />
            <Input
              {...onInput(state, setState, 'authorizedSignatoryName')}
              label="Authorized Signatory Name"
            />
            <Input
              {...onInput(state, setState, 'authorizedSignatoryPhoneNumber')}
              label="Authorized Signatory Phone Number"
            />
            <Input
              {...onInput(state, setState, 'authorizedSignatoryEmail')}
              label="Authorized Signatory Email"
            />
            <Uploader
              title="Please Upload a copy of CR (1MB Max)"
              onUpload={(text) =>
                setState((prevState) => ({ ...prevState, labCRFile: text }))
              }
            />

            <Section
              title="MoH Letter of Approval"
              description="Please upload a copy of the letter of approval from the Ministry of Health."
            />
            <Uploader
              title="Please Upload a copy of MoH letter of approval"
              onUpload={(text) =>
                setState((prevState) => ({ ...prevState, mohFile: text }))
              }
            />
            <Section
              title="Lab Focal Point"
              description="Please share the name and the contact details of the focal point within your clinic. The focal point needs to be a person that eMushrif can communicate with when needed."
            />
            <Input
              {...onInput(state, setState, 'focalPointName')}
              label="Focal Point Name"
            />
            <Input
              {...onInput(state, setState, 'focalPointEmail')}
              label="Focal Point Email"
            />
            <Input
              {...onInput(state, setState, 'focalPointPhoneNumber')}
              label="Focal Point Phone Number"
            />
            <Section
              title="Sahala Access"
              description="Please share the information about the staff you would like to provide Sahala platform access to. The staff will be able to log into the platform using either their mobile number or email.

Please enter the details of a minimum of 2 and a maximum of 5 staff members. "
            />

            <MemberDetails details={members} onDelete={deleteMember} />
            <Button
              withIcon={true}
              text="Add A New Staff Member"
              onClick={showStaffModal}
              type="primary"
            />
          </>
          }

          <Button
            text="Submit Registration Form"
            onClick={register}
            fullWidth={true}
          />
          <br />
          <br />
        </div>
      </div>
      <NewStaffModal
        isVisible={isStaffModalVisible}
        onOk={addStaffMember}
        onClose={onClose}
      />
      <RoomDetailsModal
        isVisible={isModalVisible}
        onOk={addItem}
        onClose={onClose}
      />
      <Modal visible={state.loading} footer={null} closable={false}>
        <div className="upload-modal">
          <Spin />
          <p>Uploading files. Please wait</p>
        </div>
      </Modal>
    </>
  );
};

export default Index;
