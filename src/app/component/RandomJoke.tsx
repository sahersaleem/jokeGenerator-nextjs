
'use client'

import React from "react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface Joke {
  setup: string;
  punchline: string;
}
const RandomJoke = () => {
  const [jokes, setJokes] = useState<string>("");
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const randomJokes: Joke = await res.json();
      setJokes(`${randomJokes.setup}-${randomJokes.punchline}`);
    } catch (error: any) {
      setJokes("failed to fetch jokes try again!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-screen w-full bg-zinc-100 flex items-center justify-center ">
      <Card className="p-8 flex justify-center items-center flex-col gap-5">
        <h1 className="text-center text-4xl font-bold"> 😂 Random Joke Generator  👈</h1>
        <div className="w-[400px] flex justify-center items-center text-center text-base text-slate-950">{jokes||"loading"}</div>
        <div><Button onClick={fetchData}>Get new Jokes 😂</Button></div>
        <div>
            Made By @Saher Saleem
        </div>
      </Card>
    </div>
  );
};

export default RandomJoke;
