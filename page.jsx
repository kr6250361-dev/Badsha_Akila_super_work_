'use client';
import { useState } from 'react';

const MODELS = [
  "SEO Badshah 👑 (Google + YouTube)",
  "Content Badshah",
  "YouTube Script Badshah",
  "Fiverr Gig Badshah",
  "Amazon Listing Badshah",
  "Daraz Store Badshah",
  "Client Chat Badshah",
  "Price Calculator Badshah",
  "Thumbnail Idea Badshah",
  "Voiceover Script Badshah",
  "Payoneer Earning Badshah"
];

export default function Page(){
  const [active, setActive] = useState(MODELS[0]);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const generate = () => {
    setResult(`🔥 ${active} ke liye result: ${prompt} - Jald aayega InshaAllah!`);
  };

  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:24, fontWeight:'bold'}}>Badsha Akila Super Work - Rani Studio 👑</h1>
      <div style={{display:'flex', gap:10, flexWrap:'wrap', marginTop:20}}>
        {MODELS.map((m)=>(
          <button key={m} onClick={()=>setActive(m)} style={{padding:'8px 12px', border:'1px solid #ccc', background: active===m ? 'black':'white', color: active===m ? 'white':'black', borderRadius:8}}>
            {m}
          </button>
        ))}
      </div>
      <div style={{marginTop:20}}>
        <textarea value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Apna prompt likho..." style={{width:'100%', height:100, padding:10, border:'1px solid #ccc'}} />
        <button onClick={generate} style={{marginTop:10, padding:'10px 20px', background:'black', color:'white', borderRadius:8}}>Generate Karo</button>
        <div style={{marginTop:20, padding:15, background:'#f5f5f5', borderRadius:8}}>{result}</div>
      </div>
    </div>
  );
                                           }
