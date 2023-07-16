import * as React from "react";
import * as M from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function DateFilter() {
  dayjs().locale("pt-br").format();
  const [value, setValue] = React.useState<DateRange<Dayjs>>([
    dayjs().locale("pt-br"),
    dayjs(),
  ]);
  const DateFormat = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <M.Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          components={["DateRangePicker", "DateRangePicker"]}
        >
          <DemoItem label="Filtrar por data" component="DateRangePicker">
            <DateRangePicker
            localeText={{
              start: 'Data inicial',
              end: 'Data final',
            }}
              sx={{ width: "500px" }}
              defaultValue={[dayjs(), dayjs()]}

            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>

      <M.Box sx={{
            marginTop:'29px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
        
        <M.TextField
          id="outlined-basic"
          label="Nome do Operador"
          variant="outlined"
        />
      </M.Box>
    </M.Box>
  );
}
