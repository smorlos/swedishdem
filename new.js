

//robisz sobie obiekt z danymi
const demots = [
    {obraz: 'exemplary-smaller-demot.jpg',   like: 0},
    {obraz: 'exemplary-bigger-demot.jpg',    like: 0 },
    {obraz: 'exemplary-very-high-demot.jpg', like: 0},
    {obraz: 'exemplary-bigger-demot.jpg',    like: 0},
    {obraz: 'exemplary-smaller-demot.jpg',   like: 0},
    {obraz: 'exemplary-bigger-demot.jpg',    like: 0},
  ]
  
  
  
  //robisz sobie funkcje generujaca demoty
  function generateDemot(demot, index){
    //robisz sobie szablon do którego wstrzykujesz dane
    const template=`
  <div class="particular-article">
    <img src="img/${demot.obraz}"/>'
    <div class="article-button-positive" data-id="${index}" onclick="incrementLike(event)">Like</div><div>${demot.like}</div>
		<div class="article-button-negative">Dislike</div>
		<div class="article-button-share-on-facebook">Share on fb</div>
		<div style="clear:both;"></div>
  </div> 
  `
    return template;
  }
  
  //dla każdego demota wywołujesz funkcje generowania demota na podstawie szablonu
  function render(){
    let templates = '';
    demots.forEach((demot, index) => {      
      templates += generateDemot(demot, index);
    })
    
    //wstrzykujesz wynik do htmla
    document.getElementById('main').innerHTML=templates; 
  };
  render();

  function incrementLike(event){
    var attribute = event.target.attributes.getNamedItem('data-id').value;
    demots[attribute].like++;
    console.log(demots);
    render();
  }

