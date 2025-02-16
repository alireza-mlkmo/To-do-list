import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function DatePick({ onAddDate, lableText , type }) {

    function handleSetDate(newDate){
        onAddDate(newDate, type);
    }
  return (
    <div className="flex items-center gap-x-1">
      <label className="text-gray-500">{lableText}</label>
      <DatePicker
        render={
          <input
            type="text"
            className="w-44 p-1 rounded-md bg-white text-center"
            placeholder="تاریخ را انتخاب کنید..."
          />
        }
        placeholder="تاریخ را انتخاب کنید..."
        onChange={handleSetDate}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-left"
      />
    </div>
  );
}
