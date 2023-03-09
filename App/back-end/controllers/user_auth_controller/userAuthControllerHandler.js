const { executeQuery } = require('../../persistance/util');

const _verifyPostTest = (body) => {
    return body && body.username && body.email && body.password;
}

const _verifyPutTest = (body) => {
    return body && body.username && body.email && body.password;
};

const postUserAuthHandler = (req, res) => {
    const body = req.body;

    if(!_verifyPostTest(body)){
        res.status(400).send();
        return;
    }

    executeQuery('sql/userAuth/postUserAuth.sql', [body.username, body.email, body.password], (queryResult) => {
        res.json({
            id: queryResult.insertId,
        });
    });
}

const getAllUserAuthHandler = (req, res) => {
    executeQuery('sql/userAuth/getAllUserAuth.sql', undefined, (queryResult) => {
        if(!queryResult.length){
            res.status(404).send();
            return;
        }

        const resultDTO = [];

        queryResult.forEach(row => {
            resultDTO.push({
                id: row.id,
                username: row.username,
                email: row.email,
                password: row.password,
            })
        });

        res.json(resultDTO);
    });
};

const getUserAuthHandler = (req, res) => {
    const id = req.params._id;

    executeQuery('sql/userAuth/getUserAuth.sql', [id], (queryResult) => {
        if(!queryResult.length){
            res.status(404).send();
            return;
        }

        res.status(200).json(queryResult[0]);
    });
}

const putUserAuthHandler = (req, res) => {
    const id = req.params._id;
    const body = req.body;

    if(!_verifyPutTest(body)){
        res.status(400).send();
        return;
    }

    executeQuery('sql/userAuth/putUserAuth.sql', [body.username, body.email, body.password, id], (queryResult) => {
        if(!queryResult.affectedRows){
            res.status(404).send();
            return;
        }

        res.status(200).json({
            id: id,
        });
    });
}

const deleteUserAuthHandler = (req, res) => {
    const id = req.params._id;

    executeQuery('sql/userAuth/deleteUserAuth.sql', [id], (queryResult) => {
        if(!queryResult.affectedRows){
            res.status(404).send();
            return;
        }

        res.status(204).send();
    });
}

module.exports = {
    postUserAuthHandler,
    getUserAuthHandler,
    getAllUserAuthHandler,
    putUserAuthHandler,
    deleteUserAuthHandler,
};