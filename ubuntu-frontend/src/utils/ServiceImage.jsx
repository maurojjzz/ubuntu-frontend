
import { ServiceHttp } from './services/serviceHttp';

const serviceImage = new ServiceHttp("/images/uploadBase64");

export const ServiceUploadImage = async (base64Image, microBusinessId, token) => {
  try {
    const body = {
      fileBase64: base64Image,
      microBusinessId: microBusinessId
    };
    const data = await serviceImage.post(body, token);
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const ServicePutImage = async (base64Image, id, token) => {
  try {
    const body = {
      fileBase64: base64Image,
      id: id
    };
    const data = await serviceImage.put(id, body, token);
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export const ServiceDeleteImage = async (id, token) => {
  try {
    const data = await serviceImage.delete(id, token);
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}