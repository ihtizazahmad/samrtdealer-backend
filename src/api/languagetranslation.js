import express from 'express';
import translate from 'translate';

const router = express.Router();

router.get('/translation', async  (req, res) => {
    translate.engine = 'libre';
    const translation_string = await translate("hello",'es');
   res.send(translation_string);
    console.log(translation_string);
})



export default router;