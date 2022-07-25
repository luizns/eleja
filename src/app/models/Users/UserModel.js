function UserModel(id, name, cpf, rg, titulo, email, password) {
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.rg = rg;
    this.titulo = titulo;
    this.email = email;
    this.password = password;
}

module.exports = UserModel;