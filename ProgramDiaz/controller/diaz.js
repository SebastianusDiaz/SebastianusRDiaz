const diaz = require('../model/diaz');

const createDiaz = (req,res) => {
    const diaz = new Diaz({
        namaLokasi: req.body.namaLokasi,
        alamat: req.body.alamat,
    });

    console.log(diaz);
    diaz.save()
    .then((createdDiaz)=>{
        res.status(201).json({
            message : "Data berhasil disimpan",
            diazId : createdDiaz._id
        });
    })
    .catch((err)=>{
        // console.log(err);
        res.status(500).json({
            message : "Internal Server Error",
            // error : err
        });
    });
};

const readDiaz = (req,res) => {
    Diaz.find()
    .then((documents)=>{
        res.status(200).json({
            message : "Get Data Pariwisata",
            diaz : documents
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message : "Internal Server Error",
            error : err
        });
    });
};
const deleteDiaz = (req, res) => {
    Diaz.deleteOne({_id: req.params.id})
    .then((result)=>{
        res.status(200).json({
            message: "Data berhasil dihapus",
            result: result
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message: "Internal Server Error",
            error: err
        });
    });
};

module.exports = {createDiaz, readDiaz, deleteDiaz};