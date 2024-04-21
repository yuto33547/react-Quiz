import React, { useEffect } from 'react'
import 'sakura-js/dist/sakura.min.css';
import Sakura from './dist/sakura.js';


const SakuraBackgroud = () => {

  useEffect(()=>{
    const sakuraInstance = new Sakura('body', {
    // ここでオプションを設定
    colors: [
      {
        gradientColorStart: 'rgba(255, 183, 197, 0.9)',
        gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
        gradientColorDegree: 120,
    },
    {
        gradientColorStart: 'rgba(255,189,189)',
        gradientColorEnd: 'rgba(227,170,181)',
        gradientColorDegree: 120,
    },
  ],
  });

  // Sakuraインスタンスが既に実行されていない場合のみstart()を呼び出す
  if (!sakuraInstance.el.dataset.sakuraAnimId) {
    sakuraInstance.start();
  }

  // コンポーネントのアンマウント時にアニメーションを停止する
  return () => {
    sakuraInstance.stop();
  };},[])
  
  return (
    null
  )
}

export default SakuraBackgroud