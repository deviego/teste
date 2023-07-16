import * as M from "@mui/material";
import DateFilter from "./components/dateFilter/inde";
import { useQuery } from "react-query";
import { getAllData } from "./services/api";

function App() {

  const {data, isFetching} = useQuery( ['all-data'], () => getAllData())
  return (
    <M.Box sx={{width:'100%',height: '90vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <M.Box sx={{width:'100%', height:'100%'}}>
        <DateFilter />
      </M.Box>
    </M.Box>
  );
}

export default App;

