import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
  /** seria um "name: string", mas em vez de "name" pode ser uma variável com qualquer nome.
   * o nome "key" podia ser qualquer outro */
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
