export const slotDuration = 60;

// convert time to min
export const timeToMin = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * slotDuration + minutes;
};

// Generate slot time interval with function
export const minutesToTime = (minutes: number) => {
  const hours = Math.floor(minutes / slotDuration)
    .toString()
    .padStart(2, "0");
  const mins = (minutes % slotDuration).toString().padStart(2, "0");
  return `${hours}:${mins}`;
};

export const SlotSearchableFields = ["date", "room"];
