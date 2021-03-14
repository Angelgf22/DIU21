/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.disfrutones";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/Angelgf22/DIU21/tree/master/P1";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Julio Colón",
				Photo: "man1.jpeg",
				Quote: "¡A por ello!",
				Age: 25,
				Occupation: "Deportista paraolímpico de baloncesto",
				Family: "Con pareja desde hace 4 años",
				Location: "Atarfe, Granada",
				Character: "Le gusta entrenar baloncesto. Va en silla de ruedas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 1 }
				], 
				Goals: ["Viajar y la naturaleza", "Mejorar como jugador" , "Formar una familia."],
				Frustrations: ["No saber a que dedicarse en el futuro.", "Le gustaría viajar a más sitios."],
				Bio: "Es de Ecuador pero vino a Granada de joven con su familia. Le gustaba mucho el baloncesto. En un accidente de tráfico acabó en silla de ruedas a los 10 años, aquí consiguió hacerse jugador reconocido de baloncesto paralímpico. LLeva 3 años jugando profesionalmente y aspira a las paraolimpiadas. Tiene bastantes amigos y se lleva muy bien con su equipo de baloncesto. A veces organiza viajes con su pareja y amigos. También le gusta jugar videojuegos en su tiempo libre.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos: "Le gustaría hacer el camino de Santiago con sus amigos.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Isabel Pérez",
				Photo: "persona1.jpg",
				Quote: "La vida es bella",
				Age: 56,
				Occupation: "Recepcionista",
				Family: "Casada, 3 hijos independizados",
				Location: "Zaidín, Granada",
				Character: "Luchadora, sincera y apañada. Muy tradicional, se frustra con la tecnología",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Ser abuela.", "Conocer el mundo junto a su marido.", "Tener una vida tranquila.", "Conocer al Papa."],
				Frustrations: ["La tecnología se le resiste.", "Odia que le lleven la contraria.", "Pierde los nervios con los animales.", "No se ha sacado el carné de conducir."],
				Bio: "Nació en Maracena, donde comenzó su educación y la dejó tempranamente para trabajar en el campo. De adolescente se enamoró de quien hoy es su marido y se casaron pasados los 20 años. A los 36 decidió dejar de ser ama de casa y abandonar el campo. Acabó entonces sus estudios obligatorios y consiguió un puesto de trabajo en una clínica de belleza en el centro de Granada como recepcionista ",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 0 }
					
				], 
                Contextos:   "Se acerca Semana Santa y quiere realizar turismo rural por Galicia junto a su esposo." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])