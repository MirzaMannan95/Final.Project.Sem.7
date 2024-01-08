function burgerClick() {
    var burgerMenu = document.querySelector('#burgerMenu')
    if(burgerMenu.style.display === 'none' || burgerMenu.style.display === ''){
        burgerMenu.style.display = 'flex'
    } else{
        burgerMenu.style.display = 'none';
    }
  }
function handleBlur () {
  // querySelector("input => (tagname), [] => use for property declaration, [type='text'] => define the type for input so that it could get the input that have type of text, ")
    let input = document.querySelector("input[type='text']")
    input.style.border = "1px solid #ffbc64"
  }
  