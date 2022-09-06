const fileUploadController = {
    storeFile: (req, res) =>{
        const { filename } = req.file

        res.json({ mensagem: filename })
    }
}

export default fileUploadController