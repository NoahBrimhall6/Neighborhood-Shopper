const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/create', async (req, res) => {
    try {
        const dbCommentData = await Comments.create({
            comment: req.body.comment,
            user_id: req.body.user_id,
            product_id: req.body.product_id
        });
        res.status(200).json(dbCommentData)
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

router.put('/destroy/:id', async (req, res) => {
    try {
       await Comments.destroy({ where: {id:req.params.id}})
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;