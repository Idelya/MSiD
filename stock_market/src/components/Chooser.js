import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import React, { useState } from 'react';
import { TextField, MenuItem,Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'

function Chooser(props){
  const now = new Date();
  const [endDate, setEndDate] = useState(now);
  const [startDate, setStartDate] = useState(now);
  const [market, setMarket] = useState("BTC_USD");

		return (<div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          id="date-picker-start"
          label="Start date"
          value={startDate}
          onChange={(e)=>{setStartDate(e)}}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          label="End date"
          id="date-picker-end"
          value={endDate}
          onChange={(e)=>{setEndDate(e)}}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <TextField id="select" label="Market" value="BTC_USD" select>
        <MenuItem value="BTC_USD">BTCUSD</MenuItem>
        <MenuItem value="LTC_USD">LTCUSD</MenuItem>
     </TextField>
     <Button variant="contained" size="medium" color="primary" onClick = {(e) => props.onClick(market,startDate,endDate)}>
          Submit
    </Button>
    </div>
  );

}

export default Chooser;
