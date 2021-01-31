
    window.addEventListener('load',()=>{

       
        const exe1 = document.querySelector('#input-exe1-1');

        exe1.addEventListener('click',event=>{
            exe1.value++;
        }) 

        const exe2_minus = document.querySelector('#input-exe2-1');
        const exe2_text = document.querySelector('#input-exe2-2');
        const exe2_plus = document.querySelector('#input-exe2-3');

        exe2_minus.addEventListener('click',event=>{
            exe2_text.value--;
        }) 
        exe2_plus.addEventListener('click',event=>{
            exe2_text.value++;
        }) 

        const exe3_input = document.querySelector('#input-exe3-1');
        const exe3_encode = document.querySelector('#input-exe3-2');
        const exe3_decode = document.querySelector('#input-exe3-3');
        const exe3_output = document.querySelector('#input-exe3-4');

        exe3_encode.addEventListener('click',event=>{
            console.log(encodeURIComponent(exe3_input.value))
           exe3_output.value = encodeURIComponent(exe3_input.value);
        })

        exe3_decode.addEventListener('click',event=>{
            exe3_output.value = decodeURIComponent(exe3_input.value);
         })


        const exe4_input = document.querySelector('#input-exe4-1');
        const exe4_output = document.querySelector('#output-exe4-1');
        exe4_input.addEventListener('input',event=>{
           
           exe4_output.innerHTML = encodeURIComponent(exe4_input.value.length);
        })

        const exe5_input = document.querySelector('#input-exe5-1');
        const exe5_output = document.querySelector('#output-exe5-1');
        exe5_input.addEventListener('change',event=>{
            //exe4_output.innerHTML = encodeURIComponent(exe4_input.value.length);
            exe5_output.style.backgroundColor = exe5_input.value
         })


    })