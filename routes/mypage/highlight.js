var express = require('express');
var router = express.Router();

const db = require('../../module/pool');

const authUtil = require('../../module/utils/authUtils');
const utils = require('../../module/utils/utils');
const statusCode = require('../../module/utils/statusCode');
const resMessage = require('../../module/utils/responseMessage');
const jwt = require('jsonwebtoken');


router.get('/highlightlist',authUtil.isLoggedin, async (req, res) => {
//     //토큰을 통해 user 정보 가져오기
//     const userIdx = jwt.verify(req.headers.token);

//     //로그인 유저가 하이라이팅한 콘텐츠 가져오기
//     const getScrapListQuery = `SELECT C.*, H.*, COUNT(H.highlight_idx)AS highlight_cnt 
//                                     FROM contents C RIGHT JOIN highlight H
//                                     ON C.contents_idx=H.contents_idx
//                                     WHERE C.user_idx = ${userIdx} ORDER BY scrap_date DESC`;
//     const getScrapListResult = await db.queryParam_None(getScrapListQuery);


//     if (!getScrapListResult) { //콘텐츠 idx 조회 실패했을 때
//         res.status(200).send(utils.successFalse(statusCode.DB_ERROR, resMessage.GET_SCRAP_LIST_FAIL));
//     } else { 
//         res.status(200).send(utils.successTrue(statusCode.OK, resMessage.GET_SCRAP_LIST_SUCCESS, getScrapListResult))
//     }
});

module.exports = router;