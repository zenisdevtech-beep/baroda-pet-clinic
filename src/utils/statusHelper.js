// Calculates real-time open/closed/break status for Baroda Pet Clinic based on IST (Indian Standard Time)

export function getClinicCurrentStatus() {
  // Current time in IST (UTC+5:30)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utc + istOffset);

  const day = istDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // Shift timings in minutes from midnight
  const morningOpen = 10 * 60; // 10:00 AM
  const morningClose = 13 * 60; // 1:00 PM
  const eveningOpen = 18 * 60; // 6:00 PM
  const eveningClose = 21 * 60 + 30; // 9:30 PM

  const isSunday = day === 0;

  if (isSunday) {
    const sunMorningOpen = 10 * 60 + 30; // 10:30 AM
    const sunMorningClose = 13 * 60; // 1:00 PM

    if (timeInMinutes >= sunMorningOpen && timeInMinutes < sunMorningClose) {
      return {
        isOpen: true,
        statusType: "open",
        shift: "Sunday Morning Clinic",
        message: "Open Now: Sunday Morning Consultations (Closes 1:00 PM)",
        badgeClass: "bg-emerald-500 text-white animate-pulse",
        subtext: "Walk-ins & scheduled appointments welcome until 1:00 PM"
      };
    } else {
      return {
        isOpen: false,
        statusType: "closed",
        shift: "Sunday Afternoon / Evening",
        message: "Closed for Evening: Reopens Monday 10:00 AM",
        badgeClass: "bg-amber-500 text-white",
        subtext: "For urgent inquiries, call: 098252 42506"
      };
    }
  }

  // Weekdays & Saturday
  if (timeInMinutes >= morningOpen && timeInMinutes < morningClose) {
    const minLeft = morningClose - timeInMinutes;
    return {
      isOpen: true,
      statusType: "open",
      shift: "Morning Session",
      message: `Open Now: Morning Shift (Closes in ${minLeft > 60 ? Math.floor(minLeft/60) + ' hr ' + (minLeft%60) + ' min' : minLeft + ' mins'} at 1:00 PM)`,
      badgeClass: "bg-emerald-500 text-white animate-pulse",
      subtext: "Consultations, surgeries & in-house pharmacy active"
    };
  } else if (timeInMinutes >= morningClose && timeInMinutes < eveningOpen) {
    const minToOpen = eveningOpen - timeInMinutes;
    const hoursToOpen = Math.floor(minToOpen / 60);
    const minsRemainder = minToOpen % 60;
    return {
      isOpen: false,
      statusType: "break",
      shift: "Midday Break & Sterilization",
      message: `Midday Break · Reopens 6:00 PM for Evening Shift (${hoursToOpen > 0 ? hoursToOpen + 'h ' : ''}${minsRemainder}m left)`,
      badgeClass: "bg-amber-500 text-white",
      subtext: "Evening OPD: 6:00 PM – 9:30 PM · For urgent cases call 098252 42506"
    };
  } else if (timeInMinutes >= eveningOpen && timeInMinutes < eveningClose) {
    const minLeft = eveningClose - timeInMinutes;
    return {
      isOpen: true,
      statusType: "open",
      shift: "Evening Session",
      message: `Open Now: Evening Shift (Closes in ${minLeft > 60 ? Math.floor(minLeft/60) + ' hr ' + (minLeft%60) + ' min' : minLeft + ' mins'} at 9:30 PM)`,
      badgeClass: "bg-emerald-500 text-white animate-pulse",
      subtext: "Evening consultations & prescription pharmacy open"
    };
  } else {
    return {
      isOpen: false,
      statusType: "closed",
      shift: "Night",
      message: "Closed Now · Reopens Tomorrow at 10:00 AM",
      badgeClass: "bg-slate-600 text-white",
      subtext: "Morning Shift starts at 10:00 AM · Emergency Call: 098252 42506"
    };
  }
}
