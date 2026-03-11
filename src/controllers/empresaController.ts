import { RequestHandler } from "express";
import Empresa from "../models/empresaModel";
import Tier from "../models/tierModel";

// GET ALL 
export const getAllEmpresas: RequestHandler = (req, res) => {
    Empresa.findAll({ include: [{ model: Tier, as: 'nivel' }] })
        .then((data) => res.status(200).json({ status: "success", payload: data }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};

// GET BY ID 
export const getEmpresaById: RequestHandler = (req, res) => {
    const id = String(req.params.id);
    Empresa.findByPk(id, { include: [{ model: Tier, as: 'nivel' }] })
        .then((data) => res.status(200).json({ status: "success", payload: data }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};

// POST 
export const createEmpresa: RequestHandler = (req, res) => {
    Empresa.create({ ...req.body })
        .then((data) => res.status(200).json({ status: "success", payload: data }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};

// PATCH
export const updateEmpresa: RequestHandler = (req, res) => {
    const id = req.params.id;
    Empresa.update({ ...req.body }, { where: { id_empresa: id } })
        .then(() => res.status(200).json({ status: "success", message: "Empresa actualizada" }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};

// DELETE 
export const deleteEmpresa: RequestHandler = (req, res) => {
    const id = req.body.id; // El ID viene en el body
    Empresa.destroy({ where: { id_empresa: id } })
        .then(() => res.status(200).json({ status: "success", message: "Empresa eliminada" }))
        .catch((err) => res.status(500).json({ status: "error", message: err.message }));
};