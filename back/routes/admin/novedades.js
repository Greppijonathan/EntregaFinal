const express = require('express');
const router = express.Router();
const novedadesModel = require('../../models/novedadesModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

// GET home page
router.get('/', async function (req, res, next) {
    try {
        var novedades = await novedadesModel.getNovedades();
        novedades = novedades.map(novedad => {
            if (novedad.img_id) {
                const imagen = cloudinary.image(novedad.img_id, {
                    width: 100,
                    height: 100,
                    crop: 'fill'
                });
                return {
                    ...novedad,
                    imagen
                };
            } else {
                return {
                    ...novedad,
                    imagen: ''
                };
            }
        });
        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            novedades: novedades
        });
    } catch (error) {
        next(error);
    }
});

// GET agregar page
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

// POST agregar
router.post('/agregar', async (req, res, next) => {
    try {
        let img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            let imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo && req.body.subtitulo && req.body.cuerpo) {
            await novedadesModel.insertNovedades({
                ...req.body,
                img_id: img_id
            });
            res.redirect('/admin/novedades');
        } else {
            res.status(400).send('Todos los campos son obligatorios');
        }
    } catch (error) {
        next(error);
    }
});

// GET eliminar
router.get('/eliminar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        await novedadesModel.deleteNovedadesById(id);
        res.redirect('/admin/novedades');
    } catch (error) {
        next(error);
    }
});

// GET modificar
router.get('/modificar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        var novedad = await novedadesModel.getNovedadesById(id);
        res.render('admin/modificar', { layout: 'admin/layout', novedad });
    } catch (error) {
        next(error);
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        let novedad = await novedadesModel.getNovedadesById(id);

        if (novedad.img_id) {
            await destroy(novedad.img_id);
        }

        await novedadesModel.deleteNovedadesById(id);
        res.redirect('/admin/novedades');
    } catch (error) {
        next(error);
    }
});

// POST modificar
router.post('/modificar', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        }

        if (req.files && Object.keys(req.files).length > 0) {
            const imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        }

        if (borrar_img_vieja && req.body.img_original) {
            await destroy(req.body.img_original);
        }

        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
        };
        await novedadesModel.modificarNovedadesById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la novedad'
        });
    }
});

module.exports = router;
