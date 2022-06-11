import express from 'express';
// import translate from 'translate';

const router = express.Router();

// translate.url = "localhost:3000";
// translate.key = process.env.TRANSLATE_KEY;


router.get('/translationlist', function (request, response) {
    var lang = request.acceptsLanguages('en', 'es',);
    response.json(lang)
    if (lang) {
        console.log('The first accepted of [  en, es] is: ' + lang);
    }
    else {
        console.log('None of [ en, es] is accepted');
    }
});
// router.get('/translation', async  (req, res) => {
//     translate.engine = 'libre';
//     const translation_string = await translate();
//    res.send(translation_string);
//     console.log(translation_string);
// })



export default router;