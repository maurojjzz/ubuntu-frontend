import { ServiceHttp } from "../serviceHttp";

const serviceMicroBusiness = new ServiceHttp("/microbusiness/");

export const postMicroBusiness = async (body, token) => {
  try {
    const data = await serviceMicroBusiness.post(body, token);
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}