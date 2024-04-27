import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import {
  collection,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase.js";

const Ranking = () => {
  interface ResultType {
    nickName: string;
    score: number;
    time: number;
  }

  const [results, setResults] = useState<ResultType[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "Results"),
      orderBy("score", "desc"),
      orderBy("time", "asc")
    );
    // ここでFirestoreからデータを取得する処理を実行
    const getResults = async () => {
      const querySnapshot = await getDocs(q);
      const newResults: ResultType[] = [];
      querySnapshot.forEach((doc) => {
        newResults.push(doc.data() as ResultType);
      });
      setResults(newResults);
      console.log("firestoreを読み込みました" + results);
    };
    getResults();

    // リアルタイムアップデートを監視
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newResults: ResultType[] = [];
      snapshot.forEach((doc) => {
        newResults.push(doc.data() as ResultType);
      });
      setResults(newResults);
    });

    // クリーンアップ関数
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div
      className="QuizApp min-h-screen p-4 flex flex-col items-center "
      style={{ backgroundColor: "#FFF0F5" }}
    >
      <h1 className="mb-4 text-3xl font-bold ">ランキング👑</h1>
      <ListGroup className="max-w-screen-md w-full">
        {/* 1位, 2位, 3位の情報をheadListとして固定 */}
        {results.slice(0, 3).map((item, index) => (
          <ListGroup.Item
            key={item.nickName}
            className={`rounded-lg border-2 border-gray-800 my-1 p-2 ${
              index === 0
                ? "bg-green-200"
                : index === 1
                ? "bg-green-400"
                : index === 2
                ? "bg-green-600"
                : ""
            }`}
          >
            <div className="flex justify-between">
              <div>
                <span className="font-bold">{index + 1}位: </span>
                <span>{item.nickName}</span>
              </div>
              <div>
                <span className="text-gray-800">{item.score}/10</span>
                <span className="text-right text-gray-800 w-20 inline-block">
                  {item.time}秒
                </span>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* 4位以降のランキング */}
      <div
        className="max-w-screen-md w-full mt-4 overflow-auto"
        style={{ maxHeight: "500px" }}
      >
        <ListGroup>
          {results.slice(3).map((item, index) => (
            <ListGroup.Item
              className="bg-green-50 border border-inherit"
              key={item.nickName}
            >
              <div className="flex justify-between">
                <div>
                  <span>{index + 4}位: </span>
                  <span>{item.nickName}</span>
                </div>
                <div>
                  <span className="text-gray-800">{item.score}/10</span>
                  <span className="text-right text-gray-800 w-20 inline-block">
                    {item.time}秒
                  </span>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Ranking;
