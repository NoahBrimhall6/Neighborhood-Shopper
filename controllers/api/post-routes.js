const router = require('express').Router();
const { Products } = require('../../models');

router.post('/create', async (req, res) => {
    
    try {
        const dbPostData = await Products.create({
            title: req.body.title,
            description: req.body.description,
            zip_code: req.body.zip_code,
            price: req.body.price,
            main_image: req.body.main_image,
            second_image: req.body.second_image,
            third_image: req.body.third_image,
            user_id: req.body.user_id
        });
        res.status(200).json(dbPostData)
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

router.put('/destroy/:id', async (req, res) => {
    try {
       await Products.destroy({ where: {id:req.params.id}})
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;