import { Sequelize } from "sequelize";

import { UserModel } from "../app/models/Usuarios/UserModel";
import { CandidatoModel } from "../app/models/Candidatos/CandidatoModel";
import { EleitorModel } from "../app/models/Eleitores/EleitorModel";
import { EnderecoEleitorModel } from "../app/models/Enderecos/EnderecoEleitorModel";
import { ZonaEnderecoEleitorModel } from "../app/models/Enderecos/ZonaEnderecoEleitorModel";
import { JuizEleitoralModel } from "../app/models/Juizes/JuizModel";
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
