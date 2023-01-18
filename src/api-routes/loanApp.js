import express  from "express";
import { deleteLoanAppForm, getloanAppById, getLoanData, postLoanApp, updateLoanAppForm } from "../api/loanApp.js";
const routes=express.Router();


routes.post('/loanapp', postLoanApp )
routes.get('/loanapp', getLoanData )
routes.get('/loanapp/:_id', getloanAppById )
routes.put('/loanapp/:_id', updateLoanAppForm )
routes.delete('/loanapp/:_id', deleteLoanAppForm )


export default routes