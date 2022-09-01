import JudgeModel from '../../models/Judges/JudgeModel';

export default class ListJudgeService {
    
    listAll() {
        const judge1 = new JudgeModel(
            56,
            "Alberto",
            "alberto@hotmail.com",
            "1234567",
            "00501"
        );

        const judge2 = new JudgeModel(
            25,
            "Alan Pereira",
            "jack@hotmail.com",
            "36598741",
            "001205",
        );

        return [judge1, judge2];
    }
}