export function checkTotal(currentValues, newValue) {
  let status = true;
  let nearlyFullFill = null;

  // Sum the current values
  const total = currentValues.reduce((acc, val) => acc + val, 0);

  if (total + newValue > 100) {
      // Over the limit
      status = false;
  } else if (total + newValue > 80) {
      // Nearing the limit
      status = true;
      nearlyFullFill = 100 - total - newValue;
  }

  return { status, nearlyFullFill };
}