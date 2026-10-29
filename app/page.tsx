'use client';
import { useState } from 'react';

const MODELS = [
  "SEO Badshah 👑 (Google + YouTube + Fiverr + Amazon)",
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
  const [active, setActive] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  function generate(){
    if(!prompt) return alert("Prompt likho Rani!");
    const model = MODELS[active];
    let output = "";
    if(active===0){
      output = `🔥 SEO Badshah Result for: "${prompt}"

✅ Google SEO:
Title: ${prompt} | Best Guide 2026 - Badsha_Akila_super_work Okara
Description: Learn ${prompt} step by step. High ranking keywords included.
Keywords: ${prompt} price in Pakistan, ${prompt} Okara, best ${prompt}

✅ Fiverr Gig SEO:
Title: I will do ${prompt} professionally | SEO Optimized
Tags: ${prompt}, fiverr gig, seo, ranking, pakistan, Badsha_Akila_super_work
Description + FAQ ready

✅ Amazon / Daraz SEO:
Title: ${prompt} - Premium Quality | Best Seller Pakistan
Bullets: Premium, Fast Delivery Okara, Warranty

✅ YouTube SEO:
Title: ${prompt} - Secret Trick Revealed! (Viral 2026)
Tags: ${prompt}, how to, viral, earning, pakistan
Description: Full SEO optimized

📞 Contact:
WhatsApp/Order: 03268805351
Payoneer Payment: 03444153867 -> JazzCash`;
    } else if(active===10){
      output = `💳 Payoneer Earning Badshah - Result for "${prompt}"

✅ Fiverr se Payoneer par payment kaise leni hai:
1. Fiverr -> Payoneer connect karo
2. Payoneer No: 03444153867
3. Payoneer se JazzCash me withdraw

✅ Client ko bolo: Pay to Payoneer 03444153867

✅ Daraz Order ke liye: WhatsApp 03268805351

Your Prompt: ${prompt}
Status: Ready to Earn! 👑`;
    } else {
      output = `👑 ${model} Result:

Prompt: ${prompt}

✅ Professional Output:
- Ready for Fiverr / Amazon / Daraz
- SEO Optimized with keywords
- Client ready format

📞 WhatsApp Shop: 03268805351
💳 Payoneer: 03444153867 -> JazzCash

Copy and use on your platform!`;
    }
    setResult(output);
  }

  return (
    <div style={{background:'#0f0f0f',minHeight:'100vh',color:'white',padding:'14px'}}>
      <header style={{background:'linear-gradient(90deg,#ffbd00,#ff006a)',padding:'14px',borderRadius:'12px',textAlign:'center',fontWeight:900,fontSize:'18px'}}>
        Badsha_Akila_super_work 👑 Super App - 11 Models
      </header>
      <div style={{marginTop:'10px',background:'#1a1a1a',padding:'10px',borderRadius:'10px',textAlign:'center',fontSize:'13px',lineHeight:'18px'}}>
        🛍️ WhatsApp / Daraz Shop: <b style={{color:'#ffbd00'}}>03268805351</b><br/>
        💳 Payoneer / Payment: <b style={{color:'#00ff88'}}>03444153867</b> ➝ JazzCash
      </div>
      
      <div style={{display:'flex',gap:'6px',overflowX:'auto',marginTop:'12px',paddingBottom:'6px'}}>
        {MODELS.map((m,i)=>(
          <button key={i} onClick={()=>setActive(i)} style={{whiteSpace:'nowrap',padding:'7px 10px',borderRadius:'20px',border:'none',background: active===i ? '#ffbd00' : '#2a2a2a', color: active===i?'black':'white',fontWeight: active===i?'700':'400',fontSize:'12px'}}>{m.split(' ')[0]}</button>
        ))}
      </div>

      <div style={{marginTop:'14px',background:'#1e1e1e',padding:'14px',borderRadius:'12px'}}>
        <div style={{fontWeight:700,marginBottom:'8px',fontSize:'14px'}}>{MODELS[active]}</div>
        <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder={active===0 ? "Ex: How to rank Fiverr gig 2026" : "Apna prompt likho..."} style={{width:'100%',height:'90px',borderRadius:'8px',padding:'10px',background:'#111',color:'white',border:'1px solid #333'}} />
        <button onClick={generate} style={{marginTop:'10px',width:'100%',padding:'12px',background:'#ffbd00',color:'black',fontWeight:800,border:'none',borderRadius:'8px'}}>Generate 👑 Result</button>
        {result && <pre style={{marginTop:'12px',whiteSpace:'pre-wrap',background:'#111',padding:'12px',borderRadius:'8px',border:'1px solid #333',fontSize:'13px',lineHeight:'18px'}}>{result}</pre>}
        {result && <button onClick={()=>{navigator.clipboard.writeText(result); alert('Copied Rani!')}} style={{marginTop:'8px',padding:'8px 12px',background:'#333',color:'white',borderRadius:'6px',border:'none',width:'100%'}}>📋 Copy Result</button>}
      </div>

      <div style={{marginTop:'14px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',fontSize:'12px'}}>
        <div style={{background:'#1e1e1e',padding:'10px',borderRadius:'8px'}}><b>Fiverr Gig</b><br/>SEO Title+Tags</div>
        <div style={{background:'#1e1e1e',padding:'10px',borderRadius:'8px'}}><b>Amazon/Daraz</b><br/>Listing SEO</div>
        <div style={{background:'#1e1e1e',padding:'10px',borderRadius:'8px'}}><b>YouTube SEO</b><br/>Viral Title+Tags</div>
        <div style={{background:'#1e1e1e',padding:'10px',borderRadius:'8px'}}><b>Payoneer</b><br/>03444153867</div>
      </div>

      <div style={{marginTop:'16px',textAlign:'center',fontSize:'11px',color:'#777'}}>From Okara | No Credits | GitHub + Vercel | Badsha_Akila_super_work</div>
    </div>
  )
}
