import {MuiPickersUtilsProvider, KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import React, { useState } from 'react';
import { TextField, MenuItem,Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'

function Chooser(props){
  const now = new Date();
  const [endDate, setEndDate] = useState(now);
  const [startDate, setStartDate] = useState(now);
  const [endTime, setEndTime] = useState(now);
  const [startTime, setStartTime] = useState(now);
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
        <KeyboardTimePicker
          id="time-picker-start"
          label="Start time"
          value={startTime}
          onChange={(e)=>{setStartTime(e)}}
          KeyboardButtonProps={{
            'aria-label': 'change time',
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
        <KeyboardTimePicker
          id="time-picker-end"
          label="End time"
          value={endTime}
          onChange={(e)=>{setEndTime(e)}}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
      <TextField id="select" label="Market" value={market} select>
        <MenuItem value="BTCUSD">BTCUSD</MenuItem>
        <MenuItem value="LTCUSD">LTCUSD</MenuItem>
     </TextField>
     <Button variant="contained" size="medium" color="primary" onClick = {(e) => props.onClick(market,startDate,endDate)}>
          Submit
    </Button>
    </div>
  );

}

export default Chooser;
