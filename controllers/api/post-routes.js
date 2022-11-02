const router = require('express').Router();
const { Products } = require('../../models');

router.post('/create', async (req, res) => {
    
    try {
        const dbPostData = await Products.create({
            title: req.body.productName,
            description: req.body.productDesc,
            price: req.body.productPrice,
            zip_code: req.body.productZipcode,
            main_image: req.body.file1Data,
            second_image: req.body.file2Data,
            third_image: req.body.file3Data,
            user_id: req.session.userId
        });
        res.status(200).json(dbPostData);
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/destroy/:id', async (req, res) => {
    try {
       await Products.destroy({ where: {id:req.params.id}})
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;