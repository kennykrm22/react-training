import { useCallback, useState } from "react";
import { use1Second } from "./use1Second";
import configData from "../../Configs/config.json";

export const useTimer = ({
  seconds: initialSeconds = configData.Global.Time,
  running: initiallyRunning = true
} = {}) => {
  const resetTime = configData.Global.Time;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const tick = useCallback(
    () => (running ? setSeconds(seconds => (seconds===0?resetTime:(seconds - 1))) : undefined),
    [running]
  );
  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => setSeconds(initialSeconds);
  const stop = () => {
    pause();
    reset();
  };

  use1Second(tick);

  return { pause, reset, running, seconds, start, stop };
};
