const mongoose = require('mongoose');

const DiazSchema = new mongoose.Schema(
    {
        namaLokasi: {
            type: String,
            required: true
        },
        alamat: {
            type: String,
            required: true
        },
    }
);

module.exports = mongoose.model('Buku', bukuSchema);