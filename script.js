body{
margin:0;
font-family:'Inter';
background:#0f172a;
color:white;
}

.navbar{

position:fixed;
top:0;
width:100%;
display:flex;
justify-content:space-between;
padding:20px 10%;
background:rgba(0,0,0,0.5);
backdrop-filter:blur(10px);

}

.navbar ul{
display:flex;
gap:30px;
list-style:none;
}

.navbar a{
color:white;
text-decoration:none;
}


.hero{

display:flex;
justify-content:space-between;
align-items:center;
padding:160px 10%;
min-height:100vh;

}

.hero-text{
max-width:600px;
}

.title{
font-size:60px;
margin:10px 0;
}

.typing{
color:#38bdf8;
}

.btn{

display:inline-block;
margin-top:20px;
padding:12px 30px;
background:#38bdf8;
color:black;
border-radius:30px;
text-decoration:none;

}

.hero-image img{

width:350px;
border-radius:20px;
animation:float 4s infinite ease-in-out;

}

@keyframes float{

0%{transform:translateY(0)}
50%{transform:translateY(-20px)}
100%{transform:translateY(0)}

}

.section{

padding:120px 10%;

}

.tech-grid{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
gap:20px;

}

.tech{

background:#1e293b;
padding:20px;
text-align:center;
border-radius:10px;
transition:0.3s;

}

.tech:hover{

transform:scale(1.1);
background:#334155;

}

.project-card{

background:#1e293b;
padding:40px;
border-radius:20px;
transition:0.3s;

}

.project-card:hover{

transform:translateY(-10px);

}

.project-card video{

width:100%;
margin:20px 0;
border-radius:10px;

}

.contact{

text-align:center;

}

footer{

text-align:center;
padding:40px;
background:black;

}
