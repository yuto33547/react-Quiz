import React from "react";

function Quiz() {
  return (
    <div className="QuizAppUiDesign w-[360px] h-[717px] relative bg-fuchsia-100 rounded-[30px] border-2 border-black">
      <div className="QuizAppUiDesign w-[337px] h-[680px] left-[12px] top-[18px] absolute bg-white rounded-[30px]">
        <div className="Rectangle2 w-[281px] h-[166px] left-[26px] top-[32px] absolute bg-white rounded-[20px] shadow border border-black border-opacity-10" />
        <div className="Group1 w-[67px] h-[67px] left-[128px] top-[-1px] absolute">
          <div className="Ellipse5 w-[67px] h-[67px] left-0 top-0 absolute bg-white rounded-full" />
          <div className="Ellipse7 w-[49px] h-[49px] left-[9px] top-[9px] absolute bg-white rounded-full" />
          <div className=" left-[23px] top-[20px] absolute text-fuchsia-700 text-xl font-bold font-['DM Sans']">
            18
          </div>
        </div>
        <div className="Question1320 left-[111px] top-[81px] absolute text-fuchsia-700 text-sm font-medium font-['DM Sans']">
          Question 13/20
        </div>
        <div className=" left-[60px] top-[115px] absolute text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
          坂本龍馬は何をした人？
        </div>
        <div className="Come w-[300px] h-[60px] left-[18px] top-[245px] absolute">
          <div className="Rectangle5 w-[300px] h-[60px] left-0 top-0 absolute bg-white rounded-[15px] border-2 border-fuchsia-700" />
          <div className=" left-[13px] top-[19px] absolute text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
            我がなすことは我のみぞ知る
          </div>
        </div>
        <div className="Comes w-[300px] h-[60px] left-[18px] top-[324px] absolute">
          <div className="Rectangle5 w-[300px] h-[60px] left-0 top-0 absolute bg-white rounded-[15px] border-2 border-fuchsia-700" />
          <div className=" w-[222px] h-8 left-[25px] top-[14px] absolute text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
            天は人の上に人を作らず
            <br />
          </div>
        </div>
        <div className="AreComing w-[300px] h-[60px] left-[18px] top-[403px] absolute">
          <div className="Rectangle5 w-[300px] h-[60px] left-0 top-0 absolute bg-white rounded-[15px] border-2 border-fuchsia-700" />
          <div className=" w-[221px] h-[30px] left-[26px] top-[14px] absolute text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
            人事を尽くして天命を待つ
            <br />
          </div>
        </div>
        <div className="Came w-[300px] h-[60px] left-[18px] top-[482px] absolute">
          <div className="Rectangle5 w-[300px] h-[60px] left-0 top-0 absolute bg-white rounded-[15px] border-2 border-fuchsia-700" />
          <div className=" w-[230px] h-[30px] left-[27px] top-[14px] absolute text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
            明日の我に今日は勝つべし
          </div>
        </div>
        <div className="Button p-2.5 left-[118px] top-[589px] absolute bg-fuchsia-700 bg-opacity-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
          <div className=" text-center text-black text-xl font-medium font-['DM Sans']">
            送信する
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
