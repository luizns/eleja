const crypto = require('crypto')

export default class HashPassword {
  constructor() {}

  static hash(password) {
    const hashPassword = crypto
      .pbkdf2Sync(password, process.env.PASSWORD_SALT, 10000, 64, "sha512")
      .toString("hex");
    return hashPassword;
  }

  static validate(password, hash) {
    const hashPassword = HashPassword.hash(password);
    return hashPassword === hash;
  }

  static hashVotoEleitor(password) {
    const hashPassword = crypto
      .pbkdf2Sync(password, process.env.PASSWORD_VOTO_SALT, 10000, 36, "sha512")
      .toString("hex");
    return hashPassword;
  }

}
