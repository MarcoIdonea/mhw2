function ricomincia(){
  const a = document.querySelectorAll('.choice-grid div');
  const immagine = document.querySelectorAll('.checkbox');
  for(let z of immagine){
    z.src = 'images/unchecked.png';
  }
  for (let i of a){
    i.classList.remove('overlay');
    i.classList.remove('color');
  }
  const first = document.querySelector('#ricomincia');
  first.classList.add('test_completato');
  
  for(let i=0;i<27; i++){
    a[i].addEventListener('click', spunta);
  }
  risposta.one = null;
  risposta.two=  null;
  risposta.three= null;
}


function spunta(event)
{
  const l= event.currentTarget;
  const immagine = l.querySelector('.checkbox');
  const a = document.querySelectorAll('.choice-grid div'); 
  immagine.src = 'images/checked.png';
  l.classList.remove('overlay');
  l.classList.add('color');

  retro(l);

  const cid = l.dataset.choiceId;
  const qid = l.dataset.questionId;

  risposta[qid]=cid;
  if(risposta.one !== null && risposta.two !== null && risposta.three !== null){
    for(let i=0;i<27; i++){
      a[i].removeEventListener('click', spunta);
    }
    const ris= risultato_personalita(risposta);

    const testo_titolo = document.querySelector('h2');
    const articolo = document.querySelector('p');
    testo_titolo.textContent = RESULTS_MAP[ris].title;
    articolo.textContent = RESULTS_MAP[ris].contents;
    
    const completato = document.querySelector('.test_completato');
    completato.classList.remove('test_completato');

    const pulsante = document.querySelector('#pulsante');
    pulsante.addEventListener('click', ricomincia);

  }

}


function retro(risposta){
  const r= document.querySelectorAll('.choice-grid div');
  for(const s of r){
    if (s.dataset.choiceId !== risposta.dataset.choiceId && s.dataset.questionId === risposta.dataset.questionId){
      s.classList.remove('color');
      const rimuovi_immagine = s.querySelector('.checkbox').src = 'images/unchecked.png';
      s.classList.add('overlay');
    }
  }
}

function risultato_personalita(risposta){
  
  if(risposta.one === risposta.two || risposta.one === risposta.three)
  return risposta.one;
  else if(risposta.two === risposta.three)
  return risposta.two;
  else if (risposta.one !== risposta.two && risposta.one !== risposta.three)
  return risposta.one;
   
}



const immagine = document.querySelectorAll('.choice-grid div');

for(let i=0;i<27; i++){
  immagine[i].addEventListener('click', spunta);
}

const risposta = {
  'one':null,
  'two':null,
  'three':null,
}




























