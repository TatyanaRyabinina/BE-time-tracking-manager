import * as Yup from 'yup';
import validateMiddleware from '../../../core/middleware/validate.middleware';

const validationSchema: Yup.ObjectSchema<{}> = Yup.object().shape({
  email: Yup.string().email()
    .required('Email is required!'),
});

export default validateMiddleware(validationSchema, 'body');