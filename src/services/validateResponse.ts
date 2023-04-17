import { ResponsePromise } from 'ky';
import { z, ZodFirstPartySchemaTypes } from 'zod';

const validateResponse = async <
  ValidationSchema extends ZodFirstPartySchemaTypes,
>({
  response,
  validationSchema,
}: {
  response: ResponsePromise;
  validationSchema?: ValidationSchema;
}): Promise<z.infer<ValidationSchema>> => {
  if (!validationSchema) {
    return response.json();
  }

  const json = await response.json();
  return validationSchema.parse(json);
};

export default validateResponse;
