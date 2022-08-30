import JudgeModel from '../../models/Judges/JudgeModel';

const ListJudgeService = {
    listAll: () => {
        const judge1 = new JudgeModel(
            "0056",
            "Alberto",
            "alberto@hotmail.com",
            "1234567",
            "00501"
        );

        const judge2 = new JudgeModel(
            "0025",
            "Alan Pereira",
            "jack@hotmail.com",
            "36598741",
            "001205",
        );

        return [judge1, judge2];
    }
}

export default ListJudgeService;