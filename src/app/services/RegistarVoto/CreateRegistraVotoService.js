import { v4 } from "uuid";
import RegistroVotoModel from "../../models/Votos/RegistroVotoModel";
import QuantidadeVotosCandidatosModel from "../../models/Votos/QuantVotosCandidatosModel";
import VotoModel from "../../models/Votos/VotoModel";
import CandidatoModel from "../../models/Candidatos/CandidatoModel";
import UsuarioModel from "../../models/Usuarios/UsuarioModel";
import HashPassword from "../../utils/HashPassword";
import databaseConfig from "../../../config/database";
import {Sequelize} from "sequelize";

const sequelize = new Sequelize(databaseConfig);
export default class CreateRegistraVotoService {
  constructor() {}

  async create(tokenUsuario, idEleitor, numero_candidato) {
    const dataAtual = new Date().toLocaleDateString("pt-BR");
    const horaAtual = new Date().toLocaleString(undefined, {
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
      second: "2-digit",
    });
    const idRegistroVotoEleitor = v4();
    const idVotoCandidato = v4();
    const nomeEleitor = await this.selecionaNomeEleitor(tokenUsuario);
    const idCandidatoSelecionado = await this.selecionaIdCandidato(numero_candidato);
    const VotoNuloBranco = this.verificaVotoNuloBranco(numero_candidato,idCandidatoSelecionado);
    const blocoTransacaoVoto = await sequelize.transaction();
      
    try {
      await RegistroVotoModel.create({
        idRegistroVotoEleitor: idRegistroVotoEleitor,
        id_eleitor:idEleitor,
        data_voto:dataAtual,
        hora_voto:horaAtual,
      },{transaction:blocoTransacaoVoto});

      await QuantidadeVotosCandidatosModel.create({
        idQuantVotosCandidato: idVotoCandidato,
        id_candidato_voto:idCandidatoSelecionado == 0 ? null : idCandidatoSelecionado,
        branco_nulo: VotoNuloBranco,
        hora_voto:horaAtual,
        data_voto:dataAtual
      },{transaction:blocoTransacaoVoto});
      
      await sequelize.query({
        query:"SET FOREIGN_KEY_CHECKS=0;"
      },{transaction:blocoTransacaoVoto}) 

      await VotoModel.create({
        idVoto: v4(),
        id_registro_voto_eleitor:HashPassword.hashVotoEleitor(idRegistroVotoEleitor),
        id_quant_votos_candidato: idVotoCandidato,
      },{transaction:blocoTransacaoVoto});


      await  blocoTransacaoVoto.commit();

      return {
        título: "Comprovante Votação Elej@",
        mensagem: "Festa da democracia, o seu voto foi registrado com sucesso!",
        eleitor: nomeEleitor,
        Data: dataAtual,
        Horário: horaAtual,
        identificador: v4(),
      };
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async selecionaIdCandidato(numeroCandidato) {
    try {
      const candidato = await CandidatoModel.findOne({
        where: { numero_candidato: numeroCandidato },
      });

      if (!candidato) {
        return 0; // Se zero, então não encontrou candidato
      }

      return candidato.get("idCandidato");
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async selecionaNomeEleitor(tokenUsuario) {
    try {
      const usuario = await UsuarioModel.findOne({
        where: { token_sessao: tokenUsuario },
      });

      return usuario.get("nome");
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  verificaVotoNuloBranco = (numeroCandidato, resultadoPesquisaCandidato) => {
    if (numeroCandidato == "" && resultadoPesquisaCandidato == 0) {
      return "branco";
    }

    if (numeroCandidato != "" && resultadoPesquisaCandidato == 0) {
      return "nulo";
    }
  };
}
