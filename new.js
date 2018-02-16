

//robisz sobie obiekt z danymi
const demots = [
    {},{},{},{},{},{},
  ]
  
  let templates = '';
  
  //robisz sobie funkcje generujaca demoty
  function generateDemot(demot){
    //robisz sobie szablon do którego wstrzykujesz dane
    const template=`
  <div class="particular-article">
    <img src="img/exemplary-smaller-demot.jpg"/>
    <div class="article-button-positive">Good</div>
		<div class="article-button-negative">Bad</div>
		<div class="article-button-share-on-facebook">Share on fb</div>
		<div style="clear:both;"></div>
  </div>
    
  `
    return template;
  }
  
  //dla każdego demota wywołujesz funkcje generowania demota na podstawie szablonu
  demots.forEach(demot => {
    templates += generateDemot(demot);
  })
  
  //wstrzykujesz wynik do htmla
  document.getElementById('main').innerHTML=templates; 
  
