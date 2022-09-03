import EnderecoModel from '../../models/Enderecos/EnderecoEleitorModel';

export default class ListEnderecoService {
    
    listAll() {
        const endereco1 = new EnderecoModel(
            2,
            "Rua Joaquim da Costa Lima",
            "São Lucas da Maré",
            "45",
            "São Bráz",
            "20280010",
            1,
            250
        );

        const endereco2 = new EnderecoModel(
            1,
            "Rua da Silva Sauro",
            "Embariê",
            "77",
            "Luanda",
            "25187150",
            2,
            130
        );

        return [endereco1, endereco2];
    }
}