import axios from 'axios';
import { RegisterClinicDto } from './dto/register-clinic.dto';
import { ErrorResponse } from './dto/error-response';

export const registerClinic = (
  data: RegisterClinicDto,
): Promise<ErrorResponse & { id: number }> => {
  return axios.post('/api/register-clinic', data).then((response) => response.data);
};
export const registerLab = (
  data: RegisterClinicDto,
): Promise<ErrorResponse & { id: number }> => {
  return axios.post('/api/register-lab', data).then((response) => response.data);
};
export const uploadClinicCRFile = (
  clinicId: number,
  files: any[],
): Promise<ErrorResponse> => {
  const formData = new FormData();
  formData.append('files', files[0]);

  return axios
    .post(`/api/${clinicId}/clinicCRFile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data);
};
export const uploadMohFile = (
  clinicId: number,
  files: any[],
  isLab?: boolean,
): Promise<ErrorResponse> => {
  const formData = new FormData();
  formData.append('files', files[0]);

  return axios
    .post(
      isLab ? `/api/labs/${clinicId}/mohCRFile` : `/api/${clinicId}/mohCRFile`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response) => response.data);
};
export const uploadLabCRFile = (
  clinicId: number,
  files: any[],
  isLab?: boolean,
): Promise<ErrorResponse> => {
  const formData = new FormData();
  formData.append('files', files[0]);

  return axios
    .post(
      isLab ? `/api/labs/${clinicId}/labCRFile` : `/api/${clinicId}/labCRFile`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response) => response.data);
};
