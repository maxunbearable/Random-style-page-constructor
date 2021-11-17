let bgrandombutton = document.getElementById('bgrandombutton');
let bgvalue = document.getElementById('bgvalue');
let bgblackbutton = document.getElementById('bgblackbutton');
let bgwhitebutton = document.getElementById('bgwhitebutton');


function colorValue() {
  return Math.floor(Math.random() * 256);
}

function bgrandomcolor(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' +    colorValue() + ',' + 0.9+ ')';
  document.body.style.backgroundColor = randomColor;
  bgvalue.innerHTML = `Current value: ${randomColor}`
}

function bgblack(event){
    document.body.style.backgroundColor = "rgb(0,0,0,0.9)";
    bgvalue.innerHTML = `Current value: black, opacity 0.9`
  }

  function bgwhite(event){
    document.body.style.backgroundColor = "white";
    bgvalue.innerHTML = `Current value: white`
  }

bgrandombutton.addEventListener('click', bgrandomcolor);
bgblackbutton.addEventListener('click', bgblack);
bgwhitebutton.addEventListener('click', bgwhite);


let bgmrandombutton = document.getElementById('bgmrandombutton');
let bgmvalue = document.getElementById('bgmvalue');
let bgmblackbutton = document.getElementById('bgmblackbutton');
let bgmwhitebutton = document.getElementById('bgmwhitebutton');
let maincolor = document.getElementById('maincolor');

function bgmrandomcolor(event){
  let randomColorm = 'rgb(' + colorValue() + ',' + colorValue() + ',' +    colorValue()+ ',' + 0.9+')';
  maincolor.style.backgroundColor = randomColorm;
  bgmvalue.innerHTML = `Current value: ${randomColorm}`
}

function bgmblack(event){
    maincolor.style.backgroundColor = "rgb(0,0,0,0.9)";
    bgmvalue.innerHTML = `Current value: black, opacity 0.9`
  }

  function bgmwhite(event){
    maincolor.style.backgroundColor = "white";
    bgmvalue.innerHTML = `Current value: white`
  }

bgmrandombutton.addEventListener('click', bgmrandomcolor);
bgmblackbutton.addEventListener('click', bgmblack);
bgmwhitebutton.addEventListener('click', bgmwhite);


let bgfnrandombutton = document.getElementById('bgfnrandombutton');
let bgfnvalue = document.getElementById('bgfnvalue');
let bgfnblackbutton = document.getElementById('bgfnblackbutton');
let bgfnwhitebutton = document.getElementById('bgfnwhitebutton');
let fncolor = document.querySelector('.fncolor');
let fn1color = document.querySelector('.fn1color');

function bgfnrandomcolor(event){
  let randomColorfn = 'rgb(' + colorValue() + ',' + colorValue() + ',' +    colorValue()+ ',' + 0.9+')';
  fncolor.style.backgroundColor = randomColorfn;
  fn1color.style.backgroundColor = randomColorfn;
  bgfnvalue.innerHTML = `Current value: ${randomColorfn}`
}

function bgfnblack(event){
  fncolor.style.backgroundColor = "rgb(0,0,0,0.9)";
  fn1color.style.backgroundColor = "rgb(0,0,0,0.9)";
    bgfnvalue.innerHTML = `Current value: black, opacity 0.9`
  }

  function bgfnwhite(event){
    fncolor.style.backgroundColor = "white";
    fn1color.style.backgroundColor = "white";
    bgfnvalue.innerHTML = `Current value: white`
  }

bgfnrandombutton.addEventListener('click', bgfnrandomcolor);
bgfnblackbutton.addEventListener('click', bgfnblack);
bgfnwhitebutton.addEventListener('click', bgfnwhite);



let h1randombutton = document.getElementById('h1randombutton');
let h1value = document.getElementById('h1value');
let h1blackbutton = document.getElementById('h1blackbutton');
let h1whitebutton = document.getElementById('h1whitebutton');
let h1color = document.getElementById('h1color');

function h1randomcolor(event){
  let randomColorh1 = 'rgb(' + colorValue() + ',' + colorValue() + ',' +    colorValue()+ ',' + 0.9+')';
  h1color.style.color = randomColorh1;
  h1value.innerHTML = `Current value: ${randomColorh1}`
}

function h1black(event){
    h1color.style.color = "rgb(0,0,0,0.9)";
    h1value.innerHTML = `Current value: black, opacity 0.9`
  }

  function h1white(event){
    h1color.style.color = "white";
    h1value.innerHTML = `Current value: white`
  }

  h1randombutton.addEventListener('click', h1randomcolor);
  h1blackbutton.addEventListener('click', h1black);
  h1whitebutton.addEventListener('click', h1white);


  let textrandombutton = document.getElementById('textrandombutton');
