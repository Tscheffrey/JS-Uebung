
function schreibeText(content){
  var input = document.forms.zweitesFormular.elements[0];

  switch (content) {
    case 1:
      input.value = "Value 1"
      break;
    case 2:
      input.value = "Value 2"
      break;

    default:

  }

}

function reset(){
  document.forms.zweitesFormular.reset();
}
