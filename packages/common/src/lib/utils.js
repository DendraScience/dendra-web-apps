/**
 * Normalize an unknown error to string
 * @param {unknown} err
 * @return {string}
 */
export function errToString(err) {
  if (err === undefined || err === null) {
    return 'Undefined or null error'
  } else if (err instanceof Error) {
    return err.message
  } else if (
    typeof err === 'object' &&
    'message' in err &&
    typeof err.message === 'string'
  ) {
    return err.message
  } else if (typeof err === 'string') {
    return err
  }
  return 'Unknown error type'
}