let textvalue = document.getElementById('textvalue');
let textblackbutton = document.getElementById('textblackbutton');
let textwhitebutton = document.getElementById('textwhitebutton');
let textcolor = document.querySelectorAll('p, h2, h3, a');


function textrandomcolor(event){
  let randomColortext = 'rgb(' + colorValue() + ',' + colorValue() + ',' +    colorValue()+ ',' + 0.9+')';
  let textcolors = document.querySelectorAll('p, h2, h3, a'), textcolor, i;
  for(i = 0; (textcolor = textcolors[i]); i++) {
    textcolor.style.color = randomColortext;
  }
  textvalue.innerHTML = `Current value: ${randomColortext}`
}

function textblack(event){
  let textcolors = document.querySelectorAll('p, h2, h3, a'), textcolor, i;
  for(i = 0; (textcolor = textcolors[i]); i++) {
    textcolor.style.color = "rgb(0,0,0,0.9)";
  }
    
    textvalue.innerHTML = `Current value: black, opacity 0.9`
  }

  function textwhite(event){
    let textcolors = document.querySelectorAll('p, h2, h3, a'), textcolor, i;
    for(i = 0; (textcolor = textcolors[i]); i++) {
      textcolor.style.color = "white";
    }

    textvalue.innerHTML = `Current value: white`
  }

  textrandombutton.addEventListener('click', textrandomcolor);
  textblackbutton.addEventListener('click', textblack);
  textwhitebutton.addEventListener('click', textwhite);


  let btrandombutton = document.getElementById('btrandombutton');
  let btvalue = document.getElementById('btvalue');
  let btblackbutton = document.getElementById('btblackbutton');
  let btwhitebutton = document.getElementById('btwhitebutton');
  let btcolor = document.querySelectorAll('button');
  
  function btrandomcolor(event){
    let randomColorbt = 'rgb(' + colorValue() + ',' + colorValue() + ',' +    colorValue()+ ',' + 0.9+')';
    let btcolors = document.querySelectorAll('button'), btcolor, i;
    for(i = 0; (btcolor = btcolors[i]); i++) {
      btcolor.style.color = randomColorbt;
    }
    btvalue.innerHTML = `Current value: ${randomColorbt}`
  }
  
  function btblack(event){
    let btcolors = document.querySelectorAll('button'), btcolor, i;
    for(i = 0; (btcolor = btcolors[i]); i++) {
      btcolor.style.color = "rgb(0,0,0,0.9)";
    }
      
      btvalue.innerHTML = `Current value: black, opacity 0.9`
    }
  
    function btwhite(event){
      let btcolors = document.querySelectorAll('button'), btcolor, i;
      for(i = 0; (btcolor = btcolors[i]); i++) {
        btcolor.style.color = "white";
      }
  
      btvalue.innerHTML = `Current value: white`
    }
  
    btrandombutton.addEventListener('click', btrandomcolor);
    btblackbutton.addEventListener('click', btblack);
    btwhitebutton.addEventListener('click', btwhite);

    let bgbtrandombutton = document.getElementById('bgbtrandombutton');
    let bgbtvalue = document.getElementById('bgbtvalue');
    let bgbtblackbutton = document.getElementById('bgbtblackbutton');
    let bgbtwhitebutton = document.getElementById('bgbtwhitebutton');
    let bgbtcolor = document.querySelectorAll('button');
  
    function bgbtrandomcolor(event){
      let randomColorbgbt = 'rgb(' + colorValue() + ',' + colorValue() + ',' +    colorValue()+ ',' + 0.9+')';
      let bgbtcolors = document.querySelectorAll('button'), bgbtcolor, i;
      for(i = 0; (bgbtcolor = bgbtcolors[i]); i++) {
        bgbtcolor.style.backgroundColor = randomColorbgbt;
      }
      bgbtvalue.innerHTML = `Current value: ${randomColorbgbt}`
    }
    
    function bgbtblack(event){
      let bgbtcolors = document.querySelectorAll('button'), bgbtcolor, i;
      for(i = 0; (bgbtcolor = bgbtcolors[i]); i++) {
        bgbtcolor.style.backgroundColor = "rgb(0,0,0,0.9)";
      }
        
        bgbtvalue.innerHTML = `Current value: black, opacity 0.9`
      }
    
      function bgbtwhite(event){
        let bgbtcolors = document.querySelectorAll('button'), bgbtcolor, i;
        for(i = 0; (bgbtcolor = bgbtcolors[i]); i++) {
          bgbtcolor.style.backgroundColor = "white";
        }
    
        bgbtvalue.innerHTML = `Current value: white`
      }
    
      bgbtrandombutton.addEventListener('click', bgbtrandomcolor);
      bgbtblackbutton.addEventListener('click', bgbtblack);
      bgbtwhitebutton.addEventListener('click', bgbtwhite);
  

      let h1random = document.getElementById('h1random');
      let h1serif = document.getElementById('h1serif');
      let h1sansserif = document.getElementById('h1sansserif');
  

      let fontType = [ "Arial", "Verdana", "Helvetica", 
      "arvo",
      "lato",
      "volkhov",
      "ubuntu",
      "roboto",
      "anton"];
    
      function h1seriffamily(event){
        h1color.style.fontFamily = 'serif'
        h1familyvalue.innerHTML = `Current value: serif`
      }
    
      function h1sansseriffamily(event){
        h1color.style.fontFamily = 'sans-serif'
        h1familyvalue.innerHTML = `Current value: sans-serif`
      }
    
      
      
      function h1randomfamily(event){
        let fontValue =  Math.floor(Math.random() * 9);
        h1color.style.fontFamily = fontType[fontValue];
        h1familyvalue.innerHTML = `Current value: ${fontType[fontValue]}`

      }

      h1random.addEventListener('click', h1randomfamily);
      h1sansserif.addEventListener('click', h1sansseriffamily);
      h1serif.addEventListener('click', h1seriffamily);



      let mtextvalue = document.getElementById('mtextvalue');
      let textserif = document.getElementById('textserif');
      let textsansserif = document.getElementById('textsansserif');
      


  
      function textrandomfamily(event){
        let textfamylies = document.querySelectorAll('p, h2, h3, a'), textcolor, i;
        let fontValue2 =  Math.floor(Math.random() * 9);
        for(i = 0; (textcolor = textfamylies[i]); i++) {
     
      textcolor.style.fontFamily = fontType[fontValue2];

    }
    mtextvalue.innerHTML = `Current value: ${fontType[fontValue2]}`
}

