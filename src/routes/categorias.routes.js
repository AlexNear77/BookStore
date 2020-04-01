// IMPORTACIONES MODULS //
const {Router} = require('express');
const router = Router();

const { renderEmprendimiento, renderAdministracion, renderSuperacionPersonal
} = require('../controllers/categorias.controller');

router.get('/categorias/emprendimiento', renderEmprendimiento );

router.get('/categorias/administracion', renderAdministracion );

router.get('/categorias/superacionPersonal', renderSuperacionPersonal );

module.exports = router;