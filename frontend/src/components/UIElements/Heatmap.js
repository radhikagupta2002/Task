import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./Heatmap.css";

const data = [
  { date: "2022-01-01", count: 2 },
  { date: "2022-01-02", count: 3 },
  { date: "2022-01-03", count: 1 },
  // add more data here
];

const Heatmap = () => {
  return (
    <div className="heatmap-cont">
      <h3 className="heatmap-heading">CIPHER MAP</h3>
      <CalendarHeatmap
        startDate={new Date("2022-01-01")}
        endDate={new Date("2022-12-31")}
        values={data}
        showWeekdayLabels={true}
        titleForValue={(value) => {
          if (value && value.date) {
            // return the date as the title for each cell if value and value.date are defined
            return value.date;
          }
          return null;
        }}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  );
};

export default Heatmap;
