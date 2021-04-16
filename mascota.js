const valorPregunta = (nombre) => {
    const inputs = document.querySelectorAll(`input[name="${nombre}"]`);
    let pregunta = '';
    for ( const input of inputs) {
      if(input.checked) {
        pregunta = input.value;
      }
    }
    return pregunta;
  }
  
  const botonClick = () => {
    const pregunta1 = valorPregunta('pregunta1');
    const pregunta2 = valorPregunta('pregunta2');
    const pregunta3 = valorPregunta('pregunta3');
    const pregunta4 = valorPregunta('pregunta4');
    const pregunta5 = valorPregunta('pregunta5');
    const pregunta6 = valorPregunta('pregunta6');
    const pregunta7 = valorPregunta('pregunta7');
    const pregunta8 = valorPregunta('pregunta8');
    const pregunta9 = valorPregunta('pregunta9');
    const pregunta10 = valorPregunta('pregunta10');
    
    const curiosidadg = '¿Sabias que? Tener un gato ayuda a reducir el estres, debido a que si los acaricias reduce los niveles de cortisol (hormona relacionada con el estres). Se cree, tambien, que el contacto fisico con gatos incrementa en humanos la produccion de ondas tetha cerebrales, que habitualmente se producen en estados de relajacion y calma profunda.';
    
    const curiosidadp = '¿Sabias que? Los propietarios de perros tienen un sistema inmunitario más fuerte, que les ayuda a estar bien y a pasar menos tiempo superando enfermedades e infecciones. De hecho, aquellos que tienen perro suelen ir menos al médico que los que no lo tienen, y es también menos probable que necesiten medicación.';
    
    const curiosidadm = '¿Sabias que? tener una mascota sirve como efecto terapéutico en personas con autismo.';
    
    let resultado = 'Segun la encuesta realizada podemos determinar que eres un amante de los'; 
    let perros = 0;
    let gatos = 0;
    
    if (pregunta1 == "perro") perros += 1;
    if (pregunta1 == "gato") gatos += 1;
    
    if (pregunta2 == 'gato') gatos += 1;
    if (pregunta2 == 'perro') perros += 1;
    
    if (pregunta3 == 'perro') perros += 1;
    if (pregunta3 == 'gato') gatos += 1; 
    
    if (pregunta4 == 'gato') gatos += 1;
    if (pregunta4 == 'perro') perros += 1;
    
    if (pregunta5 == 'perro') perros += 1;
    if (pregunta5 == 'gato') gatos += 1;
    
    if (pregunta6 == 'gato') gatos += 1;
    if (pregunta6 == 'perro') perros += 1;
    
    if (pregunta7 == 'perro') perros += 1;
    if (pregunta7 == 'gato') gatos += 1;
    
    if (pregunta8 == 'gato') gatos += 1;
    if (pregunta8 == 'perro') perros += 1;
    
    if (pregunta9 == 'perro') perros += 1;
    if (pregunta9 == 'gato') gatos += 1;
    
    if (pregunta10 == 'gato') gatos += 1;
    if (pregunta10 == 'perro') perros += 1;
    
    let final = perros + gatos;
    
    if (perros > gatos) resultado = resultado + ` Perros. <br> ${curiosidadp} <br> Resultados: Perros: ${perros} Gatos: ${gatos}`;
    
    if (perros < gatos) resultado = resultado + ` Gatos. <br> ${curiosidadg} <br> Resultados: Perros: ${perros} Gatos: ${gatos}`;
    
    if (perros == gatos) resultado = resultado + ` Perros y gatos, los amas por igual. <br> ${curiosidadm} <br> Resultados: Perros: ${perros} Gatos: ${gatos}`;
    
    if (final !== 10) resultado = 'No has completado el formulario, porfavor contesta todas las preguntas';
    
    if (pregunta1 == 'gato' && pregunta2 == 'perro' && pregunta3 == 'gato' && pregunta4 == 'perro' && pregunta5 == 'gato' && pregunta6 == 'perro' && pregunta7 == 'gato' && pregunta8 == 'perro' && pregunta9 == 'gato' && pregunta10 == 'perro') resultado =  `No te gusta los perros ni los gatos. <br> ${curiosidadm}`;
    
    return resultado;
  }
  
  document.querySelector('.boton').addEventListener('click', event => {
    const resultado = botonClick();
    const elemento = document.querySelector('.resultado');
  
    if(resultado !== '') {  
      elemento.classList.remove('oculto');
      elemento.innerHTML = resultado;
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    } else {
      elemento.classList.add('oculto');
    }
  });
  