import ZonaModel from '../../models/Enderecos/ZonaEnderecoEleitorModel';

export default class ListZonaService {
    
    listAll() {
        const zona1 = new ZonaModel(
            "001",
            "130"
        );

        const zona2 = new ZonaModel(
            "002",
            "250"
        );

        return [zona1, zona2];
    }
}