
import { ServiceHttp } from './services/serviceHttp';

const serviceImageUploader = new ServiceHttp("/images/uploadBase64");

export const ServiceUploadImage = async (base64Image, microBusinessId, token) => {
  try {
    const body = {
      fileBase64: base64Image,
      microBusinessId: microBusinessId
    };
    const data = await serviceImageUploader.post(body, token);
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};