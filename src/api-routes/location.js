import express  from "express";
import { deleteDistrictLoc, deleteProvinceLoc, deleteTehsilLoc, deleteVillageLoc, districtAdd, getDistrictLoc, getProvinceLoc, getTehsileLoc, getVillageLoc, ProvinceAdd, tehsilAdd, updateDistrictLoc, updateProvinceLoc, updateTehsilLoc, updateVillageLoc, villageAdd } from "../api/location.js";
const routes=express.Router();



routes.post('/villageadd', villageAdd )
routes.get('/village', getVillageLoc )
routes.delete('/village/:_id', deleteVillageLoc )
routes.put('/village/:_id', updateVillageLoc )

routes.post('/tehsiladd', tehsilAdd )
routes.get('/tehsil', getTehsileLoc )
routes.delete('/tehsil/:_id', deleteTehsilLoc )
routes.put('/tehsil/:_id', updateTehsilLoc )

routes.post('/provinceadd', ProvinceAdd )
routes.get('/province', getProvinceLoc )
routes.delete('/province/:_id', deleteProvinceLoc )
routes.put('/province/:_id', updateProvinceLoc )

routes.post('/districtadd', districtAdd )
routes.get('/district', getDistrictLoc )
routes.delete('/district/:_id', deleteDistrictLoc )
routes.put('/district/:_id', updateDistrictLoc )


export default routes