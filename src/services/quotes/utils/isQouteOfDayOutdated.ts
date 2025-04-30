export function isQouteOfDayOutdated(quote) {
  if (!quote || !quote.expirationDate) {
    return true;
  }

  const now = Date.now();

  if (now > quote.expirationDate.getTime()) {
    return true;
  }

  return false;
}
