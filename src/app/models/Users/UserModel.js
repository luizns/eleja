function UserModel(id, name, cpf, rg, voter, email, password) {
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.rg = rg;
    this.voter = voter;
    this.email = email;
    this.password = password;
}

module.exports = UserModel;