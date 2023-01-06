const {Router} = require('express');
const {check} = require('express-validator');

const { createMantenimiento,
    getMantenimiento,
    getMantenimientos,
    updateMantenimiento,
    deleteMantenimiento} = require('../controllers').Mantenimiento;

const {validateFields} = require('../middlewares');

const router = Router();

router.get('/', getMantenimientos);

router.get('/:id', [
    check('id', 'Este no es un ID de Mongo correcto').isMongoId()
], getMantenimiento);

router.post('/', [
    check('idVehiculo', 'El idVehiculo es requerido').not().isEmpty(), validateFields
], createMantenimiento);

router.put('/:id', updateMantenimiento);

router.delete('/:id', [
    check('id', 'Debe ser un id de mongo VALIDO').isMongoId()
], deleteMantenimiento);

module.exports =router;