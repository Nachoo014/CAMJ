import React, { useState, useEffect }  from 'react'
import "./Inicio.css";
import * as motion from "motion/react-client";


function Padron() {

      const datosIniciales = [
        {
          "Apellido": "ABRAHAN",
          "Nombre": "Marcos Emanuel",
          "Calle y número": "Vicente Lopez y Planes 262",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470052/ 15437170",
          "Matrícula": "13-514",
          "Correo Electrónico": "abrahanmarcos@gmail.com"
        },
        {
          "Apellido": "AGUSTI",
          "Nombre": "Ricardo Jaime",
          "Calle y número": "25 de Mayo 464",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/458598-455168Est.",
          "Matrícula": "13-469",
          "Correo Electrónico": "agustiricardo@gmail.com"
        },
        {
          "Apellido": "AGUSTIN",
          "Nombre": "Angelina",
          "Calle y número": "3 de Febrero 1073",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15624004",
          "Matrícula": "13-566",
          "Correo Electrónico": "angiagustin@gmail..com"
        },
        {
          "Apellido": "AIROLDI",
          "Nombre": "Germán Alberto",
          "Calle y número": "Independencia 133",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/423436",
          "Matrícula": "13-105",
          "Correo Electrónico": "germanairoldi@futurnet.com.ar"
        },
        {
          "Apellido": "AIROLDI",
          "Nombre": "Federico",
          "Calle y número": "Independencia 133 legal)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/423436- 15547610",
          "Matrícula": "13-575",
          "Correo Electrónico": "airofede@hotmail.com"
        },
        {
          "Apellido": "ALBERIONE",
          "Nombre": "Henry Alberto",
          "Calle y número": "Belgrano 845",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/424474",
          "Matrícula": "13-63",
          "Correo Electrónico": "yenalberione@gmail.com"
        },
        {
          "Apellido": "ALLASIA",
          "Nombre": "Maria Alejandra",
          "Calle y número": "Rosario 371 (est.)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/433173 - 15538119",
          "Matrícula": "13-459",
          "Correo Electrónico": "alejandraallasia@hotmail.com"
        },
        {
          "Apellido": "AMAYA",
          "Nombre": "Julieta Magali",
          "Calle y número": "Cabo Guanca 453",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15625188",
          "Matrícula": "13-563",
          "Correo Electrónico": "juliamaya_18@hotmail.com"
        },
        {
          "Apellido": "AMBROGGIO",
          "Nombre": "Manuel",
          "Calle y número": "3 de Febrero 1180 (legal)",
          "Código Postal": 2580,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/15517148- 401500(ESTUDIO)",
          "Matrícula": "13-533",
          "Correo Electrónico": "manuelambroggio@hotmail.com"
        },
        {
          "Apellido": "AMBROSI",
          "Nombre": "Lorena",
          "Calle y número": "Bismark 496",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15502752",
          "Matrícula": "13-408",
          "Correo Electrónico": "lorenaambrosi@hotmail.com"
        },
        {
          "Apellido": "AMIGONE",
          "Nombre": "María Silvina",
          "Calle y número": "Belgrano 1505 (estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/453256- 15521007",
          "Matrícula": "13-255",
          "Correo Electrónico": "silvinaamigone@yahoo.com.ar"
        },
        {
          "Apellido": "AMIGONE",
          "Nombre": "Martín Miguel",
          "Calle y número": "Belgrano 1479 (Estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/ 427074 444479 (Est.)15520907",
          "Matrícula": "13-309",
          "Correo Electrónico": "martinamigone@hotmail.com"
        },
        {
          "Apellido": "ANDRADA",
          "Nombre": "Carlos Benigno",
          "Calle y número": "Belgrano 648",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15435383",
          "Matrícula": "13-525",
          "Correo Electrónico": "finiqueti@gmail.com"
        },
        {
          "Apellido": "ANNONE",
          "Nombre": "Vanesa Beatríz",
          "Calle y número": "San Martín 72",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/409063-15569377",
          "Matrícula": "13-416",
          "Correo Electrónico": "vanesaannone@gmail.com"
        },
        {
          "Apellido": "ANTÚNEZ",
          "Nombre": "Emiliano Eduardo",
          "Calle y número": "Igoillo 723",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/481271- 03537/15592863",
          "Matrícula": "13-270",
          "Correo Electrónico": "emiliano_antunez@hotmail.com"
        },
        {
          "Apellido": "ANTÚNEZ",
          "Nombre": "Lisandro",
          "Calle y número": "Dante Alighieri 1032",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/481271 (03537) 15592864",
          "Matrícula": "13-220",
          "Correo Electrónico": "lisandro_antunez@hotmail.com"
        },
        {
          "Apellido": "ANTÚNEZ",
          "Nombre": "María Eulogia",
          "Calle y número": "Av. Igoillo 723",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/481271-0351/155149622",
          "Matrícula": "13-368",
          "Correo Electrónico": "euloantunez@hotmail.com"
        },
        {
          "Apellido": "ARAUZ",
          "Nombre": "Rosa Susana",
          "Calle y número": "Sarmiento 121",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/422232- 15544289",
          "Matrícula": "13-14",
          "Correo Electrónico": "susanaarauz@futurnet.com.ar"
        },
        {
          "Apellido": "ARCIERO",
          "Nombre": "Liliana Beatriz",
          "Calle y número": "Saenz Peña 1162",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/456558- 15626082",
          "Matrícula": "13-164",
          "Correo Electrónico": "libea1964@gmail.com"
        },
        {
          "Apellido": "ARGAÑARAZ",
          "Nombre": "Georgina",
          "Calle y número": "Belgrano 1037 PB Oficina D(est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15526247",
          "Matrícula": "13-456",
          "Correo Electrónico": "georginaargañaraz@gmail.com"
        },
        {
          "Apellido": "ARMANDO",
          "Nombre": "Alejandra Daniela",
          "Calle y número": "Av. Del Libertador 1716",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/ 582299",
          "Matrícula": "13-443",
          "Correo Electrónico": "aledanar@hotmail.com"
        },
        {
          "Apellido": "AVALLE",
          "Nombre": "Mariano Diego",
          "Calle y número": "Alem 524 (Legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/458356- 15502284",
          "Matrícula": "13-256",
          "Correo Electrónico": "marianoavalle@hotmail.com"
        },
        {
          "Apellido": "AVALLE",
          "Nombre": "Gustavo",
          "Calle y número": "Tucumán 349(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/455476- 15555217",
          "Matrícula": "13-318",
          "Correo Electrónico": "avallegustavo@hotmail.com"
        },
        {
          "Apellido": "AVARELLO",
          "Nombre": "Daniel Guillermo",
          "Calle y número": "Av. Alem 267",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15550952",
          "Matrícula": "13-470",
          "Correo Electrónico": "danielgavarello@hotmail.com"
        },
        {
          "Apellido": "BACHELLA",
          "Nombre": "Sebastian Gerardo",
          "Calle y número": "Santa Rosa 759",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15560191",
          "Matrícula": "13-539",
          "Correo Electrónico": "sebastianbachella@hotmail.com"
        },
        {
          "Apellido": "BADA",
          "Nombre": "Héctor Hugo",
          "Calle y número": "Córdoba 677(estudio)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/409307- 15416888",
          "Matrícula": "13-13",
          "Correo Electrónico": "hectorhugobada@gmail.com"
        },
        {
          "Apellido": "BALDOVINO",
          "Nombre": "Andrés Guillermo",
          "Calle y número": "Intendente M.Muñoz 844",
          "Código Postal": 2589,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/422559-402559",
          "Matrícula": "13-201",
          "Correo Electrónico": "abaldovino@copca.com.ar"
        },
        {
          "Apellido": "BALDOVINO",
          "Nombre": "María",
          "Calle y número": "Belgrano 1018",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/402559",
          "Matrícula": "13-586",
          "Correo Electrónico": "mariabaldovino9@gmail.com"
        },
        {
          "Apellido": "BALEANI",
          "Nombre": "Horacio Luis",
          "Calle y número": "Jujuy 624Ms.Jz.-Santa Fe 585 C.de Bustos",
          "Código Postal": 2587,
          "Ciudad": "INRIVILLE",
          "Nº de teléfono": "03467/480341- 15447177",
          "Matrícula": "13-150",
          "Correo Electrónico": "horaciobaleani@arnet.com.ar"
        },
        {
          "Apellido": "BARANDA",
          "Nombre": "Julio Ricardo",
          "Calle y número": "25 de Mayo 276 (est.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/422123- 15588783",
          "Matrícula": "13-385",
          "Correo Electrónico": "baranda.julio@hotmail.com"
        },
        {
          "Apellido": "BARBIERI",
          "Nombre": "Juan Manuel José",
          "Calle y número": "Maipú 1129 est.",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/444539",
          "Matrícula": "13-352",
          "Correo Electrónico": "drbarbieri@hotmail.com"
        },
        {
          "Apellido": "BARGNA",
          "Nombre": "Marianela",
          "Calle y número": "San Martin 1517 (legal) Ms.Jz.",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15465933.",
          "Matrícula": "13-528",
          "Correo Electrónico": "bargnam@gmail.com"
        },
        {
          "Apellido": "BARLASINA",
          "Nombre": "Maricruz",
          "Calle y número": "Urquiza 465",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15567296",
          "Matrícula": "13-489",
          "Correo Electrónico": "Marubarlasina@hotmail.com"
        },
        {
          "Apellido": "BAROVERO",
          "Nombre": "Néstor José",
          "Calle y número": "Carlos Pellegrini 1059",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/455722",
          "Matrícula": "13-42",
          "Correo Electrónico": "nestorbarovero@baroverotouz.com.ar"
        },
        {
          "Apellido": "BAROVERO",
          "Nombre": "Diego Carlos",
          "Calle y número": "Pedro Lino Funes 387 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/456331- 15448843",
          "Matrícula": "13-170",
          "Correo Electrónico": "dcbarovero@fibertel.com.ar"
        },
        {
          "Apellido": "BAROVERO",
          "Nombre": "Analía del Luján",
          "Calle y número": "Pedro Lino Funes 387 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/456331- 15520059",
          "Matrícula": "13-207",
          "Correo Electrónico": "analiabarovero@coyspu.com.ar"
        },
        {
          "Apellido": "BAROVERO",
          "Nombre": "Pablo Abel",
          "Calle y número": "Avellaneda 214 (est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15439007 456370",
          "Matrícula": "13-330",
          "Correo Electrónico": "pabloabelbarovero@hotmail.com"
        },
        {
          "Apellido": "BARRERA",
          "Nombre": "Nicolás",
          "Calle y número": "Capdevila 256",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/444300- 15620500",
          "Matrícula": "13-238",
          "Correo Electrónico": "drbarreranicolas@gmail.com"
        },
        {
          "Apellido": "BAS",
          "Nombre": "Luciana Martina",
          "Calle y número": "Tota de Pedemonte 1436",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/402720-15649869",
          "Matrícula": "13-320",
          "Correo Electrónico": "luciana_bas@hotmail.com"
        },
        {
          "Apellido": "BECERRA FERNANDEZ",
          "Nombre": "María Belén",
          "Calle y número": "Dr. Rodolfo Fumagalli 240",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "0351/152059041",
          "Matrícula": "13-505",
          "Correo Electrónico": "belenbf@outlook.com"
        },
        {
          "Apellido": "BELLI",
          "Nombre": "María Fernanda",
          "Calle y número": "Güemes 1331",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/401517- 0341/156056004",
          "Matrícula": "13-499",
          "Correo Electrónico": "mariafernandabelli@gmail.com"
        },
        {
          "Apellido": "BELLO",
          "Nombre": "Carlos Leandro",
          "Calle y número": "Catamarca 234",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "0341/156580717",
          "Matrícula": "13-521",
          "Correo Electrónico": "bellocarlos.abogado@gmail.com"
        },
        {
          "Apellido": "BENASSI",
          "Nombre": "Sofía Soledad",
          "Calle y número": "Belgrano 1615 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/457709- 15624052",
          "Matrícula": "13-433",
          "Correo Electrónico": "sofi_benassi@hotmail.com"
        },
        {
          "Apellido": "BENEDETTI",
          "Nombre": "Melina Paola",
          "Calle y número": "Beiró 287 (estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472-/428032 Est.15447086",
          "Matrícula": "13-335",
          "Correo Electrónico": "melinabenedetti@hotmail.com"
        },
        {
          "Apellido": "BERMEJO",
          "Nombre": "Norma N.",
          "Calle y número": "Belgrano 643",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/426450- 15558451",
          "Matrícula": "13-3588",
          "Correo Electrónico": "estudiogarciaallocco@coyspu.com.ar"
        },
        {
          "Apellido": "BERRA",
          "Nombre": "Stefanía",
          "Calle y número": "San Martin 173",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468-421660/ 15410168",
          "Matrícula": "13-338",
          "Correo Electrónico": "sberraabogada@hotmail.com"
        },
        {
          "Apellido": "BERTOZZI",
          "Nombre": "Juliana",
          "Calle y número": "Belgrano 1227 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15557328",
          "Matrícula": "13-453",
          "Correo Electrónico": "julibertozzi@hotmail.com"
        },
        {
          "Apellido": "BIGA",
          "Nombre": "Nicolás",
          "Calle y número": "Pasaje 1º de Mayo 1019(legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/551866 - 0351/153103779",
          "Matrícula": "13-497",
          "Correo Electrónico": "josemartindonato@gmail.com"
        },
        {
          "Apellido": "BINI",
          "Nombre": "María de los Angeles",
          "Calle y número": "Av. L.N.Alem 268(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/456370 (Est.)15586601",
          "Matrícula": "13-84",
          "Correo Electrónico": "estudio-bini@estudio-bini.com.ar"
        },
        {
          "Apellido": "BIRCHMEYER",
          "Nombre": "Eduardo Augusto",
          "Calle y número": "Libertad 434",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/400668",
          "Matrícula": "13-424",
          "Correo Electrónico": "ebirchmeyer@nodosud.com.ar"
        },
        {
          "Apellido": "BISONNI",
          "Nombre": "Rogelio Adrián",
          "Calle y número": "Rioja 1243",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/421956 15640267",
          "Matrícula": "13-109",
          "Correo Electrónico": "rbisonni@arnet.com.ar"
        },
        {
          "Apellido": "BOLVESON",
          "Nombre": "Rosana Lorena",
          "Calle y número": "Azcuénaga 361",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/ 429467 - 15555875",
          "Matrícula": "13-312",
          "Correo Electrónico": "lorenabolveson@hotmail.com"
        },
        {
          "Apellido": "BOLVESON",
          "Nombre": "Alan Rodrigo",
          "Calle y número": "Gral. Capdevila 102",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/422916 - 15504098",
          "Matrícula": "13-223",
          "Correo Electrónico": "bolveson_estjuridico@hotmail.com"
        },
        {
          "Apellido": "BONETTO",
          "Nombre": "Leandro Norberto",
          "Calle y número": "Pedro Lino Funes nº31(legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15430834",
          "Matrícula": "13-477",
          "Correo Electrónico": "drleandrobonetto@gmail.com"
        },
        {
          "Apellido": "BOSIO",
          "Nombre": "María Belén",
          "Calle y número": "San Martin 399-Estudio",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/ 425485-457856 casa",
          "Matrícula": "13-347",
          "Correo Electrónico": "estudiojuridicobosio@gmail.com"
        },
        {
          "Apellido": "BOTACIN",
          "Nombre": "Luis Guillermo",
          "Calle y número": "Alem nº 325",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15467290",
          "Matrícula": "13-384",
          "Correo Electrónico": "luisbotacin@gmail.com"
        },
        {
          "Apellido": "BOTTACIN",
          "Nombre": "Roberto Oscar",
          "Calle y número": "San Martín 758",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/423883- 15506947",
          "Matrícula": "13-120",
          "Correo Electrónico": "perabottacin@gmail.com"
        },
        {
          "Apellido": "BRAVIN",
          "Nombre": "Mara Gisela",
          "Calle y número": "Lardizábal 1986 (Legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15468003",
          "Matrícula": "13-380",
          "Correo Electrónico": "mara_bravin@hotmail.com"
        },
        {
          "Apellido": "BRUNO",
          "Nombre": "Martin Alejandro",
          "Calle y número": "Pedro Lino Funes nº 126 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/ 444147-15625396",
          "Matrícula": "13-323",
          "Correo Electrónico": "estudiomartinbruno@gmail.com"
        },
        {
          "Apellido": "BRUSA",
          "Nombre": "Ernesto Nahuel",
          "Calle y número": "Rosario de Santa fe 623(legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15591399",
          "Matrícula": "13-562",
          "Correo Electrónico": "estudiojuridicobrusa@outlook.com"
        },
        {
          "Apellido": "BRUSASCA",
          "Nombre": "Virginia Andrea",
          "Calle y número": "Italia 587",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15586469",
          "Matrícula": "13-579",
          "Correo Electrónico": "virgibrusasca@gmail.com"
        },
        {
          "Apellido": "BUENO",
          "Nombre": "Matías",
          "Calle y número": "Güemes 257 (legal)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467-470253-471018(EST) / 15439387",
          "Matrícula": "13-435",
          "Correo Electrónico": "matiasbueno62@gmail.com"
        },
        {
          "Apellido": "BUSTAMANTE",
          "Nombre": "Gustavo Javier",
          "Calle y número": "San Martín 1187",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/426258/ 15588029",
          "Matrícula": "13-264",
          "Correo Electrónico": "gustavoj.bustamante@hotmail.com.ar"
        },
        {
          "Apellido": "CAFFARATTI",
          "Nombre": "Luisina Ana",
          "Calle y número": "Laprida 156 (legal)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/472649-15446980",
          "Matrícula": "13-377",
          "Correo Electrónico": "estudiojuridicocaffaratti@gmail.com"
        },
        {
          "Apellido": "CALVO",
          "Nombre": "Daniel Alberto",
          "Calle y número": "9 de Julio 422",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/-458929",
          "Matrícula": "13.- 7",
          "Correo Electrónico": "estudiocalvoabogados@hotmail.com"
        },
        {
          "Apellido": "CALVO",
          "Nombre": "Paulina",
          "Calle y número": "Saavedra 1241",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472 15508363",
          "Matrícula": "13-584",
          "Correo Electrónico": "ab.paulinacalvo@gmail.com"
        },
        {
          "Apellido": "CAMINOTTI",
          "Nombre": "Rubén Orlando",
          "Calle y número": "Italia 953",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/401418 401779 (Est.) 15418635",
          "Matrícula": "13.-11",
          "Correo Electrónico": "caminottiruben@nodosud.com.ar"
        },
        {
          "Apellido": "CAMPAGNOLI",
          "Nombre": "Lorena Daniela",
          "Calle y número": "3 de Febrero 1164",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/426098- 0351/155494948",
          "Matrícula": "13-560",
          "Correo Electrónico": "ldcampagnoli@gmail.com"
        },
        {
          "Apellido": "CANCIANI",
          "Nombre": "Josefina",
          "Calle y número": "Juan C.Gonzalez 1512(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15587856",
          "Matrícula": "13-461",
          "Correo Electrónico": "jocanciani@gmail.com"
        },
        {
          "Apellido": "CANEVARI",
          "Nombre": "Verónica Anahí",
          "Calle y número": "San Martín 489",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/422028 - 15416038",
          "Matrícula": "13-356",
          "Correo Electrónico": "veronicacjcj@hotmail.com"
        },
        {
          "Apellido": "CANTONE",
          "Nombre": "Danilo Román",
          "Calle y número": "Bv. Lardizabal 1459 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/444803/ 15582059",
          "Matrícula": "13-422",
          "Correo Electrónico": "danilo_cantone@hotmail.com"
        },
        {
          "Apellido": "CAPOZUCA",
          "Nombre": "María Laura",
          "Calle y número": "Independencia 362 (real-legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15524864",
          "Matrícula": "13-493",
          "Correo Electrónico": "marialauracapozuca@gmail.com"
        },
        {
          "Apellido": "CARIGNANO",
          "Nombre": "Manuela",
          "Calle y número": "Leandro N.Alem 1115 (real-legal)",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/15538086",
          "Matrícula": "13-570",
          "Correo Electrónico": "manuelacarignano@gmail.com"
        },
        {
          "Apellido": "CARLINO",
          "Nombre": "Ana Julia",
          "Calle y número": "San Martín 277",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "0351/152344763",
          "Matrícula": "13-467",
          "Correo Electrónico": "julicarlino@hotmail.com"
        },
        {
          "Apellido": "CARRARIO",
          "Nombre": "Rubén Pedro",
          "Calle y número": "López y Planes 321",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470267",
          "Matrícula": "13-245",
          "Correo Electrónico": "rubencarrario@yahoo.com.ar"
        },
        {
          "Apellido": "CASALIS",
          "Nombre": "Graciela M.",
          "Calle y número": "Víctor Hugo 361",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/495406",
          "Matrícula": "13-59",
          "Correo Electrónico": "lasabino@coopsur.com.ar"
        },
        {
          "Apellido": "CASINGHINO",
          "Nombre": "María Laura",
          "Calle y número": "San Martín 155(estudio)",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/400266-15645042",
          "Matrícula": "13-206",
          "Correo Electrónico": "mlcasinghino@hotmail.com"
        },
        {
          "Apellido": "CASTELLANO",
          "Nombre": "María Belén",
          "Calle y número": "O' Higgins 632",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/444057/011-1560319207-43736655 est. Bs.as.",
          "Matrícula": "13-285",
          "Correo Electrónico": "mbelen.castellano@gmail.com"
        },
        {
          "Apellido": "CASTILLEJOS",
          "Nombre": "Jimena Soledad",
          "Calle y número": "25 de Mayo 243",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15524997",
          "Matrícula": "13-541",
          "Correo Electrónico": "castillejosjimena@gmail.com"
        },
        {
          "Apellido": "CAVAGLIATTO",
          "Nombre": "Dianela Paula",
          "Calle y número": "San José 408(Legal)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/482799/ 0341-155503865",
          "Matrícula": "13-513",
          "Correo Electrónico": "cavagliattodianela@gmail.com"
        },
        {
          "Apellido": "CELLI TRIUNFETTI",
          "Nombre": "Sebastián",
          "Calle y número": "Pedro Lino Funes 126 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15527013",
          "Matrícula": "13-524",
          "Correo Electrónico": "seba_celli@hotmail.es"
        },
        {
          "Apellido": "CERON",
          "Nombre": "Carlos",
          "Calle y número": "Roque Saenz Peña 869(Est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/457376",
          "Matrícula": "13-237",
          "Correo Electrónico": "carlos_ceron58@hotmail.com"
        },
        {
          "Apellido": "CERON",
          "Nombre": "Juliana",
          "Calle y número": "L.N. Alem 634",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "0341/153144041",
          "Matrícula": "13-595",
          "Correo Electrónico": "julianaceron@hotmail.com"
        },
        {
          "Apellido": "CHIAS",
          "Nombre": "Facundo",
          "Calle y número": "San Lorenzo 363",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "0358/154026404",
          "Matrícula": "13-596",
          "Correo Electrónico": "acuchias89@gmail.com"
        },
        {
          "Apellido": "CHICCO",
          "Nombre": "Valeria Soledad",
          "Calle y número": "Buenos Aires 512 (estudio)",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZIN",
          "Nº de teléfono": "03468/495486/ 15532100",
          "Matrícula": "13-411",
          "Correo Electrónico": "valchicco@hotmail.com"
        },
        {
          "Apellido": "CICCIOLI",
          "Nombre": "Gustavo Pablo",
          "Calle y número": "Güemes 477",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/471503- 15447569",
          "Matrícula": "13-193",
          "Correo Electrónico": "gustavociccioli659@gmail.com"
        },
        {
          "Apellido": "CINGOLANI",
          "Nombre": "Leonardo Silvio",
          "Calle y número": "Dr.Jorge Sapene esq. 9 de Julio",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/471929-15436067",
          "Matrícula": "13-437",
          "Correo Electrónico": "leocingolani@gmail.com"
        },
        {
          "Apellido": "CISNEROS",
          "Nombre": "Maite",
          "Calle y número": "Jujuy 768 (real-legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15641658",
          "Matrícula": "13-554",
          "Correo Electrónico": "maitecisneros2014@gmail.com"
        },
        {
          "Apellido": "CLARAMONTE",
          "Nombre": "Florencia",
          "Calle y número": "Lardizabal 1451 (legal)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15501582",
          "Matrícula": "13-569",
          "Correo Electrónico": "claramonteflorencia@gmail.com"
        },
        {
          "Apellido": "COMBA",
          "Nombre": "Luciano Miguel",
          "Calle y número": "Sabattini 1375",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "0351-52238255",
          "Matrícula": "13-336",
          "Correo Electrónico": "lucianocomba@hotmail.com"
        },
        {
          "Apellido": "COMELLO",
          "Nombre": "Sofía Natalia",
          "Calle y número": "Libertad 1431 (Est.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/455510-15621750",
          "Matrícula": "13-482",
          "Correo Electrónico": "sofiancomello@gmail.com"
        },
        {
          "Apellido": "CONTI",
          "Nombre": "Guillermo Jesus",
          "Calle y número": "Gdor.J.M. de la Sota 474 (legal)",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/15435295- /495063(EST)",
          "Matrícula": "13-531",
          "Correo Electrónico": "gconti@outlook.com"
        },
        {
          "Apellido": "CORAZZA",
          "Nombre": "Gustavo Adolfo",
          "Calle y número": "San Martín 1128 (EST.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/ 428686 (Part.) 426653 (est.)",
          "Matrícula": "13-272",
          "Correo Electrónico": "gacorazza@hotmail.com"
        },
        {
          "Apellido": "CORRÁ",
          "Nombre": "Aníbal César",
          "Calle y número": "Belgrano 1037 PB Ms.Jz.",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472- 483408 15629383",
          "Matrícula": "13-301",
          "Correo Electrónico": "anibalcorra@hotmail.com"
        },
        {
          "Apellido": "CORTESE",
          "Nombre": "Rocío Soledad",
          "Calle y número": "Belgrano 1238 (Est.)",
          "Código Postal": 2624,
          "Ciudad": "ARIAS",
          "Nº de teléfono": "03468/449816-15534002",
          "Matrícula": "13-364",
          "Correo Electrónico": "rociocortese@hotmail.com"
        },
        {
          "Apellido": "CREMA",
          "Nombre": "Agostina",
          "Calle y número": "Rivadavia 927",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15501322",
          "Matrícula": "13-512",
          "Correo Electrónico": "agostinacrema@hotmail.com.ar"
        },
        {
          "Apellido": "CREMONEZZI",
          "Nombre": "Augusto Pastor",
          "Calle y número": "Avellaneda nº 1346",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/424189 - 15438608",
          "Matrícula": "13-481",
          "Correo Electrónico": "cremonezziap@live.com"
        },
        {
          "Apellido": "CRUZ",
          "Nombre": "Valentín",
          "Calle y número": "Rivadavia 996 (legal)",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/ 402075 - 15413237",
          "Matrícula": "13-18",
          "Correo Electrónico": "cruz.ab.og@hotmail.com"
        },
        {
          "Apellido": "CRUZ",
          "Nombre": "Marisol",
          "Calle y número": "Av. Alem 267 PA (estudio)",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/402075- 15648151",
          "Matrícula": "13-236",
          "Correo Electrónico": "cmarisol2015@gmail.com"
        },
        {
          "Apellido": "D'ANGELO",
          "Nombre": "Agostina",
          "Calle y número": "San Martín 758 (Est.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/ 423883 (Est.) 03472 15438802",
          "Matrícula": "13-287",
          "Correo Electrónico": "agostinadangelo@hotmail.com"
        },
        {
          "Apellido": "DEL ARCO",
          "Nombre": "Patricia Rosa",
          "Calle y número": "Tucuman 424 (Est)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/482225-15626465",
          "Matrícula": "13-402",
          "Correo Electrónico": "patrilombardi@hotmail.com"
        },
        {
          "Apellido": "DEL BARCO",
          "Nombre": "Carlos Alberto",
          "Calle y número": "San Martín 831",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/456061",
          "Matrícula": "13-31",
          "Correo Electrónico": "estudiodelbarco@coyspu.com.ar"
        },
        {
          "Apellido": "DEL BARCO",
          "Nombre": "Santiago",
          "Calle y número": "Alem 313(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/446061- 456061(EST)",
          "Matrícula": "13-463",
          "Correo Electrónico": "delbarcosantiago@hotmail.com"
        },
        {
          "Apellido": "DEL BIANCO",
          "Nombre": "Leandro Aníbal",
          "Calle y número": "Echeverría 394(estudio)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/472526- 15416355",
          "Matrícula": "13-371",
          "Correo Electrónico": "leandrodelbianco@gmail.com"
        },
        {
          "Apellido": "DEL PRETE",
          "Nombre": "Estefanía Gisela",
          "Calle y número": "Av. Sarmiento 148 (legal)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15516341",
          "Matrícula": "13-501",
          "Correo Electrónico": "estefaniadelprete@gmail.com"
        },
        {
          "Apellido": "DELIA",
          "Nombre": "Maria Andrea",
          "Calle y número": "Zona Rural",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/430909",
          "Matrícula": "13-546",
          "Correo Electrónico": "andru_delia@hotmail.com"
        },
        {
          "Apellido": "DELSOGLIO",
          "Nombre": "Gustavo Alfredo",
          "Calle y número": "Uruguay 798",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/496066- 15644594",
          "Matrícula": "13-143",
          "Correo Electrónico": "gdelsoglio@nodosud.com.ar"
        },
        {
          "Apellido": "DEPETRIS",
          "Nombre": "Jessica Lucía",
          "Calle y número": "Urquiza 257",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/424359 - 15545399",
          "Matrícula": "13-494",
          "Correo Electrónico": "jldepetris@hotmail.com"
        },
        {
          "Apellido": "DI GIUSTO",
          "Nombre": "Cecilia",
          "Calle y número": "T.A. Edison 435(legal)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/409648-03468/15537991",
          "Matrícula": "13-337",
          "Correo Electrónico": "ceciliadigiusto@gmail.com"
        },
        {
          "Apellido": "DI LORENZO",
          "Nombre": "Cristian Horacio",
          "Calle y número": "Belgrano 256",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/433279 0336/154583368",
          "Matrícula": "13-373",
          "Correo Electrónico": "dilorenzocristian6@gmail.com"
        },
        {
          "Apellido": "DI POMPO",
          "Nombre": "Verónica Marina",
          "Calle y número": "Av. Alem 267",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/425505 (Casa) 424375 15435410",
          "Matrícula": "13-188",
          "Correo Electrónico": "vdipompo@yahoo.com.ar"
        },
        {
          "Apellido": "DODDI",
          "Nombre": "Evangelina",
          "Calle y número": "Buenos Aires 323",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZIN",
          "Nº de teléfono": "03468/495687/ 15528011",
          "Matrícula": "13-181",
          "Correo Electrónico": "evangelinadoddi@guati.com.ar"
        },
        {
          "Apellido": "DONATO",
          "Nombre": "José Martín",
          "Calle y número": "1º De Mayo 1019",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/423658 - 0351-153103779",
          "Matrícula": "13-440",
          "Correo Electrónico": "josemartindonato@hotmail.com"
        },
        {
          "Apellido": "D'ONOFRIO",
          "Nombre": "María Isabel",
          "Calle y número": "F. Beiró 287",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/428032- 15554434",
          "Matrícula": "13-216",
          "Correo Electrónico": "isabeldonofrio@hotmail.com"
        },
        {
          "Apellido": "DURELLI",
          "Nombre": "Guillermo Carlos",
          "Calle y número": "Rioja 1462 Av.Könekamp 672(Est)",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/421882-422626 EST.",
          "Matrícula": "13-409",
          "Correo Electrónico": "guillermodurelli@gmail.com"
        },
        {
          "Apellido": "FABANI",
          "Nombre": "Daiana Soledad",
          "Calle y número": "H.Yrigoyen 1154(legal) Ms.Jz.",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/402048-0341/156135754",
          "Matrícula": "13-479",
          "Correo Electrónico": "daianafabani@gmail.com"
        },
        {
          "Apellido": "FAVARO",
          "Nombre": "Georgina Lucía",
          "Calle y número": "Rivadavia 927",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/ 422121-443121/15558954",
          "Matrícula": "13-286",
          "Correo Electrónico": "georfavaro@hotmail.com"
        },
        {
          "Apellido": "FERNANDEZ",
          "Nombre": "Brenda Magalí",
          "Calle y número": "Mendoza 1329 (Legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03537/15608601",
          "Matrícula": "13-495",
          "Correo Electrónico": "fernandezbrendam@gmail.com"
        },
        {
          "Apellido": "FERNÁNDEZ",
          "Nombre": "Santiago",
          "Calle y número": "San Martín 248(legal)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/432950 15648886",
          "Matrícula": "13-232",
          "Correo Electrónico": "estudiofernandezrivas@gmail.com"
        },
        {
          "Apellido": "FERRINI",
          "Nombre": "Marcela Fabiana",
          "Calle y número": "H.Irigoyen 982 Local 1(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/455024- 15554581",
          "Matrícula": "13-224",
          "Correo Electrónico": "mferrini@coyspu.com.ar"
        },
        {
          "Apellido": "FOCHI",
          "Nombre": "Sergio Fabián",
          "Calle y número": "San Martín 2163(Est)",
          "Código Postal": 2624,
          "Ciudad": "ARIAS",
          "Nº de teléfono": "03468/15565661 449936 03462-400869",
          "Matrícula": "13-249",
          "Correo Electrónico": "sergiofochi@yahoo.com.ar"
        },
        {
          "Apellido": "FORESI",
          "Nombre": "Gerardo Ariel",
          "Calle y número": "Capdevila 256 (est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/444300- 15552448",
          "Matrícula": "13-475",
          "Correo Electrónico": "gerardoforesi@yahoo.com.ar"
        },
        {
          "Apellido": "FORMICA",
          "Nombre": "Pabla Betina",
          "Calle y número": "Hipolito Yrigoyen 846(Est.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/425793-442793-455793/428875 15627796",
          "Matrícula": "13-171",
          "Correo Electrónico": "betina@estudiocarlosmartin.com.ar"
        },
        {
          "Apellido": "FRANCO",
          "Nombre": "Elysabet Sandra",
          "Calle y número": "Marcos Juárez y Sta. Fe",
          "Código Postal": 2645,
          "Ciudad": "COLONIA ITALIANA",
          "Nº de teléfono": "03468/432502",
          "Matrícula": "13-113",
          "Correo Electrónico": "francoelysabet@gmail.com"
        },
        {
          "Apellido": "FROLA",
          "Nombre": "María Emilia",
          "Calle y número": "Santiago del Estero 255",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "0351-152264403",
          "Matrícula": "13-369",
          "Correo Electrónico": "emiliafrola@hotmail.com"
        },
        {
          "Apellido": "FUMAGALLI",
          "Nombre": "Gustavo Rodolfo",
          "Calle y número": "San Martín 152",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470055",
          "Matrícula": "13-85",
          "Correo Electrónico": "fumagallileyes@nodosud.com.ar"
        },
        {
          "Apellido": "FUMAGALLI",
          "Nombre": "Mateo",
          "Calle y número": "M.Moreno 396 (legal)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/15412385-470055",
          "Matrícula": "13-556",
          "Correo Electrónico": "mateofumagalli@hotmail.com"
        },
        {
          "Apellido": "FUMAGALLI",
          "Nombre": "Rodolfo Gabriel",
          "Calle y número": "Mariano Moreno 396(estudio)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470055",
          "Matrícula": "13-465",
          "Correo Electrónico": "fumagallirodolfo@gmail.com"
        },
        {
          "Apellido": "GAIERO",
          "Nombre": "Carlos Javier",
          "Calle y número": "Tucuman 311(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/426277 (Est.) 15582254",
          "Matrícula": "13-168",
          "Correo Electrónico": "carlosjaviergaiero@gmail.com"
        },
        {
          "Apellido": "GAIERO",
          "Nombre": "Fernando Daniel",
          "Calle y número": "Jujuy 624",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/424387",
          "Matrícula": "13-141",
          "Correo Electrónico": "gaierofernando@arnet.com.ar"
        },
        {
          "Apellido": "GAITÁN",
          "Nombre": "Virginia Soledad",
          "Calle y número": "Beiró 220 (estudio)MS.JZ.",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15448251",
          "Matrícula": "13-445",
          "Correo Electrónico": "virginiagaitan151@hotmail.com"
        },
        {
          "Apellido": "GALA",
          "Nombre": "Fernando Luis",
          "Calle y número": "O' Higgins 1097 (estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472-429177/456125-15625378",
          "Matrícula": "13-321",
          "Correo Electrónico": "fer.gala@hotmail.com"
        },
        {
          "Apellido": "GARCÍA",
          "Nombre": "Carlos Sebastián",
          "Calle y número": "Belgrano 643",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/426450- 15558450",
          "Matrícula": "13-247",
          "Correo Electrónico": "estudiogarciaallocco@coyspu.com.ar"
        },
        {
          "Apellido": "GARCÍA",
          "Nombre": "Silvia Maria",
          "Calle y número": "Santa Fe 585 (estudio)",
          "Código Postal": 2583,
          "Ciudad": "GRAL. BALDISSERA",
          "Nº de teléfono": "03468/434239 15563152",
          "Matrícula": "13-331",
          "Correo Electrónico": "smg@hotmail.com.ar"
        },
        {
          "Apellido": "GARETTO CAGLIERO",
          "Nombre": "Meritxell Yanina",
          "Calle y número": "Libertador 630",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/ 482434",
          "Matrícula": "13-274",
          "Correo Electrónico": "meritxellgaretto@hotmail.com"
        },
        {
          "Apellido": "GARRONE",
          "Nombre": "Athina Daisy",
          "Calle y número": "Urquiza 1170",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/401463-15522862",
          "Matrícula": "13-561",
          "Correo Electrónico": "estudiojuridicogarrone@gmail.com"
        },
        {
          "Apellido": "GASTALDI",
          "Nombre": "Franca",
          "Calle y número": "Italia 440- real-legal",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15553064",
          "Matrícula": "13-551",
          "Correo Electrónico": "franca_gastaldi22@hotmail.com"
        },
        {
          "Apellido": "GASTALDI",
          "Nombre": "María del Carmen Carolina",
          "Calle y número": "Pje. Maipú 102",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/440621 15584453",
          "Matrícula": "13-127",
          "Correo Electrónico": "dra.carolinagastaldi@gmail.com"
        },
        {
          "Apellido": "GATTI",
          "Nombre": "Marina",
          "Calle y número": "Hipolito Yrigoyen 1346",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15584482",
          "Matrícula": "13-378",
          "Correo Electrónico": "abogmarinagatti@hotmail.com"
        },
        {
          "Apellido": "GATTI",
          "Nombre": "Silvina Mercedes",
          "Calle y número": "Vicente López y Planes 209",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467-471716 15438813",
          "Matrícula": "13-258",
          "Correo Electrónico": "silvinagatti@nodosud.com.ar"
        },
        {
          "Apellido": "GETTE",
          "Nombre": "Fatima Geraldine",
          "Calle y número": "Edison 992",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15548679",
          "Matrícula": "13-547",
          "Correo Electrónico": "fatimagette@gmail.com"
        },
        {
          "Apellido": "GHILARDI",
          "Nombre": "Mariana María",
          "Calle y número": "Capdevila 256 (est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472-444300 15469146",
          "Matrícula": "13-488",
          "Correo Electrónico": "mariana-g-16@hotmail.com"
        },
        {
          "Apellido": "GHISOLFO",
          "Nombre": "Carlos Alberto Rene",
          "Calle y número": "Córdoba 688 Of.02 (legal)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15569776",
          "Matrícula": "13-526",
          "Correo Electrónico": "carlosghisolfo@gmail.com"
        },
        {
          "Apellido": "GIMENEZ",
          "Nombre": "José Antonio",
          "Calle y número": "General Paz 275",
          "Código Postal": 2587,
          "Ciudad": "INRIVILLE",
          "Nº de teléfono": "03467/410497",
          "Matrícula": "13-250",
          "Correo Electrónico": "estudiojosegimenez@gmail.com"
        },
        {
          "Apellido": "GINI",
          "Nombre": "Vanesa Soledad",
          "Calle y número": "9 de Julio 731",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/472082- 15637046",
          "Matrícula": "13-485",
          "Correo Electrónico": "vane_mb07@hotmail.com"
        },
        {
          "Apellido": "GOBBATO",
          "Nombre": "Carolina",
          "Calle y número": "Avda. Italia 692",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/409190- 15511696",
          "Matrícula": "13-192",
          "Correo Electrónico": "cgestgobar@emprenditel.com.ar"
        },
        {
          "Apellido": "GOMEZ",
          "Nombre": "Andreina",
          "Calle y número": "Santiago del Estero 770",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15466715",
          "Matrícula": "13-559",
          "Correo Electrónico": "andreinagomez00@gmail.com"
        },
        {
          "Apellido": "GONZÁLEZ",
          "Nombre": "Marta Antonia",
          "Calle y número": "Chacabuco 1437",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15500292",
          "Matrícula": "13-504",
          "Correo Electrónico": "martaganto45@hotmail.com"
        },
        {
          "Apellido": "GONZÁLEZ CÉSPEDES",
          "Nombre": "Dámaris María Celeste",
          "Calle y número": "Gerónimo Luis de Cabrera 231",
          "Código Postal": 2625,
          "Ciudad": "CAVANAGH",
          "Nº de teléfono": "03468/15642296",
          "Matrícula": "13-583",
          "Correo Electrónico": "damarisgc.abog.23@gmail.com"
        },
        {
          "Apellido": "GRASSO",
          "Nombre": "Ingrid Cristina",
          "Calle y número": "Bv. Alberdi 1145",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/484294-15437619",
          "Matrícula": "13-343",
          "Correo Electrónico": "grassoingrid@hotmail.com"
        },
        {
          "Apellido": "GRECO",
          "Nombre": "Cristina Laura",
          "Calle y número": "Rosario 32",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/433472-15414285",
          "Matrícula": "13-229",
          "Correo Electrónico": "cristinalauragreco75@gmail.com"
        },
        {
          "Apellido": "GRIVARELLO",
          "Nombre": "Soledad",
          "Calle y número": "San Martín Nº262(est)",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/15642641",
          "Matrícula": "13-478",
          "Correo Electrónico": "soledadgrivarello@hotmail.com"
        },
        {
          "Apellido": "GUARDIOLA",
          "Nombre": "José Luis",
          "Calle y número": "Bvard. Lardizábal 1232",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/455240",
          "Matrícula": "13-4540",
          "Correo Electrónico": "estudiocyg@coyspu.com.ar"
        },
        {
          "Apellido": "HERRERA",
          "Nombre": "María Eugenia",
          "Calle y número": "San Martín 741(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/429177-15449111",
          "Matrícula": "13-379",
          "Correo Electrónico": "eugeherrera@hotmail.com"
        },
        {
          "Apellido": "ILLANES",
          "Nombre": "Andrea Natalia",
          "Calle y número": "25 de Mayo 871",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/429131",
          "Matrícula": "13-344",
          "Correo Electrónico": "estudioillanes@hotmail.com"
        },
        {
          "Apellido": "ISAIA",
          "Nombre": "Juan Carlos",
          "Calle y número": "San Martín 262",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/495897",
          "Matrícula": "13-178",
          "Correo Electrónico": "isaialegales@hotmail.com"
        },
        {
          "Apellido": "ISAIA",
          "Nombre": "Juan Manuel",
          "Calle y número": "Belgrano 290",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/15630776- 495897",
          "Matrícula": "13-358",
          "Correo Electrónico": "isaialegales@hotmail.com"
        },
        {
          "Apellido": "ITA",
          "Nombre": "Alejandra Soledad",
          "Calle y número": "Santa Fe s/n",
          "Código Postal": 2645,
          "Ciudad": "COLONIA ITALIANA",
          "Nº de teléfono": "03468/422053-15501628",
          "Matrícula": "13-334",
          "Correo Electrónico": "alejandraita26@hotmail.com"
        },
        {
          "Apellido": "JAUREGUIALZO",
          "Nombre": "Gonzalo",
          "Calle y número": "25 de Mayo 445",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/423795 15408077(Est.)",
          "Matrícula": "13-116",
          "Correo Electrónico": "jaureguialzogon@gmail.com"
        },
        {
          "Apellido": "JORDÁN",
          "Nombre": "Danila",
          "Calle y número": "Belgrano 1414",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/400837- 15435438",
          "Matrícula": "13-464",
          "Correo Electrónico": "danilajordan91@hotmail.com"
        },
        {
          "Apellido": "JUICH",
          "Nombre": "Jorgelina María",
          "Calle y número": "Belgrano 141",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/15449037",
          "Matrícula": "13-537",
          "Correo Electrónico": "jorgelina_juich@hotmail.com"
        },
        {
          "Apellido": "KARL",
          "Nombre": "María Carolina",
          "Calle y número": "9 de Julio Nº 6.",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468- 400004-15544660",
          "Matrícula": "13-303",
          "Correo Electrónico": "estudiokarl@hotmail.com"
        },
        {
          "Apellido": "KLARIC",
          "Nombre": "Martín Exequiel",
          "Calle y número": "Av. Libertador 630",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472-482434",
          "Matrícula": "13-319",
          "Correo Electrónico": "estudioklaricgaretto@hotmail.com"
        },
        {
          "Apellido": "KRIVORUK",
          "Nombre": "Eduardo David",
          "Calle y número": "Avda. L.N.Alem 267",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/425505 15623569",
          "Matrícula": "13-176",
          "Correo Electrónico": "ekrivoruk@coyspu.com.ar"
        },
        {
          "Apellido": "LAMBERTUCCI",
          "Nombre": "Carlos Alberto",
          "Calle y número": "Italia 995",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/402950- 15526414",
          "Matrícula": "13-316",
          "Correo Electrónico": "clambertucci@gmail.com"
        },
        {
          "Apellido": "LAMBERTUCCI",
          "Nombre": "María Belén",
          "Calle y número": "Saenz Peña 1070",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/458896- 15435367",
          "Matrícula": "13-387",
          "Correo Electrónico": "belenlt@hotmail.com"
        },
        {
          "Apellido": "LAMBERTUCCI",
          "Nombre": "Santiago Enrique",
          "Calle y número": "Belgrano 1273 (Est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15522175",
          "Matrícula": "13-421",
          "Correo Electrónico": "santiagolambertucci@gmail.com"
        },
        {
          "Apellido": "LANGONE",
          "Nombre": "Leopoldo Roberto",
          "Calle y número": "Uruguay 764",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/400348 15437756/400716/15544413 este",
          "Matrícula": "13-147",
          "Correo Electrónico": "leopoldolangone1@gmail.com"
        },
        {
          "Apellido": "LARDIZABAL",
          "Nombre": "Lucía",
          "Calle y número": "Silvio Agostini 1285",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/421157 - 400161(est) 341-156100980",
          "Matrícula": "13-447",
          "Correo Electrónico": "lucialardizabal@hotmail.com"
        },
        {
          "Apellido": "LASAGNA",
          "Nombre": "Walter Hugo",
          "Calle y número": "Chacabuco 330(real-legal)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/472744- 0351/156327235",
          "Matrícula": "13-126",
          "Correo Electrónico": "walterlasagna@gmail.com"
        },
        {
          "Apellido": "LATTANZI",
          "Nombre": "Gustavo Carlos",
          "Calle y número": "L.N. Alem 1038 (legal)",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/15567518-401007(EST)",
          "Matrícula": "13-542",
          "Correo Electrónico": "gclattanzi@nodosud.com.ar"
        },
        {
          "Apellido": "LAVISSE",
          "Nombre": "Adolfo",
          "Calle y número": "Belgrano 845 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/424474-15586440",
          "Matrícula": "13-389",
          "Correo Electrónico": "lavisseadolfo@hotmail.com"
        },
        {
          "Apellido": "LEDESMA",
          "Nombre": "Fernando Jesus",
          "Calle y número": "Sarmiento 354 (legal)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470070 EST 3467/15419024",
          "Matrícula": "13-535",
          "Correo Electrónico": "ferledesma10@hotmail.com"
        },
        {
          "Apellido": "LEONORI",
          "Nombre": "Ilsa Marcela",
          "Calle y número": "Belgrano 1356 (estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/424954 -15553561 03467/480298",
          "Matrícula": "13-174",
          "Correo Electrónico": "ilsamarcela@hotmail.com"
        },
        {
          "Apellido": "LERDA",
          "Nombre": "Carmen Margarita",
          "Calle y número": "San Luis 172",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/442515- 15629194",
          "Matrícula": "13-454",
          "Correo Electrónico": "carmenlerda@coyspu.com.ar"
        },
        {
          "Apellido": "LERDA",
          "Nombre": "Hugo Daniel",
          "Calle y número": "O' Higgins 1239",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/455504-15466723",
          "Matrícula": "13-452",
          "Correo Electrónico": "loslerda@coyspu.com.ar"
        },
        {
          "Apellido": "LESCANO",
          "Nombre": "Gabriel Alejandro",
          "Calle y número": "25 de Mayo 666",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/444668-03472/15556128",
          "Matrícula": "13-271",
          "Correo Electrónico": "lescano_gabriel@hotmail.com"
        },
        {
          "Apellido": "LINCON",
          "Nombre": "Diego Daniel",
          "Calle y número": "San Martín 304",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/ 496014-400014- 0351/153852079",
          "Matrícula": "13-442",
          "Correo Electrónico": "dielincon@gmail.com"
        },
        {
          "Apellido": "LINCON",
          "Nombre": "Millan Max",
          "Calle y número": "San Martín 304",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/ 400014- 496014 fax",
          "Matrícula": "13-289",
          "Correo Electrónico": "millanlincon@hotmail.com"
        },
        {
          "Apellido": "LINGUA",
          "Nombre": "Guillermo",
          "Calle y número": "Saenz Peña 833 (Est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/456807 15589900",
          "Matrícula": "13-398",
          "Correo Electrónico": "guillelingua@hotmail.com"
        },
        {
          "Apellido": "LISSI",
          "Nombre": "Juan Daniel",
          "Calle y número": "Chacabuco 892 (estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/423520- 15530608",
          "Matrícula": "13-253",
          "Correo Electrónico": "estudiolissi@mjcba.com.ar"
        },
        {
          "Apellido": "LLARENA",
          "Nombre": "Esteban Alvaro Jesus",
          "Calle y número": "Amadeo Bertini 152 (estudio)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/481258-15623930",
          "Matrícula": "13-438",
          "Correo Electrónico": "estebanllarena@hotmail.com"
        },
        {
          "Apellido": "LLORET",
          "Nombre": "Paula Mercedes",
          "Calle y número": "9 de Julio 621",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/426865- 15583038",
          "Matrícula": "13-213",
          "Correo Electrónico": "paulamlloret@hotmail.com"
        },
        {
          "Apellido": "LOMBARDI",
          "Nombre": "Antonella",
          "Calle y número": "Tucumán 424",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/482225/ 15529106",
          "Matrícula": "13-420",
          "Correo Electrónico": "raan0012@hotmail.com"
        },
        {
          "Apellido": "LÓPEZ",
          "Nombre": "Carlos Alfredo",
          "Calle y número": "Avda.Córdoba 478",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZIN",
          "Nº de teléfono": "03468/495718",
          "Matrícula": "13-189",
          "Correo Electrónico": "dres.lopez-contin@guati.com.ar"
        },
        {
          "Apellido": "LORENZO",
          "Nombre": "Mario Alberto",
          "Calle y número": "Av.Belgrano 1037 P3-Of.A(est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/425000-441313 EST. 15536400",
          "Matrícula": "13-395",
          "Correo Electrónico": "estudio@mariolorenzo.com.ar"
        },
        {
          "Apellido": "LOVERA",
          "Nombre": "Marcelo Daniel",
          "Calle y número": "Pedro Lino Funes 756",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15501094",
          "Matrícula": "13-254",
          "Correo Electrónico": "marcelolovera2012@gmail.com"
        },
        {
          "Apellido": "LUCANGELI",
          "Nombre": "Daniel Elvio",
          "Calle y número": "San Martín 609",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/456994",
          "Matrícula": "13-55",
          "Correo Electrónico": "estudiolucangeli@coyspu.com.ar"
        },
        {
          "Apellido": "LUCANGELI",
          "Nombre": "Eduardo María",
          "Calle y número": "San Martín 609 (est.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03467/15413536- 03472/456994",
          "Matrícula": "13-458",
          "Correo Electrónico": "lucangeli@yahoo.com"
        },
        {
          "Apellido": "MAGARELLO",
          "Nombre": "Catriel",
          "Calle y número": "San Martín 1107 (estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472-428969/ 0341-155972048",
          "Matrícula": "13-403",
          "Correo Electrónico": "catrielmagarello@hotmail.com"
        },
        {
          "Apellido": "MAGGI",
          "Nombre": "Franco Luis",
          "Calle y número": "Lardizabal 1402 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/441549 15506608",
          "Matrícula": "13-299",
          "Correo Electrónico": "fmaggi@coyspu.com.ar"
        },
        {
          "Apellido": "MAGGI",
          "Nombre": "Juan Pablo",
          "Calle y número": "Bv.Lardizabal 1402 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/ 441549 15556848",
          "Matrícula": "13-177",
          "Correo Electrónico": "jpmaggi@coyspu.com.ar"
        },
        {
          "Apellido": "MAGHENZANI",
          "Nombre": "Edgardo Raúl",
          "Calle y número": "25 de Mayo 255 (casa)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/426277- 15550145",
          "Matrícula": "13-73",
          "Correo Electrónico": "gymabogados@arnet.com.ar"
        },
        {
          "Apellido": "MAGUREGUI",
          "Nombre": "José María",
          "Calle y número": "Sarmiento 634 (casa)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/421573- 15436596",
          "Matrícula": "13-154",
          "Correo Electrónico": "jcmagu@futurnet.com.ar"
        },
        {
          "Apellido": "MAJUL",
          "Nombre": "Ariel Jesús Ricardo",
          "Calle y número": "Presbitero Gonzalez 568",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/ 423386 15541012",
          "Matrícula": "13-275",
          "Correo Electrónico": "majulariel@hotmail.com"
        },
        {
          "Apellido": "MAJUL",
          "Nombre": "Roberto Adrián",
          "Calle y número": "Chacabuco 342",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/ 400058 15597760",
          "Matrícula": "13-118",
          "Correo Electrónico": "-----------------------------------------------------"
        },
        {
          "Apellido": "MAJUL",
          "Nombre": "Rolando Fabián",
          "Calle y número": "Av. Belgrano 664",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/423918 (Estudio) 15587891",
          "Matrícula": "13-199",
          "Correo Electrónico": "estudiomajul@soon.com.ar"
        },
        {
          "Apellido": "MALANO",
          "Nombre": "Andrea Natalia",
          "Calle y número": "Posta Espinillos 1795",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15468814",
          "Matrícula": "13-487",
          "Correo Electrónico": "andrem_110@hotmail.com"
        },
        {
          "Apellido": "MANTEGARI",
          "Nombre": "María Carla",
          "Calle y número": "Int. Juan B. Monetto nº 1548 Rosario de Santa Fe 438-Local 1(legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15465353",
          "Matrícula": "13-468",
          "Correo Electrónico": "carlamantegari@gmail.com"
        },
        {
          "Apellido": "MARASCHIO",
          "Nombre": "Laura Mabel",
          "Calle y número": "Jujuy 167",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/425479 - 15623952",
          "Matrícula": "13-100",
          "Correo Electrónico": "lmaraschio63@gmail.com"
        },
        {
          "Apellido": "MARIN",
          "Nombre": "Héctor Alejandro",
          "Calle y número": "Belgrano 1238",
          "Código Postal": 2624,
          "Ciudad": "ARIAS",
          "Nº de teléfono": "03468/440533 / 15649677",
          "Matrícula": "13-210",
          "Correo Electrónico": "alejandromarin780@gmail.com"
        },
        {
          "Apellido": "MARINI",
          "Nombre": "Fernando",
          "Calle y número": "Yrigoyen 1154(estudio en Ms.Jz)",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467- 400616/ 15437564",
          "Matrícula": "13-279",
          "Correo Electrónico": "fernandoeme@hotmail.com"
        },
        {
          "Apellido": "MARQUEZ",
          "Nombre": "Alan Brian",
          "Calle y número": "Alem 325 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03532/15467975",
          "Matrícula": "13-550",
          "Correo Electrónico": "abmarquez52@gmail.com"
        },
        {
          "Apellido": "MARRA",
          "Nombre": "María Emilia",
          "Calle y número": "Saenz Peña 323(real)",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/15442843",
          "Matrícula": "13-564",
          "Correo Electrónico": "memiliam29@gmail.com"
        },
        {
          "Apellido": "MARTÍN",
          "Nombre": "Rodrigo",
          "Calle y número": "Pedro L.Funes 783 (casa)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/425793-455793/03472/ 15520692",
          "Matrícula": "13-242",
          "Correo Electrónico": "rodrigo@estudiocarlosmartin.com.ar."
        },
        {
          "Apellido": "MARTINA",
          "Nombre": "Valeria Ivana",
          "Calle y número": "José M.Aldao 546",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/402724 -15518149",
          "Matrícula": "13-315",
          "Correo Electrónico": "valmartina@hotmail.com"
        },
        {
          "Apellido": "MARTINEZ",
          "Nombre": "Roberto",
          "Calle y número": "H.Irigoyen 1128",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/427020- 15621268",
          "Matrícula": "13-156",
          "Correo Electrónico": "abogadorobertomartinez@hotmail.com"
        },
        {
          "Apellido": "MARTINI",
          "Nombre": "Lucía Antonella",
          "Calle y número": "9 de Julio 352 (Est.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15508114",
          "Matrícula": "13-419",
          "Correo Electrónico": "estudiojuridicomartini@gmail.com"
        },
        {
          "Apellido": "MARTINI",
          "Nombre": "Miguel Angel",
          "Calle y número": "San Martin 741(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/456125- 15584944",
          "Matrícula": "13-132",
          "Correo Electrónico": "est-miguelmartini@hotmail.com"
        },
        {
          "Apellido": "MASSEI",
          "Nombre": "Pablo Andrés",
          "Calle y número": "Deán Funes 347- 9 de Julio y Jorge Sapene 1º Piso, Of. 4",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/15442303",
          "Matrícula": "13-325",
          "Correo Electrónico": "masseipablo@hotmail.com"
        },
        {
          "Apellido": "MERCADER",
          "Nombre": "Germán",
          "Calle y número": "Av. Igoillo 965 (Est.)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/482190-487024 EST. 15529499",
          "Matrícula": "13-365",
          "Correo Electrónico": "estudiojuridicomercader@hotmail.com"
        },
        {
          "Apellido": "MESSORI",
          "Nombre": "Elina Mercedes",
          "Calle y número": "Güemes 1267 est.",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/401955- 15630568",
          "Matrícula": "13-349",
          "Correo Electrónico": "elimessori@hotmail.com"
        },
        {
          "Apellido": "MEYER",
          "Nombre": "Ignacio Matías",
          "Calle y número": "Amadeo Bertini 352",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15553340",
          "Matrícula": "13-280",
          "Correo Electrónico": "ignacio_meyer@hotmail.com"
        },
        {
          "Apellido": "MIRAVALLES",
          "Nombre": "Emiliano",
          "Calle y número": "San Martín 758 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15507552- 442615 EST.",
          "Matrícula": "13-530",
          "Correo Electrónico": "Miravallesm@hotmail.com"
        },
        {
          "Apellido": "MISCHNE",
          "Nombre": "Jimena",
          "Calle y número": "San Martin 399",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472-15433543",
          "Matrícula": "13-490",
          "Correo Electrónico": "jimenamischne@hotmail.com"
        },
        {
          "Apellido": "MODILONI",
          "Nombre": "Magalí Marina",
          "Calle y número": "Hernandez 1247",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15587095",
          "Matrícula": "13-510",
          "Correo Electrónico": "magali_modiloni@hotmail.com"
        },
        {
          "Apellido": "MONTENEGRO",
          "Nombre": "Lucas Federico",
          "Calle y número": "Rosario de Santa Fe 623",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472-15506922",
          "Matrícula": "13-290",
          "Correo Electrónico": "luquetino@hotmail.com"
        },
        {
          "Apellido": "MONTENOVO",
          "Nombre": "Maria Fernanda",
          "Calle y número": "Belgrano 667",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/15636228",
          "Matrícula": "13-576",
          "Correo Electrónico": "Mfermontenovo@gmail.com"
        },
        {
          "Apellido": "MONTEVERDE",
          "Nombre": "Susana Mercedes",
          "Calle y número": "25 de Mayo 436",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467- 470121 15499904",
          "Matrícula": "13-282",
          "Correo Electrónico": "flores@nodosud.com.ar"
        },
        {
          "Apellido": "MONTI",
          "Nombre": "Benito Roque",
          "Calle y número": "San Martín 1128(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/426653- 15553715",
          "Matrícula": "13-20",
          "Correo Electrónico": "estudiobenitomonti@gmail.com"
        },
        {
          "Apellido": "MONTI",
          "Nombre": "María Belén",
          "Calle y número": "San Martín 1128 est.",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/426653est. 15431859",
          "Matrícula": "13-353",
          "Correo Electrónico": "montibelen@hotmail.com estudiomonti@arnetbiz.com.ar"
        },
        {
          "Apellido": "MORASSI",
          "Nombre": "Danilo Guillermo",
          "Calle y número": "Avda. Santa Fe 633(est)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/421172 - 15526168",
          "Matrícula": "13-187",
          "Correo Electrónico": "danilomorassi@gmail.com"
        },
        {
          "Apellido": "MORON",
          "Nombre": "Diego Alejandro",
          "Calle y número": "M. Moreno 776",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470070 470064",
          "Matrícula": "13-218",
          "Correo Electrónico": "diegomoron@nodosud.com.ar"
        },
        {
          "Apellido": "MUCCINI",
          "Nombre": "Fernando Julio",
          "Calle y número": "Jujuy 590",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/458972",
          "Matrícula": "13-324",
          "Correo Electrónico": "fmuccini@coyspu.com.ar"
        },
        {
          "Apellido": "MULLER",
          "Nombre": "Marta Susana",
          "Calle y número": "Jujuy 1143",
          "Código Postal": 2624,
          "Ciudad": "ARIAS",
          "Nº de teléfono": "03468/440835- 15640753",
          "Matrícula": "13-27",
          "Correo Electrónico": "martasmuller@hotmail.com"
        },
        {
          "Apellido": "MUSSO",
          "Nombre": "Agostina",
          "Calle y número": "Santiago del Estero 421(est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/457534- 15549812",
          "Matrícula": "13-455",
          "Correo Electrónico": "agomus03@hotmail.com"
        },
        {
          "Apellido": "NATALE",
          "Nombre": "Aneley Johanna",
          "Calle y número": "Av. Córdoba 478(Legal)",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZIN",
          "Nº de teléfono": "03468/495718- 0341/152175045",
          "Matrícula": "13-511",
          "Correo Electrónico": "aneleynatale@hotmail.com"
        },
        {
          "Apellido": "NAVARRO",
          "Nombre": "Maria del Milagro",
          "Calle y número": "Italia 1290",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/401617-402318-15547695",
          "Matrícula": "13-230",
          "Correo Electrónico": "mm_navarro@hotmail.com"
        },
        {
          "Apellido": "NEGRO",
          "Nombre": "Gabriela Mercedes",
          "Calle y número": "Rafael Nuñez 196",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15587365",
          "Matrícula": "13-522",
          "Correo Electrónico": "gabrielamnegro@gmail.com"
        },
        {
          "Apellido": "NEGRO",
          "Nombre": "Carlos Alfredo",
          "Calle y número": "Belgrano 1703",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/444545 15626706",
          "Matrícula": "13-239",
          "Correo Electrónico": "estudiocarlosnegro@hotmail.com"
        },
        {
          "Apellido": "NUCCELLI",
          "Nombre": "Juliana",
          "Calle y número": "Libertad 765",
          "Código Postal": 2587,
          "Ciudad": "INRIVILLE",
          "Nº de teléfono": "03467/ 480377-15631112",
          "Matrícula": "13-306",
          "Correo Electrónico": "juliananuccelli@yahoo.com.ar"
        },
        {
          "Apellido": "ODESTI",
          "Nombre": "Julieta Beatriz",
          "Calle y número": "25 de Mayo 462 (legal)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/15403516",
          "Matrícula": "13-401",
          "Correo Electrónico": "juliodesti@hotmail.com"
        },
        {
          "Apellido": "OLMOS",
          "Nombre": "Agustina",
          "Calle y número": "Leandro N.Alem 345- 5B (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "0341/153075391",
          "Matrícula": "13-568",
          "Correo Electrónico": "draolmosagustina@gmail.com"
        },
        {
          "Apellido": "ONGINI",
          "Nombre": "Jacqueline",
          "Calle y número": "Rivadavia 526",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15448665",
          "Matrícula": "13-577",
          "Correo Electrónico": "jacquelineongini@gmail.com"
        },
        {
          "Apellido": "OSENDA",
          "Nombre": "Enzo José",
          "Calle y número": "Córdoba 1175",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/401651",
          "Matrícula": "13-26",
          "Correo Electrónico": "estudioosenda@nodosud.com.ar"
        },
        {
          "Apellido": "OSENDA",
          "Nombre": "Juan Manuel José",
          "Calle y número": "Córdoba 1175",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/401651- 401028Fax",
          "Matrícula": "13-332",
          "Correo Electrónico": "juanmaosenda1@hotmail.com"
        },
        {
          "Apellido": "PAGANI",
          "Nombre": "Agustín Andrés",
          "Calle y número": "Uruguay 862 (estudio)",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/400137- 0351/152477844",
          "Matrícula": "13-432",
          "Correo Electrónico": "agustinpagani.ab@gmail.com"
        },
        {
          "Apellido": "PAGLIONI",
          "Nombre": "Silvina Soledad",
          "Calle y número": "Rioja 632 (legal)",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/15520536",
          "Matrícula": "13-557",
          "Correo Electrónico": "estudiopaglioni@gmail.com"
        },
        {
          "Apellido": "PALASIUK",
          "Nombre": "Martin Miguel",
          "Calle y número": "Bv. José M. Aldao 1225 (legal)",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/402514- 0341/155892601",
          "Matrícula": "13-572",
          "Correo Electrónico": "martinpalasiuk@gmail.com"
        },
        {
          "Apellido": "PALLERO RUANI",
          "Nombre": "Julieta",
          "Calle y número": "Vicente López y Planes 332",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/15520451",
          "Matrícula": "13-590",
          "Correo Electrónico": "ruanijulieta@gmail.com"
        },
        {
          "Apellido": "PALLUD",
          "Nombre": "Silvia Patricia",
          "Calle y número": "Belgrano 712 P.A.",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/455521 EST.15430286",
          "Matrícula": "13-93",
          "Correo Electrónico": "silviapallud@gmail.com"
        },
        {
          "Apellido": "PANATTONI",
          "Nombre": "Valeria Alejandra",
          "Calle y número": "Montevideo 745",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468-15535482",
          "Matrícula": "13-407",
          "Correo Electrónico": "valeriapanattoni@hotmail.com.ar"
        },
        {
          "Apellido": "PASCHETTA",
          "Nombre": "Osvaldo Marcelo",
          "Calle y número": "Sarmiento 125(legal)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/432502- 15565735",
          "Matrícula": "13-123",
          "Correo Electrónico": "osvaldopaschetta@emprenditel.com.ar"
        },
        {
          "Apellido": "PASCHETTI",
          "Nombre": "Camila",
          "Calle y número": "San Jose 408 (legal)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15447978- 482799 EST.",
          "Matrícula": "13-529",
          "Correo Electrónico": "camilapaschetti@outlook.com"
        },
        {
          "Apellido": "PASCHETTI",
          "Nombre": "Mauricio",
          "Calle y número": "San José 408",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/482799 - 15556699",
          "Matrícula": "13-135",
          "Correo Electrónico": "estudiopaschetti@nodosud.com.ar"
        },
        {
          "Apellido": "PASETTI",
          "Nombre": "María Lina",
          "Calle y número": "Belgrano 198 25 de Mayo 138",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/ 406869 15644113",
          "Matrícula": "13-284",
          "Correo Electrónico": "mlinapasetti@hotmail.com"
        },
        {
          "Apellido": "PASSARELLI",
          "Nombre": "María Fernanda",
          "Calle y número": "Belgrano 1113 Local 6(legal)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15528713",
          "Matrícula": "13-498",
          "Correo Electrónico": "passarellifer@gmail.com"
        },
        {
          "Apellido": "PASSERINI",
          "Nombre": "Hernán Andrés",
          "Calle y número": "Bv.Lardizabal 1773 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/444773- 15621342",
          "Matrícula": "13-214",
          "Correo Electrónico": "hernanpasserini@gmail.com"
        },
        {
          "Apellido": "PELLEGRINO",
          "Nombre": "Laura del Valle",
          "Calle y número": "Belgrano 545",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15437431",
          "Matrícula": "13-195",
          "Correo Electrónico": "dralaurapellegrino@gmail.com"
        },
        {
          "Apellido": "PELLEGRINO",
          "Nombre": "Rina María",
          "Calle y número": "Benvenuto 1348",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15435907",
          "Matrícula": "13-599",
          "Correo Electrónico": "rinampellegrino.abogada@gmail.com"
        },
        {
          "Apellido": "PELLEGRINO",
          "Nombre": "Valeria Soledad",
          "Calle y número": "Av. Leandro N. Alem 313 P.A.",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/456061-15545270",
          "Matrícula": "13-333",
          "Correo Electrónico": "valepelle@hotmail.com"
        },
        {
          "Apellido": "PEREIRA DUARTE",
          "Nombre": "Luis Enrique",
          "Calle y número": "Av.Alem 267(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/425505 - 15622924",
          "Matrícula": "13-2933",
          "Correo Electrónico": "epereiraduarte@outlook.com"
        },
        {
          "Apellido": "PEROTTI",
          "Nombre": "Sergio Aldo",
          "Calle y número": "F.Beiró 220",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/427551 - 15621328",
          "Matrícula": "13-81",
          "Correo Electrónico": "sperotti220@gmail.com"
        },
        {
          "Apellido": "PEROTTI RINAUDO",
          "Nombre": "Mariana Raquel",
          "Calle y número": "Maipu 1283",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472- 441283 - 15506038",
          "Matrícula": "13-266",
          "Correo Electrónico": "estudioperotti@coyspu.com.ar"
        },
        {
          "Apellido": "PERTUSATI",
          "Nombre": "Nicolás Edgardo",
          "Calle y número": "Juan José Paso 933",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/421006",
          "Matrícula": "13-246",
          "Correo Electrónico": "npertusati@hotmail.com"
        },
        {
          "Apellido": "PIATTI",
          "Nombre": "Florencia",
          "Calle y número": "Córdoba 122(Estudio)",
          "Código Postal": 2583,
          "Ciudad": "GRAL. BALDISSERA",
          "Nº de teléfono": "03468/434244-15517373",
          "Matrícula": "13-431",
          "Correo Electrónico": "piattiflorencia@gmail.com"
        },
        {
          "Apellido": "PICCHIO",
          "Nombre": "Lucas Marcelo",
          "Calle y número": "H.Yrigoyen 1154(legal) Ms.Jz.",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/15435250",
          "Matrícula": "13-397",
          "Correo Electrónico": "lucaspicchio@gmail.com"
        },
        {
          "Apellido": "PIERSIMONI",
          "Nombre": "María Susana",
          "Calle y número": "Joaquin V. Gonzalez 1581",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15430847",
          "Matrícula": "13-536",
          "Correo Electrónico": "susanapiersimoni@gmail.com"
        },
        {
          "Apellido": "PIERSIMONI",
          "Nombre": "Paulo Andrés",
          "Calle y número": "Pte. Alvear 892",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/ 482268 15435892",
          "Matrícula": "13-273",
          "Correo Electrónico": "paulopiersimoni@hotmail.com"
        },
        {
          "Apellido": "POLICARDO",
          "Nombre": "Javier Horacio",
          "Calle y número": "Alvear 329",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472-15466166",
          "Matrícula": "13-412",
          "Correo Electrónico": "jpolicardo@yahoo.com.ar"
        },
        {
          "Apellido": "PORPORATO",
          "Nombre": "Carlos Alberto",
          "Calle y número": "Entre Ríos 644",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/482468 0351/154593621",
          "Matrícula": "13-129",
          "Correo Electrónico": "carlosporporato@arnet.com.ar"
        },
        {
          "Apellido": "PUNSCHKE",
          "Nombre": "Maximiliano",
          "Calle y número": "25 de mayo 847",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/422009/ 15649058",
          "Matrícula": "13-186",
          "Correo Electrónico": "maximilianpunschke@gmail.com"
        },
        {
          "Apellido": "PRATTI",
          "Nombre": "Matías José",
          "Calle y número": "Gral. Roca 322- Estudio",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/481434-est. 484130casa 15559248",
          "Matrícula": "13-351",
          "Correo Electrónico": "matiaspratti@live.com"
        },
        {
          "Apellido": "QUASSOLO",
          "Nombre": "Luis Antonio",
          "Calle y número": "Belgrano 199 C.de B. Alem 267 Ms.Jz.(legal)",
          "Código Postal": 2583,
          "Ciudad": "GRAL. BALDISSERA",
          "Nº de teléfono": "03468/434061-casa- 434251 est. 15505677",
          "Matrícula": "13-21",
          "Correo Electrónico": "luisquassolo.laq@gmail.com"
        },
        {
          "Apellido": "QUEVEDO",
          "Nombre": "Miguel Enrique",
          "Calle y número": "San Martín 270 (est)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15646131",
          "Matrícula": "13-476",
          "Correo Electrónico": "quevedo@futurnet.com.ar"
        },
        {
          "Apellido": "QUINTEROS",
          "Nombre": "Nicolás Daniel",
          "Calle y número": "San Martin 1098 (est.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15439794",
          "Matrícula": "13-473",
          "Correo Electrónico": "dr.nicolasquinteros@gmail.com"
        },
        {
          "Apellido": "RACCA",
          "Nombre": "Mariano Claudio",
          "Calle y número": "25 de Mayo 451",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/458688- 15468301",
          "Matrícula": "13-185",
          "Correo Electrónico": "estudioracca@coyspu.com.ar"
        },
        {
          "Apellido": "REALE",
          "Nombre": "Alejandro José",
          "Calle y número": "Avda. San Martín 1107 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/428969- 15540150",
          "Matrícula": "13-180",
          "Correo Electrónico": "estudioreale@gmail.com"
        },
        {
          "Apellido": "REALE",
          "Nombre": "Javier Eduardo",
          "Calle y número": "Bautista Peiretti 1048 (legal)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/482522 - 15500671",
          "Matrícula": "13-76",
          "Correo Electrónico": "javierreale18@gmail.cpm"
        },
        {
          "Apellido": "REALE",
          "Nombre": "María Emma",
          "Calle y número": "Gral. Paz 479",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15558549",
          "Matrícula": "13-597",
          "Correo Electrónico": "ariaemmareale@gmail.com"
        },
        {
          "Apellido": "REINAUDI",
          "Nombre": "Lorena",
          "Calle y número": "Tucumán 391(legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15436148",
          "Matrícula": "13-259",
          "Correo Electrónico": "lorereina@hotmail.com"
        },
        {
          "Apellido": "RENZI",
          "Nombre": "Pablo Andres",
          "Calle y número": "Pellegrini 1059 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15620647",
          "Matrícula": "13-573",
          "Correo Electrónico": "andresrenzi@hotmail.com"
        },
        {
          "Apellido": "RESCALDANI",
          "Nombre": "Ignacio",
          "Calle y número": "Arturo M Bas 136-P3-Of.A",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/581713",
          "Matrícula": "13-520",
          "Correo Electrónico": "ignacio.rescaldani@hotmail.com"
        },
        {
          "Apellido": "RESCALDANI",
          "Nombre": "Ricardo Gustavo",
          "Calle y número": "Belgrano 548",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/427186-15626814",
          "Matrícula": "13-162",
          "Correo Electrónico": "ricardorescaldani@me.com"
        },
        {
          "Apellido": "RINALDI",
          "Nombre": "Lucrecia Mercedes",
          "Calle y número": "Urquiza 596",
          "Código Postal": 2587,
          "Ciudad": "INRIVILLE",
          "Nº de teléfono": "03467-411973 / 15645686",
          "Matrícula": "13-313",
          "Correo Electrónico": "lucrerinaldi@hotmail.com"
        },
        {
          "Apellido": "RINALDONI",
          "Nombre": "Regina",
          "Calle y número": "Urquiza 309",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/425521- 15543664/ 0351-157585113",
          "Matrícula": "13-448",
          "Correo Electrónico": "rinaldoniregina@gmail.com"
        },
        {
          "Apellido": "RIPANTI",
          "Nombre": "Lucas",
          "Calle y número": "Rivadavia 865",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472-15507253",
          "Matrícula": "13-588",
          "Correo Electrónico": "lucaspabloripanti@gmail.com"
        },
        {
          "Apellido": "RIPANTI",
          "Nombre": "Paula de la Merced",
          "Calle y número": "H.Yrigoyen 1154 (legal) Ms.Jz.",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/15418333",
          "Matrícula": "13-483",
          "Correo Electrónico": "paularipanti@gmail.com"
        },
        {
          "Apellido": "ROCCA",
          "Nombre": "José Nicolás",
          "Calle y número": "25 de Mayo 321 (Est.)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/ 15413111",
          "Matrícula": "13-288",
          "Correo Electrónico": "joserocca79@hotmail.com"
        },
        {
          "Apellido": "RODRÍGUEZ",
          "Nombre": "Nicolás",
          "Calle y número": "Juan José Paso 555",
          "Código Postal": 2587,
          "Ciudad": "INRIVILLE",
          "Nº de teléfono": "03467/15415298",
          "Matrícula": "13-591",
          "Correo Electrónico": "estudionicolasrodriguez@gmail.com"
        },
        {
          "Apellido": "RODRÍGUEZ",
          "Nombre": "Luisina",
          "Calle y número": "Venezuela 674",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15467072",
          "Matrícula": "13-592",
          "Correo Electrónico": "uisinarodriguezz98@gmail.com"
        },
        {
          "Apellido": "RON",
          "Nombre": "Virginia",
          "Calle y número": "Santa Fe 585(estudio)",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZIN",
          "Nº de teléfono": "03468/495123-495365-15565498",
          "Matrícula": "13-95",
          "Correo Electrónico": "vceratti@guati.com.ar"
        },
        {
          "Apellido": "ROSA",
          "Nombre": "Agustin",
          "Calle y número": "Parana 774",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15436212",
          "Matrícula": "13-548",
          "Correo Electrónico": "agu_rosa@hotmail.com"
        },
        {
          "Apellido": "ROSALES",
          "Nombre": "María Belén",
          "Calle y número": "Sgto.Cabral 687(Est.)",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/402876 15506195",
          "Matrícula": "13-388",
          "Correo Electrónico": "m_belen5@hotmail.com"
        },
        {
          "Apellido": "ROSATTI",
          "Nombre": "Mauro Sebastián",
          "Calle y número": "Tucumán 349 (est.)",
          "Código Postal": 2525,
          "Ciudad": "SAIRA",
          "Nº de teléfono": "03472/493098-15550301",
          "Matrícula": "13-386",
          "Correo Electrónico": "msrosatti_22@hotmail.com"
        },
        {
          "Apellido": "ROSSETTO",
          "Nombre": "Mariana",
          "Calle y número": "Santa Fe Norte 01",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZÍN",
          "Nº de teléfono": "03468/15539182",
          "Matrícula": "13-581",
          "Correo Electrónico": "mperusilo152016@gmail.com"
        },
        {
          "Apellido": "ROSSO",
          "Nombre": "Luisina",
          "Calle y número": "Hs de Malvinas 337(estudio)",
          "Código Postal": "",
          "Ciudad": "NOETINGER",
          "Nº de teléfono": "0341/4240166 - 156927769",
          "Matrícula": "13-357",
          "Correo Electrónico": "luisinarosso@hotmail.com"
        },
        {
          "Apellido": "ROSSO",
          "Nombre": "Matías Jorge",
          "Calle y número": "Castro Barros 657(real)",
          "Código Postal": "",
          "Ciudad": "CÓRDOBA",
          "Nº de teléfono": "0351/153026948",
          "Matrícula": "13-392",
          "Correo Electrónico": "mjrosso@hotmail.com"
        },
        {
          "Apellido": "ROVETTO",
          "Nombre": "Eliana Paulina",
          "Calle y número": "Belgrano 77(estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/427495 15583597",
          "Matrícula": "13-240",
          "Correo Electrónico": "elianarovetto@yahoo.com.ar"
        },
        {
          "Apellido": "SABRE",
          "Nombre": "Laura Isabel",
          "Calle y número": "San Martín 439",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468- 406858 /15644415/ 0351- 155522540",
          "Matrícula": "13-302",
          "Correo Electrónico": "lausabre@gmail.com"
        },
        {
          "Apellido": "SALLAGO",
          "Nombre": "Edgardo Fabián",
          "Calle y número": "Int. Melquiot 1175",
          "Código Postal": 2624,
          "Ciudad": "ARIAS",
          "Nº de teléfono": "03468/449771 15566981",
          "Matrícula": "13-235",
          "Correo Electrónico": "edgardosallago@yahoo.com.ar"
        },
        {
          "Apellido": "SALUT",
          "Nombre": "Eugenia",
          "Calle y número": "Chacabuco 1145(legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/15524586",
          "Matrícula": "13-367",
          "Correo Electrónico": "eugesalut@hotmail.com"
        },
        {
          "Apellido": "SANCHEZ",
          "Nombre": "Martín Nicolás",
          "Calle y número": "Libertad 1036",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "0351/152657182",
          "Matrícula": "13-503",
          "Correo Electrónico": "estudiosanchezmartin@gmail.com"
        },
        {
          "Apellido": "SANTI",
          "Nombre": "Jazmín Elizabeth",
          "Calle y número": "San Lorenzo 736(Est)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/423084-15596933",
          "Matrícula": "13-413",
          "Correo Electrónico": "rubensanti50@hotmail.com"
        },
        {
          "Apellido": "SAVY",
          "Nombre": "Lewis",
          "Calle y número": "25 de mayo 410",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470526",
          "Matrícula": "13-142",
          "Correo Electrónico": "lewis@estudiozalloccosavy.com.ar"
        },
        {
          "Apellido": "SBAFFI",
          "Nombre": "Fernando Javier",
          "Calle y número": "Jujuy 353",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/ 444803- 15508566",
          "Matrícula": "13-228",
          "Correo Electrónico": "nsabogados@coyspu.com.ar"
        },
        {
          "Apellido": "SCHIAROLI",
          "Nombre": "Milba Andrea",
          "Calle y número": "Santiago del Estero s/n",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/406913",
          "Matrícula": "13-376",
          "Correo Electrónico": "schiarolimilva@hotmail.com"
        },
        {
          "Apellido": "SCHOTT",
          "Nombre": "Ivana Beatriz",
          "Calle y número": "Av. Santa Fe 301",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15542006- 439031",
          "Matrícula": "13-328",
          "Correo Electrónico": "ivaschott@hotmail.com"
        },
        {
          "Apellido": "SCHOTT",
          "Nombre": "Mateo Germán",
          "Calle y número": "A. del Valle 445. Corrientes 751 – piso 4 Of. “B - ROSARIO",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/ 461647 - (0341)4485014-4472153fax 155708708",
          "Matrícula": "13-267",
          "Correo Electrónico": "mateo@estudioschott.com"
        },
        {
          "Apellido": "SCIUTTO",
          "Nombre": "Celina",
          "Calle y número": "Pedro Lino Funes 427(est.)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15551851",
          "Matrícula": "13-472",
          "Correo Electrónico": "celisciutto@hotmail.com"
        },
        {
          "Apellido": "SEGUETTI",
          "Nombre": "Andrea Carolina",
          "Calle y número": "Sarmiento 74(legal) C.de Bustos",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/ 400271 15514370",
          "Matrícula": "13-307",
          "Correo Electrónico": "andyrolina@hotmail.com"
        },
        {
          "Apellido": "SEIMANDI",
          "Nombre": "Melisa Aylén",
          "Calle y número": "Rioja 215(estudio)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/581225/ 15543223",
          "Matrícula": "13-372",
          "Correo Electrónico": "melisaseimandi@hotmail.com"
        },
        {
          "Apellido": "SERRA MANSILLA",
          "Nombre": "Adriana Pamela",
          "Calle y número": "Alte.Brown 95",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03406/15405692- 03467/15449484",
          "Matrícula": "13-567",
          "Correo Electrónico": "adriserra92@gmail.com"
        },
        {
          "Apellido": "SIARA",
          "Nombre": "María Virginia del Luján",
          "Calle y número": "Illia 319",
          "Código Postal": "",
          "Ciudad": "GRAL. ROCA",
          "Nº de teléfono": "03471/15623709- 03472/491371",
          "Matrícula": "13-457",
          "Correo Electrónico": "mvirginiasiara@gmail.com"
        },
        {
          "Apellido": "SICCARDI",
          "Nombre": "Agustín",
          "Calle y número": "Belgrano 712(legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15548942",
          "Matrícula": "13-515",
          "Correo Electrónico": "agustinsiccardi@hotmail.com"
        },
        {
          "Apellido": "SIGAUDO",
          "Nombre": "Vilma Nélida",
          "Calle y número": "Av. Alem 268",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472-456370",
          "Matrícula": "13-169",
          "Correo Electrónico": "estudio-bini@estudio-bini.com.ar"
        },
        {
          "Apellido": "SIGIFREDO",
          "Nombre": "Juan Angel",
          "Calle y número": "Beiro 220 M.J.(legal)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/481073 - 15449100",
          "Matrícula": "13-51",
          "Correo Electrónico": "jasigifredo@gmail.com"
        },
        {
          "Apellido": "SIGIFREDO",
          "Nombre": "María Eugenia",
          "Calle y número": "Beiro 220 M.J.(legal)",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/481073- 15449098",
          "Matrícula": "13-450",
          "Correo Electrónico": "mesigifredo@gmail.com"
        },
        {
          "Apellido": "SILVA",
          "Nombre": "Gabriela Noemi",
          "Calle y número": "Av. Sarmiento 279",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/15596792",
          "Matrícula": "13-518",
          "Correo Electrónico": "gabixxicb@hotmail.com"
        },
        {
          "Apellido": "SOLDERA",
          "Nombre": "Andrea Verónica",
          "Calle y número": "Dr. Darío Rodríguez s/n",
          "Código Postal": 2583,
          "Ciudad": "GRAL. BALDISSERA",
          "Nº de teléfono": "03468/434503 15597630",
          "Matrícula": "13-211",
          "Correo Electrónico": "avsolde@hotmail.com"
        },
        {
          "Apellido": "SORBELLINI",
          "Nombre": "Mario Andres",
          "Calle y número": "Belgrano 1277",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/15527440",
          "Matrícula": "13-434",
          "Correo Electrónico": "mariosorbellini@gmail.com"
        },
        {
          "Apellido": "SOSA",
          "Nombre": "Luis Mario",
          "Calle y número": "San Martín 609 (estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472-456994(est.) 15535183",
          "Matrícula": "13-322",
          "Correo Electrónico": "sosaluismario@hotmail.com"
        },
        {
          "Apellido": "SPIZZO",
          "Nombre": "Roberto Daniel",
          "Calle y número": "Entre Rios 62",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/432585-15567734",
          "Matrícula": "13-382",
          "Correo Electrónico": "robertodanspizzo@gmail.com"
        },
        {
          "Apellido": "TAHA",
          "Nombre": "Sabrina Jésica",
          "Calle y número": "Belgrano 1037 (Estudio)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/440989 - 15430596",
          "Matrícula": "13-460",
          "Correo Electrónico": "sabrinataha@hotmail.com"
        },
        {
          "Apellido": "TAVARES",
          "Nombre": "Edgardo Jose",
          "Calle y número": "Libertador 879",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/466478",
          "Matrícula": "13-519",
          "Correo Electrónico": "edgardo_tavares@hotmail.com"
        },
        {
          "Apellido": "TAVITIAN",
          "Nombre": "Guillermo Martín",
          "Calle y número": "Lardizabal 1773 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "0351/154597222",
          "Matrícula": "13-545",
          "Correo Electrónico": "gtavitian@gmail.com"
        },
        {
          "Apellido": "TESAN",
          "Nombre": "Daniel Pascual",
          "Calle y número": "Av.Liniers 38",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/495153 15631415",
          "Matrícula": "13-94",
          "Correo Electrónico": "ggetesan@coopsur.com.ar"
        },
        {
          "Apellido": "TESAN",
          "Nombre": "Darío José",
          "Calle y número": "Silvio Agostini 955",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/400373- 15631750",
          "Matrícula": "13-244",
          "Correo Electrónico": "drtesan@gmail.com"
        },
        {
          "Apellido": "TESAN",
          "Nombre": "Georggina María",
          "Calle y número": "Bv. Liniers 38 (legal)",
          "Código Postal": 2581,
          "Ciudad": "LOS SURGENTES",
          "Nº de teléfono": "03467/495153-15635000",
          "Matrícula": "13-500",
          "Correo Electrónico": "gmtesan@gmail.com"
        },
        {
          "Apellido": "TODOROVICH",
          "Nombre": "José Raúl",
          "Calle y número": "25 de Mayo 138- Isla Verde Belgrano 1238 de Arias Beiró 220 de Ms.Jz.",
          "Código Postal": 2624,
          "Ciudad": "ARIAS",
          "Nº de teléfono": "03468/440533/ Fax 406869(I.V.) 15510117",
          "Matrícula": "13-79",
          "Correo Electrónico": "josetodorovich@nodosud.com.ar"
        },
        {
          "Apellido": "TOMICH",
          "Nombre": "Dahyana Caren",
          "Calle y número": "Gral. Paz 233",
          "Código Postal": 2587,
          "Ciudad": "INRIVILLE",
          "Nº de teléfono": "03468/15564378",
          "Matrícula": "13-598",
          "Correo Electrónico": "dtomich95@hotmail.com"
        },
        {
          "Apellido": "TORRE",
          "Nombre": "Camilo Abel",
          "Calle y número": "Buenos Aires y 3 de Febrero(legal)",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/15436412",
          "Matrícula": "13-532",
          "Correo Electrónico": "torrecamilo@hotmail.com"
        },
        {
          "Apellido": "TORRE",
          "Nombre": "Gustavo Miguel",
          "Calle y número": "Italia y Sarmiento",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/432950 423287-15648674",
          "Matrícula": "13-131",
          "Correo Electrónico": "gustavomtorre@gmail.com"
        },
        {
          "Apellido": "TORRES",
          "Nombre": "Jesica Maricel",
          "Calle y número": "Rosario de Santa Fe 515 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/458356- 15553010",
          "Matrícula": "13-441",
          "Correo Electrónico": "jesicatorresabo@gmail.com"
        },
        {
          "Apellido": "TORRES SOLDINI",
          "Nombre": "Marina",
          "Calle y número": "Buenos Aires 449",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZÍN",
          "Nº de teléfono": "03468/15564777",
          "Matrícula": "13-580",
          "Correo Electrónico": "torresmarina16@gmail.com"
        },
        {
          "Apellido": "TOZZI",
          "Nombre": "Eliana María",
          "Calle y número": "Belgrano 1356 Ms.Jz.(legal)",
          "Código Postal": 2587,
          "Ciudad": "INRIVILLE",
          "Nº de teléfono": "03467/410431-480298/15446072",
          "Matrícula": "13-405",
          "Correo Electrónico": "elytozzi@hotmail.com"
        },
        {
          "Apellido": "TRAVERSI",
          "Nombre": "Gisela Mercedes",
          "Calle y número": "H. Irigoyen 1576 (casa)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15468578",
          "Matrícula": "13-471",
          "Correo Electrónico": "gise_traversi@hotmail.com"
        },
        {
          "Apellido": "TRIGOS",
          "Nombre": "Germán Eduardo",
          "Calle y número": "Belgrano 1157",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/498188",
          "Matrícula": "13-527",
          "Correo Electrónico": "germantrigos78@hotmail.com"
        },
        {
          "Apellido": "TRONCARO",
          "Nombre": "Carolina",
          "Calle y número": "José María Paz 989",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/15419529",
          "Matrícula": "13-578",
          "Correo Electrónico": "caartroncaro@gmail.com"
        },
        {
          "Apellido": "VALVERDE",
          "Nombre": "Camila",
          "Calle y número": "Almirante Brown 1127",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/457357- 15558058",
          "Matrícula": "13-507",
          "Correo Electrónico": "camivalverde33@gmail.com"
        },
        {
          "Apellido": "VANNAY",
          "Nombre": "Melisa Carmen",
          "Calle y número": "Belgrano 256 (legal)",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/433279-15511937",
          "Matrícula": "13-317",
          "Correo Electrónico": "melisavannay@gmail.com"
        },
        {
          "Apellido": "VEGA",
          "Nombre": "Andrea Maricel",
          "Calle y número": "3 de Febrero 1180",
          "Código Postal": 2585,
          "Ciudad": "CAMILO ALDAO",
          "Nº de teléfono": "03468/401500 - 0341/153395864",
          "Matrícula": "13-410",
          "Correo Electrónico": "andreavega17@hotmail.com"
        },
        {
          "Apellido": "VELEZ",
          "Nombre": "Juan Pablo",
          "Calle y número": "Pedro Lino Funes nº 126",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/ 15521879",
          "Matrícula": "13-293",
          "Correo Electrónico": "estudiojuridicovelez@gmail.com"
        },
        {
          "Apellido": "VENTURUZZI",
          "Nombre": "Adriana Corina",
          "Calle y número": "Independencia 459",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/428644- 15527583",
          "Matrícula": "13-294",
          "Correo Electrónico": "adriventuruzzi@hotmail.com"
        },
        {
          "Apellido": "VIDORET",
          "Nombre": "María Celeste",
          "Calle y número": "Belgrano 1254 (legal)",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/15632227",
          "Matrícula": "13-509",
          "Correo Electrónico": "mcelestevidoret@gmail.com"
        },
        {
          "Apellido": "VIDORET",
          "Nombre": "Oscar Ignacio",
          "Calle y número": "San Juan 575 est.",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/15412853-400099 est.",
          "Matrícula": "13-355",
          "Correo Electrónico": "oscarvidoret@hotmail.com"
        },
        {
          "Apellido": "VILLAMON",
          "Nombre": "Agostina",
          "Calle y número": "1º de Mayo 1446",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472-15549938",
          "Matrícula": "13-587",
          "Correo Electrónico": "agostinavillamon@gmail.com"
        },
        {
          "Apellido": "VILLALÓN",
          "Nombre": "Sebastián Carlos",
          "Calle y número": "Bv. Lardizábal 1232(est)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/15500336",
          "Matrícula": "13-393",
          "Correo Electrónico": "scvillalon@hotmail.com"
        },
        {
          "Apellido": "VILLARREAL GONZÁLEZ",
          "Nombre": "Maximiliano Oscar",
          "Calle y número": "Chacabuco 1443",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/458129-15551832",
          "Matrícula": "13-415",
          "Correo Electrónico": "estudiojuridicovg4@gmail.com"
        },
        {
          "Apellido": "VISSANI",
          "Nombre": "Claudia Edith",
          "Calle y número": "Belgrano 1374",
          "Código Postal": 2594,
          "Ciudad": "LEONES",
          "Nº de teléfono": "03472/482037 - 15585662",
          "Matrícula": "13-163",
          "Correo Electrónico": "cvissani4@gmail.com"
        },
        {
          "Apellido": "VOJVODA",
          "Nombre": "Adriana Verónica",
          "Calle y número": "San Martín 741 Ms.Jz.(estudio)",
          "Código Postal": 2189,
          "Ciudad": "CRUZ ALTA",
          "Nº de teléfono": "03467/422122 15638514",
          "Matrícula": "13-345",
          "Correo Electrónico": "a_vojvoda@hotmail.com"
        },
        {
          "Apellido": "VOLPI",
          "Nombre": "Joaquín",
          "Calle y número": "Urquiza 372 (legal)",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUÁREZ",
          "Nº de teléfono": "03472/ 15584822",
          "Matrícula": "13-439",
          "Correo Electrónico": "joavolpi@gmail.com"
        },
        {
          "Apellido": "VRANCOVICH",
          "Nombre": "Jorge Alberto",
          "Calle y número": "Tucumán 554",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZIN",
          "Nº de teléfono": "03468/495461 - 15413185 Marisa",
          "Matrícula": "13-204",
          "Correo Electrónico": "dr.vrancovich@guati.com.ar"
        },
        {
          "Apellido": "WEINER",
          "Nombre": "Brenda",
          "Calle y número": "Av. San Martín 396 (legal)",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/15587572",
          "Matrícula": "13-540",
          "Correo Electrónico": "brendaweiner@hotmail.com"
        },
        {
          "Apellido": "YACOBONE",
          "Nombre": "Miguel Angel",
          "Calle y número": "Alem 562",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "03472/444562 15624710",
          "Matrícula": "13-202",
          "Correo Electrónico": "mayacobone@hotmail.com"
        },
        {
          "Apellido": "ZALLOCCO",
          "Nombre": "Horacio Martín",
          "Calle y número": "Rivadavia y Ameghino",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470526 15639092",
          "Matrícula": "13-362",
          "Correo Electrónico": "zalloccohoracio@hotmail.com"
        },
        {
          "Apellido": "ZALLOCCO",
          "Nombre": "Nelson José",
          "Calle y número": "Rivadavia 377",
          "Código Postal": 2589,
          "Ciudad": "MONTE BUEY",
          "Nº de teléfono": "03467/470526",
          "Matrícula": "13.-2",
          "Correo Electrónico": "zallocco@nodosud.com.ar"
        },
        {
          "Apellido": "ZARANICH",
          "Nombre": "Nadina Ivana",
          "Calle y número": "Catamarca 227",
          "Código Postal": 2627,
          "Ciudad": "GUATIMOZIN",
          "Nº de teléfono": "495281 - 495264 (x la mañana) 15525227",
          "Matrícula": "13-257",
          "Correo Electrónico": "nadinazaranich@hotmail.com"
        },
        {
          "Apellido": "ZEBALLOS STARCK",
          "Nombre": "Facundo Ezequiel",
          "Calle y número": "Ayacucho 1260",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/450067- 0351/156315395",
          "Matrícula": "13-446",
          "Correo Electrónico": "facuzebas@hotmail.com"
        },
        {
          "Apellido": "ZEBALLOS",
          "Nombre": "Andrea Mercedes",
          "Calle y número": "Libertad 1136",
          "Código Postal": 2661,
          "Ciudad": "ISLA VERDE",
          "Nº de teléfono": "03468/450067-15540502",
          "Matrícula": "13-381",
          "Correo Electrónico": "estudiojuridicozeballos@hotmail.com"
        },
        {
          "Apellido": "ZIELINSKI",
          "Nombre": "Federico Gustavo",
          "Calle y número": "H. Irigoyen 403",
          "Código Postal": 2580,
          "Ciudad": "MARCOS JUAREZ",
          "Nº de teléfono": "0294/15424687",
          "Matrícula": "13-365",
          "Correo Electrónico": "fgzielinski@hotmail.com"
        },
        {
          "Apellido": "ZUNINO",
          "Nombre": "Norma Esther de Lourdes",
          "Calle y número": "Sarmiento 70",
          "Código Postal": 2645,
          "Ciudad": "CORRAL DE BUSTOS",
          "Nº de teléfono": "03468/421571- 15566372",
          "Matrícula": "13-92",
          "Correo Electrónico": "normaester1959@hotmail.com"
        },
        {
          "Apellido": "ZUÑIGA",
          "Nombre": "María Eugenia",
          "Calle y número": "Av. Italia 692 (legal)C.de Bustos",
          "Código Postal": 2645,
          "Ciudad": "COLONIA ITALIANA",
          "Nº de teléfono": "03468/15419524",
          "Matrícula": "13-553",
          "Correo Electrónico": "eugeniazuniga9@gmail.com"
        }
      ];
    
      const [datos, setDatos] = useState(datosIniciales);
      const [busqueda, setBusqueda] = useState("");
      const busquedaLimpia = busqueda.trim();
    
      // Filtrar datos según la búsqueda
      const datosFiltrados =
    busquedaLimpia.length > 0
      ? datosIniciales.filter(
          (item) =>
            item.Apellido.toLowerCase().includes(busquedaLimpia.toLowerCase()) ||
            item.Matrícula.toString().includes(busquedaLimpia)
        )
      : [];
      
      console.log(datosFiltrados)
      return (
        <div>
          <div className="relative w-[100%] h-[150px] mt-[90px] bg-[url('./assets/FondoTramiteMatricula.jpg')] bg-cover bg-center">
            {/* Overlay negro */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
      
            {/* Texto centrado */}
            <div className="absolute inset-0 flex items-center text-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold">Padrón</h1>
            </div>
          </div>
      
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Búsqueda de Abogados</h2>
            <p className="text-md mb-4">Encuentra a tu abogado ingresando su apellido o número de matrícula.</p>
            <input
              type="text"
              placeholder="Buscar por apellido o matrícula..."
              className="w-full p-2 mb-4 border rounded"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
      
            {/* Botón de descarga */}
            
            <a
              href="/upload/PadronCAMJ.csv"
              download
              className="bg-[#0F0D3C] text-[#f4f4f4] px-5 py-2 text-lg font-semibold transition-transform duration-300 transform hover:scale-110 block text-center w-fit mx-auto"
            >
              Descargar Padrón
            </a>
      
            {/* Mostrar la tabla solo si hay una búsqueda válida */}
            {busquedaLimpia.length > 0 && datosFiltrados.length > 0 ? (
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Apellido</th>
                      <th className="border p-2">Nombre</th>
                      <th className="border p-2">Dirección</th>
                      <th className="border p-2">Código Postal</th>
                      <th className="border p-2">Localidad</th>
                      <th className="border p-2">Teléfono</th>
                      <th className="border p-2">Matrícula</th>
                      <th className="border p-2">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosFiltrados.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border p-0.5">{item.Apellido}</td>
                        <td className="border p-0.5">{item.Nombre}</td>
                        <td className="border p-0.5">{item['Calle y número']}</td>
                        <td className="border p-0.5">{item['Código Postal']}</td>
                        <td className="border p-0.5">{item.Ciudad}</td>
                        <td className="border p-0.5">{item['Nº de teléfono']}</td>
                        <td className="border p-0.5">{item.Matrícula}</td>
                        <td className="border p-0.5">
                          <a href={`mailto:${item['Correo Electrónico']}`} className="text-blue-600 underline">
                            {item['Correo Electrónico']}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : busquedaLimpia.length > 0 ? (
              <p className="text-center text-gray-600 mt-4">No se encontraron resultados</p>
            ) : null}
          </div>
        </div>
      );
      
    }
    
    export default Padron;