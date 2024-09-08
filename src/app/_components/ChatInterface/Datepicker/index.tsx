import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for the date picker
import styles from './index.module.scss'; // Assuming you have your styles here

interface DatePickerProps {
  onDateSelected: (startDate: Date, endDate: Date) => void;
}

const DateRangePicker: React.FC<DatePickerProps> = ({ onDateSelected }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
    if (endDate) {
      onDateSelected(date, endDate);
    }
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
    if (startDate) {
      onDateSelected(startDate, date);
    }
  };

  return (
    <div className={styles.datePickerContainer}>
      <div className={styles.datePicker}>
        <label htmlFor="start-date">Check In</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className={styles.dateInput}
          id="start-date"
        />
      </div>
      <div className={styles.datePicker}>
        <label htmlFor="end-date">Check Out</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className={styles.dateInput}
          id="end-date"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
