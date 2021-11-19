const yup = require('yup');
const errores = require('../errores/errores');

module.exports = {

    validacionDataIds: (data) => {
        const schema = yup.object().shape({
            id: yup.number()
                    .min(31)
                    .integer()
                    .nullable(true)
                    .typeError('id must be a number')
                    .positive('id must be greater than zero')
                    .required('id is required')
           // email: yup.string().matches(/^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/).required(),
        });
        console.log("alert: ")
        schema.validateSync(data);
        console.log("esss: ")
    },

    validacionDatosPUT: (data) => {
      const schema = yup.object().shape({
          id: yup.number().min(1).integer().nullable(true).typeError('id must be a number').positive('id must be greater than zero').required('id is required'),
          nombres: yup.string(true).min(5).nullable(true).matches(/^[aA-zZ\s]+$/, "solo se permiten letras ").typeError('nombres must be a string').required('nombres is required'),
          apellido: yup.string().min(5).nullable(true).matches(/^[aA-zZ\s]+$/, "solo se permiten letras ").typeError('apellido must be a string').required('apellido is required'),
          direccion: yup.string().min(5).nullable(true).typeError('direccion must be a strig').required('direccion is required'),
          cod_postal: yup.number().min(4).nullable(true).typeError('cod_postal must be a number').required('cod_postal is required'),
          telefono: yup.number().min(2).integer().nullable(true).typeError('telefono must be a number').required('telefono is required'),
        });
        schema.validateSync(data);
    },

        validacionDatosPOST: (data) => {

        const schema = yup.object().shape({
          id: yup.number().min(1).integer().nullable(true).typeError('id must be a number').positive('id must be greater than zero'),
          nombres: yup.string().min(5).nullable(true).matches(/^[aA-zZ\s]+$/, "solo se permiten letras ").typeError('nombres must be a string').required('nombres is required'),
          apellido: yup.string().min(5).nullable(true).matches(/^[aA-zZ\s]+$/, "solo se permiten letras ").typeError('apellido must be a string').required('apellido is required'),
          direccion: yup.string().min(5).nullable(true).typeError('direccion must be a strig').required('direccion is required'),
          cod_postal: yup.number().min(4).nullable(true).typeError('cod_postal must be a number').required('cod_postal is required'),
          telefono: yup.number().min(2).integer().nullable(true).typeError('telefono must be a number').required('telefono is required'),

        });
        schema.validateSync(data);
    }

      validacionDat: (data) => {
      const schema = yup.object().shape({
      id: yup.number().min(1).integer().nullable(true).typeError('id must be a number').positive('id must be greater than zero'),
      user: yup.string().min(3).nullable(true).matches(/^[aA-zZ\s]+$/, "solo se permiten letras ").typeError('nombres must be a string').required('nombres is required'),
      name: yup.string().min(3).nullable(true).matches(/^[aA-zZ\s]+$/, "solo se permiten letras ").typeError('apellido must be a string').required('apellido is required'),
      pass: yup.string().min(8).nullable(true).required('password is required'),

    });

    schema.validateSync(data);
  }

}