function textseriffamily(event){
  let textfamylies = document.querySelectorAll('p, h2, h3, a'), textcolor, i;
  for(i = 0; (textcolor = textfamylies[i]); i++) {

textcolor.style.fontFamily = 'serif';

}
mtextvalue.innerHTML = `Current value: serif`
}
      
      
      function textsansseriffamily(event){
          let textfamylies = document.querySelectorAll('p, h2, h3, a'), textcolor, i;
          for(i = 0; (textcolor = textfamylies[i]); i++) {
        textcolor.style.fontFamily = 'sans-serif';
      }
      mtextvalue.innerHTML = `Current value: sans-serif`
  }


      textrandom.addEventListener('click', textrandomfamily);
      textsansserif.addEventListener('click', textsansseriffamily);
      textserif.addEventListener('click', textseriffamily);


      let reset = document.getElementById('reset');


       function resetall(event){
        let textfamylies = document.querySelectorAll('p, h2, h3, a'), textcolor, i;
        for(i = 0; (textcolor = textfamylies[i]); i++) {
      
      textcolor.style.fontFamily = '';
      textcolor.style.color = "";
      
      }
      mtextvalue.innerHTML = `Current value: default`;
      textvalue.innerHTML = `Current value: black`;

      let bgbtcolors = document.querySelectorAll('button'), bgbtcolor, j;
      for(j = 0; (bgbtcolor = bgbtcolors[j]); j++) {
        bgbtcolor.style.backgroundColor = "";
        bgbtcolor.style.color = "";
      }
        
        bgbtvalue.innerHTML = `Current value: rgb(62, 142, 65)`;
        btvalue.innerHTML = `Current value: white`;
        document.body.style.backgroundColor = "";
        bgvalue.innerHTML = `Current value: gainsboro`;
        maincolor.style.backgroundColor = "";
        bgmvalue.innerHTML = `Current value: silver`;
        fncolor.style.backgroundColor = "";
        fn1color.style.backgroundColor = "";
        bgfnvalue.innerHTML = `Current value: darkgrey`;
        h1color.style.color = "";
        h1value.innerHTML = `Current value: black`;
        h1color.style.fontFamily = ''
        h1familyvalue.innerHTML = `Current value: default`
      }
  
    
    


      reset.addEventListener('click', resetall);

      