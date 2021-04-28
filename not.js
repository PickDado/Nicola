

let f1=[1,2,3,4,5,6,7];

let f2=[8,9,10,11,12,13,14];

let f3=[15,16,17,18,19,20,21];

let mazzo=[...f1,...f2,...f3];

let cont=0;

scrivi();

let numeroMagico=0;







function pulsante1(){
    mazzo=[...f2,...f1,...f3];

    if(cont<2){mescola()};
        
    numeroMagico=f1[3];
    console.log(numeroMagico);
    scrivi();

    cont++;
    volte();

    controlla();

}

function pulsante2(){
    mazzo=[...f1,...f2,...f3];
    if(cont<2){mescola()};
    numeroMagico=f2[3];
    console.log(numeroMagico);
    scrivi();

    cont++;
    volte();

    controlla();
}

function pulsante3(){
    mazzo=[...f1,...f3,...f2];
    if(cont<2){mescola()};
    numeroMagico=f3[3];
    console.log(numeroMagico);
    scrivi();

    cont++;
    volte();

    controlla();
}

function mescola(){
    f1[0]=mazzo[0];
    f2[0]=mazzo[1];
    f3[0]=mazzo[2];
    
    f1[1]=mazzo[3];
    f2[1]=mazzo[4];
    f3[1]=mazzo[5];
    
    f1[2]=mazzo[6];
    f2[2]=mazzo[7];
    f3[2]=mazzo[8];

    f1[3]=mazzo[9];
    f2[3]=mazzo[10];
    f3[3]=mazzo[11];

    f1[4]=mazzo[12];
    f2[4]=mazzo[13];
    f3[4]=mazzo[14];

    f1[5]=mazzo[15];
    f2[5]=mazzo[16];
    f3[5]=mazzo[17];

    f1[6]=mazzo[18];
    f2[6]=mazzo[19];
    f3[6]=mazzo[20];

    console.log(f1);
    console.log(f2);
    console.log(f3);

}

function scrivi(){
    for (let i=0;i<7;i++){
        let elem=document.querySelector(".a"+i);
        elem.innerHTML=f1[i];

        let elem2=document.querySelector(".b"+i);
        elem2.innerHTML=f2[i];

        let elem3=document.querySelector(".c"+i);
        elem3.innerHTML=f3[i];
    }
   
}


function controlla(){
    if(cont==3){

        alert("Il numero che hai scelto è "+numeroMagico);

        f1=[1,2,3,4,5,6,7];

        f2=[8,9,10,11,12,13,14];

        f3=[15,16,17,18,19,20,21];

        mazzo=[...f1,...f2,...f3];

        cont=0;

        volte();

        scrivi()
        
        }
}

function volte(){
    if(cont==0){
        let elm4=document.querySelector(".perAncora");
        elm4.innerHTML="per 3 volte";
        
    }
    if(cont==1){
        let elm4=document.querySelector(".perAncora");
        elm4.innerHTML="per altre 2 volte";
    
    }
    if(cont==2){
        let elm4=document.querySelector(".perAncora");
        elm4.innerHTML="per l'ultima volta";
    }
}