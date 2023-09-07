import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [name, setName] = useState("");
  fetch("api/hello", {method: "GET"})
      .then(res => {
        res.json().then(
            (json=> {setName(json.name)})
        )
      })
  if (name) return name;
  return "Give me a second";
}
