import React, { FormEvent } from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "../../atoms";

const TimeConverter = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinuteChange = (event: FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHourChange = (event: FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <h1>TimeConverter</h1>
      <br />
      <input value={minutes} onChange={onMinuteChange} type="number" />
      <input value={hours} onChange={onHourChange} type="number" />
    </div>
  );
};

export default TimeConverter;
