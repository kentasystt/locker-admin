const express = require("express"); // npm i express | yarn add express
const cors    = require("cors");    // npm i cors | yarn add cors
const mysql   = require("mysql");   // npm i mysql | yarn add mysql
const app     = express();
const PORT    = 3001; // 포트번호 설정

// MySQL 연결
const db = mysql.createPool({
    host: "127.0.0.1", // 호스트
    user: "root",      // 데이터베이스 계정
    password: "rok1235",      // 데이터베이스 비밀번호
    database: "lockeradmin",  // 사용할 데이터베이스
});

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 



app.get("/api/member", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    let ID = req.query.userId;
    let PW = req.query.userPw;
    // const { userId, userPw } = req.body;

    const sqlQuery = `SELECT * FROM MLA_MembMain where mmIdxx='${ID}' and mmShow=1` ; // and mmPass='${PW}'  `;
    // console.log("sqlQuery = ",sqlQuery.length)
    db.query(sqlQuery, (err, result) => {
        // console.log("result[0] =", result[0])
        if(result.length){
            if(result[0].mmPass === PW){
                res.send("success");
            }else{
                res.send("pw fail")
            }
        }else{
            res.send("fail");
        }
    });
});





// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});