/**
 * Class to hold TOTP options
 *
 * Uses 30 seconds as default time interval
 */
export class TOTPOptions {
  constructor(public timeInterval = 30) {}
}
