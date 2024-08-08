import { ServiceHttp } from "../serviceHttp";

const serviceMicroBusiness = new ServiceHttp("/microbusiness/");
const serviceMicroBusinessEdit = new ServiceHttp("/microbusiness/update");


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


export const putMicrobusiness = async (id, body, token) => {
  try {
    console.log("ID del microemprendimiento:", id);
    console.log("Datos del microemprendimiento a actualizar:", body);
    console.log("Token de autenticación:", token);

    // Llamar al servicio PUT con ID, cuerpo y token
    const data = await serviceMicroBusinessEdit.put(id, body, token);

    console.log("Respuesta del servicio:", data);

    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error("Error en putMicrobusiness:", error);
    throw error;
  }
};
