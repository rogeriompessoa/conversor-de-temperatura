    function convertParaFarenheit() {
        let celsius =document.getElementById("celsius").value;

        let farenheit = 1.8 * celsius + 32;
      console.log(farenheit)
      let textoResult ='A temperatura' + celsius + '°c é ' + farenheit + 'F'


      // a temperatura 25° é 150f!
      console.log( textoResult);

      Document.getElementBytagName ('p') [0].innerHTML = textoResult
       // alert("clicou no converter!")
    }

    function limpar() {
        Document.getElementBytagName ('p') [0].innerHTML = '';
    }