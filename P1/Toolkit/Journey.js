/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.disfrutones";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/Angelgf22/DIU21/tree/master/P1";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Julio Colón",
                Photo: "man1.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere hacer el camino de santiago con sus amigos.",
                touch1: "agenda",
                feel1: "4",
                con1: "Tiene que estar de acuerdo que dias les viene bien a todos. ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Entra en turismo.gal para buscar que camino es el mejor para su condición y tiempo.",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Tiene discapacidad y por tanto necesita un camino adecuado para él.",
                ima2: "cartoon-planning.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra la opcion de 'Turismo Accesible' fácilmente en el que encontrar las rutas.",
                touch3: "Ordenador",
                feel3: "3",
                con3: "La página tarda mucho en cargar.",
                ima3: "cartoon-reading.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Leer el archivo pdf con la información.",
                touch4: "Ordenador",
                feel4: "1",
                con4: "Solamente hay un pdf en el que hay mucha información poco sintetizada. Debe ayudarse de fuentes externas a la misma página.",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Conseguir opinión de sus amigos sobre la ruta a realizar.",
                touch5: "móvil (whatsapp)",
                feel5: "3",
                con5: "A los amigos también les cuesta investigar sobre esa ruta.",
                ima5: "cartoon-teamthinking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue planificar el trayecto y estar de acuerdo con sus amigos",
                touch6: "Ordenador",
                feel6: "3",
                con6: "En todo el proceso ha tardado mucho tiempo.",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Isabel Pérez",
                Photo: "persona1.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su marido para Semana Santa, partiendo el Viernes de Dolores",
                touch1: "Agenda",
                feel1: "5",
                con1: "Necesita reservar viaje y vivienda para el Viernes de Dolores",
                ima1: "cartoon-writting.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Su hijo le comenta que busque en Google 'Turismo Rural Galicia' y pinche en la primera página que salga",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Las 3 primeras páginas dicen ser solo Casas Rurales, pincha en la 4a que es de la Xunta de Galicia",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Entra al sitio web turismo.gal ",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Aparecen decenas de casas rurales, sin embargo no contienen información de reserva, solo teléfonos y webs externas para consultar ",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Decide llamar a una casa rural para preguntar",
                touch4: "Móvil (llamada)",
                feel4: "1",
                con4: "No están disponibles dos de las tres consultadas, acaba quedándose con la libre. Agradecería haber tenido esta información en la web",
                ima4: "cartoon-phoningangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de teléfono la casa y ahora necesita obtener los viajes y ver qué visitar ",
                touch5: "Ordenador (turismo.gal)",
                feel5: "3",
                con5: "Observa una pestaña en la misma página que dice 'Planifica tu viaje', que contiene esta información que necesita bien organizada",
                ima5: "cartoon-PChappy.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar para vacaciones y además sabe qué visitar",
                touch6: "Ordenador (reserva OK)",
                feel6: "4",
                con6: "No puede consultar la información del viaje y del hospedaje en la misma página, requiere uso de teléfono y ayuda externa para hacer las reservas del viaje",
                ima6: "cartoon-shaking.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



