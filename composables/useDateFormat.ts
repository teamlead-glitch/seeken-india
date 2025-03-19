// composables/useDateFormat.js
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat); // Enable support for custom date formats

export function useDateFormat() {
  function formatDate(dateString) {
    // First, try to parse "DD-MM-YYYY" format
    const customParsedDate = dayjs(dateString, 'DD-MM-YYYY', true); // 'true' for strict parsing
    if (customParsedDate.isValid()) {
      return customParsedDate.format('MMMM D, YYYY'); // Returns: March 14, 2025
    }

    // If not valid, try parsing as an ISO or standard date string
    const parsedDate = dayjs(dateString);
    if (parsedDate.isValid()) {
      return parsedDate.format('MMMM D, YYYY');
    }

    // If both attempts fail, return the original string
    return dateString;
  }

  return { formatDate };
}
