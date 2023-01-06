const {response} = require('express');
const { Mantenimiento } = require('../models');

const getMantenimientos = async (req,res = response)=>{
    const {limite = 10, desde=0} = req.query;
    const query = {status:true};

    const [sum, mantenimiento] = await Promise.all([
        Mantenimiento.countDocuments(query),
        Mantenimiento.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.json({
        sum,
        mantenimiento
    })
}

const getMantenimiento = async (req, res = response)=>{
    const {id} = req.params
    const mantenimiento = await Mantenimiento.findById(id);
    res.json(mantenimiento);
}

const createMantenimiento = async(req,res = response)=>{
    const {status, ...body} = req.body;
    const existMantenimiento = await Mantenimiento.findOne({idVehiculo: body.idVehiculo})

    if (existMantenimiento) {
        return res.status(400).json({
            msg:`El mantenimiento ${existMantenimiento.idVehiculo} ya existe `
        })
    }

    const data = {
        ...body,
        idVehiculo: body.idVehiculo
    }
    const mantenimiento = new Mantenimiento(data);
    const newMantenimeinto = await mantenimiento.save();
    res.status(201).json(newMantenimeinto);
}

const updateMantenimiento = async (req,res = response)=>{
    const {id} = req.params;
    const {status, ...data} = req.body;
    const mantenimientoUpdated = await Mantenimiento.findByIdAndUpdate(id, data, {new:true})
    res.json(mantenimientoUpdated);
}

const deleteMantenimiento = async (req,res = response) =>{
    const {id} = req.params;
    const deletedMantenimiento = await Mantenimiento.findByIdAndUpdate(id, {status:false}, {new: true});
    res.json(deletedMantenimiento);
}

module.exports = {
    createMantenimiento,
    getMantenimiento,
    getMantenimientos, 
    updateMantenimiento,
    deleteMantenimiento
}