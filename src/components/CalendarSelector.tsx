import { Calendar } from 'lucide-react';

type CalendarDay = {
  day: number;
  month: string;
};

type CalendarSelectorProps = {
  days: CalendarDay[];
  selectedDay: number;
  onSelectDay: (day: number) => void;
};

function CalendarSelector({
  days,
  selectedDay,
  onSelectDay,
}: CalendarSelectorProps) {
  return (
    <div className="calendar-row">
      {days.map((item) => (
        <button
          key={item.day}
          className={`calendar-day ${selectedDay === item.day ? 'selected' : ''}`}
          onClick={() => onSelectDay(item.day)}
        >
          {selectedDay === item.day && <Calendar size={20} />}
          <strong>{item.day}</strong>
          <span>{item.month}</span>
        </button>
      ))}
    </div>
  );
}

export default CalendarSelector;