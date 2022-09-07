import crypto from 'node:crypto';

export default class  HashSenha {

    constructor() {}

    static hash(senha) {
    const hashedSenha = crypto
        .pbkdf2Sync(senha, process.env.PASSWORD_SALT, 10000, 64, "sha512")
        .toString("hex");

    return hashedSenha;
    }

    static validate(senha, hash) {
    const hashedSenha = HashSenha.hash(senha);

    return hashedSenha === hash;
    }

}