import { Sequelize } from "sequelize";

import { UserModel } from "../app/models/Users/UserModel";
import { CandidatoModel } from "../app/models/Candidato/CandidatoModel";
import { EleitorModel } from "../app/models/Eleitor/EleitorModel";
import { EnderecoEleitorModel } from "../app/models/Endereco/EnderecoEleitorModel";
import { ZonaEnderecoEleitorModel } from "../app/models/Endereco/ZonaEnderecoEleitorModel";
import { JuizEleitoralModel } from "../app/models/JuizEleitoral/JuizEleitoralModel";
import { PartidoModel } from "../app/models/Partido/PartidoModel";
import { QuantidadeVotosCandidatosModel } from "../app/models/voto/QuantidadeVotosCandidatosModel";
import { RegistroVotoEleitorModel } from "../app/models/voto/RegistroVotoEleitorModel";
import { VotoModel } from "../app/models/voto/VotoModel";

import databaseConfig from "../config/database";

const models = [
  UserModel,
  CandidatoModel,
  EleitorModel,
  EnderecoEleitorModel,
  ZonaEnderecoEleitorModel,
  JuizEleitoralModel,
  PartidoModel,
  QuantidadeVotosCandidatosModel,
  RegistroVotoEleitorModel,
  VotoModel,
];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}
