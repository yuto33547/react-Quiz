import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";

const Ranking = () => {
  // ランキングのダミーデータ
  const rankingData = [
    { rank: 1, name: "山田太郎", score: 100 },
    { rank: 2, name: "鈴木花子", score: 95 },
    { rank: 3, name: "佐藤次郎", score: 90 },
    { rank: 4, name: "田中三郎", score: 85 },
    { rank: 5, name: "高橋美咲", score: 80 },
    { rank: 6, name: "山田太郎", score: 100 },
    { rank: 7, name: "鈴木花子", score: 95 },
    { rank: 8, name: "佐藤次郎", score: 90 },
    { rank: 9, name: "田中三郎", score: 85 },
    { rank: 10, name: "高橋美咲", score: 80 },
    { rank: 11, name: "山田太郎", score: 100 },
    { rank: 12, name: "鈴木花子", score: 95 },
    { rank: 13, name: "佐藤次郎", score: 90 },
    { rank: 14, name: "田中三郎", score: 85 },
    { rank: 15, name: "高橋美咲", score: 80 },
    { rank: 16, name: "山田太郎", score: 100 },
    { rank: 17, name: "鈴木花子", score: 95 },
    { rank: 18, name: "佐藤次郎", score: 90 },
    { rank: 19, name: "田中三郎", score: 85 },
    { rank: 20, name: "高橋美咲", score: 80 },
    // 以下、ランキングデータを追加
  ];

  return (
    <div
      className="QuizApp min-h-screen p-4 flex flex-col items-center "
      style={{ backgroundColor: "#FFF0F5" }}
    >
      <h1 className="mb-4 text-3xl font-bold ">ランキング👑</h1>
      <ListGroup className="max-w-screen-md w-full">
        {/* 1位, 2位, 3位の情報をheadListとして固定 */}
        {rankingData.slice(0, 3).map((item) => (
          <ListGroup.Item
            key={item.rank}
            className={`rounded-lg border-2 border-gray-800 my-1 p-2 ${
              item.rank === 1
                ? "bg-green-200"
                : item.rank === 2
                ? "bg-green-400"
                : item.rank === 3
                ? "bg-green-600"
                : ""
            }`}
          >
            <span className="font-bold mr-2">{item.rank}位:</span>
            <span className="mr-2">{item.name}</span>
            <span className="text-gray-800">{item.score}点</span>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* 4位以降のランキング */}
      <div
        className="max-w-screen-md w-full mt-4 overflow-auto"
        style={{ maxHeight: "500px" }}
      >
        <ListGroup>
          {rankingData.slice(3).map((item) => (
            <ListGroup.Item
              className="bg-green-50 border border-inherit"
              key={item.rank}
            >
              {item.rank}位: {item.name} - {item.score}点
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Ranking;
