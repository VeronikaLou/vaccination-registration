import { KeyboardDatePicker } from '@material-ui/pickers';
import React from 'react';

const DATES = [{
    centrumId: '1',
    yearMonth: '2021-06',
    day1: 5,
    day2: 0,
    day3: 3,
    day4: 3,
    day5: 3,
    day6: 0,
    day7: 0,
    day8: 3,
    day9: 5,
    day10: 1,
}, {
    centrumId: '1',
    yearMonth: '2021-07',
    day1: 5,
    day2: 7,
    day3: 3,
    day4: 3,
    day5: 3,
    day6: 0,
    day7: 0,
    day8: 0,
    day9: 0,
    day10: 0,
}]


export const VaccinationDate = ({ vaccinationDate, setVaccinationDate, disabled = false }) => {
    const isDateAvailable = (day, yearMonth) => {
        const date = DATES.find(d => {
            return d.yearMonth === yearMonth;
        });

        return date ? date[`day${day}`] !== 0 : false;
    }

    const disableWeekends = (date) => {
        const day = date.getUTCDate() + 1;
        const yearMonth = date.toISOString().substring(0, 7);
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;

        return isWeekend || !isDateAvailable(day, yearMonth);
    }

    return (
        <KeyboardDatePicker
            shouldDisableDate={disableWeekends}
            disableToolbar
            disablePast
            disabled={disabled}
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-dialog"
            label="Datum očkování"
            value={vaccinationDate}
            onChange={setVaccinationDate}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
    )
}