import React, { useState, useEffect } from 'react';
import './Lyrics.css';

const Lyrics = () => {
  const lyrics = [
    "残酷な天使のように",
    "少年よ　神話になれ",
    "青い風がいま",
    "胸のドアを叩いても",
    "私だけをただ見つめて",
    "微笑んでるあなた",
    "そっとふれるもの",
    "もとめることに夢中で",
    "運命さえまだ知らない",
    "いたいけな瞳",
    "だけどいつか気付くでしょう　その背中には",
    "遥か未来　めざすための　羽根があること",
    "残酷な天使のテーゼ",
    "窓辺からやがて飛び立つ",
    "ほとばしる熱いパトスで",
    "思い出を裏切るなら",
    "この宇宙(そら)を抱いて輝く",
    "少年よ　神話にな",
  ]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lyrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [lyrics.length]);

  return (
    <div className="lyrics glow-yellow">
      {lyrics[index]}
    </div>
  );
};

export default Lyrics;
