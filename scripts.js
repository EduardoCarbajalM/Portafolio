function addCertification(image, title, description, catalog, url, moreInfo) {
    const container = document.querySelector(`#${catalog} .row`);
    if (!container) {
        console.error(`No se encontró el contenedor para el catálogo: ${catalog}`);
        return;
    }

    // Genera un ID único para el modal
    const modalId = `moreInfoModal-${title.replace(/\s+/g, '-')}`;

    // Crea un nuevo elemento div
    const certificationDiv = document.createElement('div');
    certificationDiv.className = 'col-md-4 d-flex align-items-stretch';

    // Crea el contenido HTML dentro del div
    certificationDiv.innerHTML = `
        <div class="card mb-4 shadow-sm sombra-inferior">
            <img src="${image}" alt="${title}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                    ${description}
                </p>
                <div class="d-flex flex-column flex-sm-row justify-content-between mt-auto">
                    <a href="${url}" target="_blank" class="btn btn-primary mb-2 mb-sm-0">Ver Certificado</a>
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#${modalId}">
                        Más información
                    </button>
                </div>    
            </div>
        </div>
        <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="${modalId}Label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${modalId}Label">Más información sobre ${title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ${moreInfo}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Agrega el nuevo div al contenedor
    container.appendChild(certificationDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    // Programación

    addCertification(
        'certificados/programacion/Certificado_Back_end.png', 
        'Programa Oracle Next Education F2 T5 Back-end', 
        'Formación integral en back end.', 
        'Programación', 
        'https://app.aluracursos.com/program/certificate/920607b7-8be4-450f-81f6-cfd63bec1204', 
        'Participé en una formación integral de back end con Oracle y Alura, que abarcó desde habilidades de desarrollo personal y agilidad empresarial hasta programación avanzada con Java y Spring Boot. Esta formación me proporcionó una base sólida en tecnologías de back end y habilidades interpersonales.'
    );

    addCertification(
        'certificados/programacion/Java_Spring_Boot_G5.png', 
        'Java y Spring Boot G5 - ONE', 
        'Habilidades en Java y Spring Boot. Usando Hibernate', 
        'Programación', 
        'https://app.aluracursos.com/degree/certificate/5265d5cf-6778-40a7-a02e-ff377905f2fe', 
        'Adquirí habilidades en SQL con MySQL, Java y JDBC, persistencia con JPA: Hibernate, y desarrollo de API Rest con Spring Boot 3. Aprendí a proteger, documentar, probar y preparar una API para su implementación.'
    );

    addCertification(
        'certificados/programacion/Java_BD.png', 
        'Integre aplicaciones Java con Base de datos', 
        'Habilidades en Java y JDBC.', 
        'Programación', 
        'https://app.aluracursos.com/degree/certificate/57f95435-0fd3-4935-9e01-7bd3df71f8b6', 
        'Adquirí habilidades en Java y JDBC, trabajando directamente con una base de datos. Profundicé en la persistencia con JPA: Hibernate y avanzé en Java y JPA con consultas avanzadas, rendimiento y modelos complejos.'
    );

    addCertification(
        'certificados/programacion/Java_Orientado_Objetos.png', 
        'Java Orientado a Objetos G5 - ONE', 
        'Conceptos de Orientación a Objetos en Java.', 
        'Programación', 
        'https://app.aluracursos.com/degree/certificate/99f0be9c-9d8f-4859-9d75-82fc183d5557', 
        'Comencé con Java JRE y JDK, compilando y ejecutando mi primer programa. Luego, entendí la Orientación a Objetos y el Polimorfismo en Java, incluyendo herencia e interfaces. Aprendí a crear, lanzar y controlar excepciones en Java Excepciones. Además, programé con la clase Object y String en Java y java.lang, y trabajé con Colecciones, Wrappers y Lambda expressions en Java y java.util.'
    );

    addCertification(
        'certificados/programacion/Principiante_Programacion_G5.png', 
        'Principiante en Programación G5 - ONE', 
        'Fundamentos de programación.', 
        'Programación', 
        'https://app.aluracursos.com/degree/certificate/8937463e-ac78-49cd-8ba2-20a0820f11e2', 
        'Adquirí habilidades en lógica de programación, HTML5, CSS3 y Git. Completé desafíos prácticos de Front End y Java, reforzando mi base en programación y ganando experiencia en la resolución de problemas.'
    );

    addCertification(
        'certificados/programacion/git_hub_curso.png', 
        'Git y GitHub: controle y comparta su código', 
        'Manejar Git bash y Git Hub', 
        'Programación', 
        'https://app.aluracursos.com/certificate/4eae5b80-ecf6-4590-b6fa-e6e324449eee',
        'Recientemente completé el curso ‘Git y GitHub: controle y comparta su código’. Comenzó con una introducción a Git, explicando su importancia en el desarrollo de software moderno. Aprendí a iniciar proyectos y a compartir mi trabajo de manera eficiente. El curso también cubrió cómo trabajar en equipo utilizando Git, una habilidad invaluable en cualquier entorno de desarrollo de software. Aprendí a manipular versiones y a generar entregas, lo que me equipó bien para manejar cualquier proyecto. El curso consistió en 60 actividades, todas las cuales completé con éxito. Al final, obtuve un certificado formal que puedo actualizar e imprimir cuando lo necesite.'
    );

    addCertification(
        'certificados/programacion/html_css_1.png', 
        'HTML5 y CSS3 parte 1: Mi primera página web', 
        'Curso completo de HTML5 y CSS3.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/baed8bf1-138b-4129-b17c-349618bdd7f1',
        'Completé el curso ‘HTML5 y CSS3 parte 1: Mi primera página web’, que cubrió una variedad de temas esenciales para el desarrollo web. Comenzó con la marcación del primer texto, seguido de la separación de contenido e informaciones. Aprendí a trabajar con CSS y a estilizar imágenes, lo que me permitió crear páginas web visualmente atractivas. El curso también cubrió listas y divisiones del contenido, habilidades cruciales para organizar y estructurar una página web. Finalmente, terminé creando mi propia página web. El curso consistió en 51 actividades, todas las cuales completé con éxito. Al final, obtuve un certificado formal que puedo actualizar e imprimir cuando lo necesite'
    );

    addCertification(
        'certificados/programacion/html_css_2.png', 
        'HTML5 Y CSS3 PARTE 2: POSICIONAMIENTO, LISTAS Y NAVEGACIÓN', 
        'Avanzando en HTML5 y CSS3.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/baf1bd93-f5b9-4138-b8cb-f1c71b56a902',
        'Completé el curso ‘HTML5 y CSS3 parte 2: Posicionamiento, listas y navegación’, donde aprendí a crear nuevas páginas, navegar entre ellas, posicionar elementos, trabajar con listas de productos, lidiar con bordes, capturar eventos con CSS y finalizar la página de productos. Realicé todas las 60 actividades con éxito.'
    );
    
    addCertification(
        'certificados/programacion/html_css_3.png', 
        'HTML5 y CSS3 parte 3: Trabajando con formularios y tablas', 
        'Dominando formularios y tablas.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/45c854fc-d36f-499a-8022-263f5038d346',
        'En el curso ‘HTML5 y CSS3 parte 3: Trabajando con formularios y tablas’, aprendí a crear nuevas páginas, comenzar un formulario, trabajar con diferentes tipos de campos, mejorar la semántica, avanzar en CSS y estructurar tablas. Completé todas las 50 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/html_css_4.png', 
        'HTML5 y CSS3 parte 4: Avanzando en CSS', 
        'Profundizando en CSS.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/267454ba-82da-441e-b81c-150085e5e20b',
        'El curso ‘HTML5 y CSS3 parte 4: Avanzando en CSS’ me permitió adaptar la página inicial, trabajar con contenido externo, mejorar el CSS, seleccionar cualquier cosa, trabajar con opacidad y sombra, y aprender sobre diseño responsivo. Completé todas las 53 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/java_excepciones.png', 
        'Java Excepciones: Aprenda a crear, lanzar y controlar excepciones', 
        'Manejando excepciones en Java.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/e00f120b-06f6-4ac9-bcac-fa05ca15dd9e',
        'En el curso ‘Java Excepciones: Aprenda a crear, lanzar y controlar excepciones’, aprendí sobre la pila de ejecución, el tratamiento de excepciones, cómo lanzar excepciones, la diferencia entre checked y unchecked, cómo aplicar excepciones y el uso de finally y try with resources. Completé todas las 70 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/java_jre_jdk.png', 
        'Java JRE y JDK: compile y ejecute su primer programa', 
        'Iniciándome en Java.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/cc4dcd09-4187-44f2-8c03-5a19fa4d1eba',
        'El curso ‘Java JRE y JDK: compile y ejecute su primer programa’ fue mi introducción a Java. Aprendí qué es Java, cómo programar con Eclipse, trabajar con tipos y variables, trabajar con caracteres, practicar condicionales y controlar el flujo con loops. Completé todas las 81 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/java_oo.png', 
        'Java OO: Entendiendo la Orientación a Objetos', 
        'Aprendiendo orientación a objetos.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/c94dbd9d-d912-428b-8020-236ed00b316f',
        'En el curso ‘Java OO: Entendiendo la Orientación a Objetos’, aprendí sobre el problema del paradigma procedimental, la introducción a la orientación a objetos, cómo definir comportamientos, la composición de objetos, el encapsulamiento y la visibilidad, y los constructores y miembros estáticos. Completé todas las 67 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/java_poliformismo.png', 
        'Java Polimorfismo: Entendiendo herencia e interfaces', 
        'Entendiendo polimorfismo en Java.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/e43a9fa9-063e-4bad-809a-08318611d731',
        'El curso ‘Java Polimorfismo: Entendiendo herencia e interfaces’ me enseñó sobre la introducción a la herencia, super y reescritura de métodos, entendiendo el polimorfismo, la herencia y el uso de constructores, clases y métodos abstractos, interfaces y la práctica de herencia e interfaces. Completé todas las 79 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/java_lang.png', 
        'Java y java.lang: Programe con la clase Object y String', 
        'Profundizando en java.lang.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/5c1bb8c5-ce05-4480-a55c-d3bb39fbc58c',
        'En el curso ‘Java y java.lang: Programe con la clase Object y String’, aprendí a organizar clases con paquetes, todos los modificadores de acceso, la distribución de código, el paquete java.lang y la clase Object. Completé todas las 57 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/java_util.png', 
        'Java y java.util: Colecciones, Wrappers y Lambda expressions', 
        'Dominando colecciones en Java.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/370f11ae-5b25-42c3-8d34-694e8fc529e3',
        'Completé el curso ‘Java y java.util: Colecciones, Wrappers y Lambda expressions’, donde aprendí sobre Arrays, referencias, ArrayList y Generics, Equals y más listas, Vector e Interfaz Collection, clases Wrappers, ordenamiento de listas, y clases anónimas y Lambdas. Realicé todas las 95 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/java_jdbc.png', 
        'Java y JDBC: Trabajando con una Base de Datos', 
        'Manejando bases de datos en Java.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/fa5fedf9-668a-4e6a-99d2-b3066b5e6c05',
        'En el curso ‘Java y JDBC: Trabajando con una Base de Datos’, aprendí sobre la introducción a JDBC, ejecución de comandos SQL en Java, realización de mejoras en el proyecto, escalabilidad con pool de conexiones, capa de persistencia con DAO, y cómo evitar queries N + 1. Completé todas las 69 actividades con éxito.'
    );    
    
    addCertification(
        'certificados/programacion/java_jpa.png', 
        'Java y JPA: consultas avanzadas, rendimiento y modelos complejos', 
        'Avanzando en JPA.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/46c8751c-b68e-47a7-8216-4c5014288051',
        'El curso ‘Java y JPA: consultas avanzadas, rendimiento y modelos complejos’ me permitió aprender sobre más relacionamientos, consultas avanzadas, rendimiento de consultas, Criteria API, y otros tópicos. Completé todas las 48 actividades con éxito'
    );

    addCertification(
        'certificados/programacion/lp_conceptos.png', 
        'Lógica de programación: Conceptos primordiales', 
        'Fundamentos de lógica de programación.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/73f7a0a6-d767-442a-a2e6-7b40fdf6e4b4',
        'En el curso ‘Lógica de programación: Conceptos primordiales’, aprendí a ejecutar códigos diferentes dependiendo de la condición, repetir actividades, interactuar de manera diferente con el usuario, trabajar con muchos datos, y aprovechar las ventajas de los arrays. Completé todas las 52 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/lp_juegos_animaciones.png', 
        'Lógica de programación: Practicando con juegos y animaciones', 
        'Lógica de programación con juegos.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/72c4c226-620c-4d1e-82ee-4088706d97bf',
        'El curso ‘Lógica de programación: Practicando con juegos y animaciones’ me enseñó a diseñar gráficos con Canvas, utilizar funciones, interactuar con el usuario, mover elementos con animaciones simples, y crear mi primer juego. Completé todas las 44 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/lp_primeros_pasos.png', 
        'Lógica de programación: Primeros pasos', 
        'Iniciándome en programación.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/a904aba4-e0a6-4c7d-aab2-2f08ffdbb624',
        'El curso ‘Lógica de programación: Primeros pasos’ fue mi introducción a la programación. Aprendí a comenzar a programar hoy, comunicarme con el usuario, dejar mi programa dinámico usando variables, crear mis propias funcionalidades, y practicar resolviendo problemas del día a día. Completé todas las 51 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/java_jpa_hibernate.png', 
        'Persistencia con JPA: Hibernate', 
        'Aprendiendo persistencia con Hibernate.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/c086f95c-b7e8-44f5-aed0-527280523b25',
        'En el curso ‘Persistencia con JPA: Hibernate’, aprendí a comenzar con JPA, configuraciones y EntityManager, mapear entidades, ciclo de vida de una entidad, y consultas con JPQL. Completé todas las 52 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/sp3_proteger_api.png', 
        'Spring Boot 3: aplique las mejores prácticas y proteja una API Rest', 
        'Mejorando APIs con Spring Boot.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/8ac8f7e8-fe3d-4e5a-82ff-a3660a438f3a',
        'El curso ‘Spring Boot 3: aplique las mejores prácticas y proteja una API Rest’ me enseñó sobre buenas prácticas en API, tratamiento de errores, Spring Security, JSON Web Token, y control de acceso. Completé todas las 61 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/sp3_desarrollar_api.png', 
        'Spring Boot 3: desarrollar una API Rest en Java', 
        'Desarrollando APIs con Spring Boot.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/a390f549-23eb-4d93-9544-9b3d240a2abc',
        'En el curso ‘Spring Boot 3: desarrollar una API Rest en Java’, aprendí a crear un proyecto, realizar requests POST, trabajar con Spring Data JPA, realizar requests GET, y requests PUT y DELETE. Completé todas las 67 actividades con éxito.'
    );

    addCertification(
        'certificados/programacion/sp3_documentar.png', 
        'Spring Boot 3: documentar, probar y preparar una API para su implementación', 
        'Preparando APIs para implementación.', 
        'Programación', 
        'https://app.aluracursos.com/certificate/e0f38e35-3c2d-467c-ba5c-e3ad13e8ab69',
        'El curso ‘Spring Boot 3: documentar, probar y preparar una API para su implementación’ me permitió aprender sobre agendamiento de consultas, reglas de negocio, documentación de la API, tests automatizados, y build del proyecto. Completé todas las 51 actividades con éxito.'
    );

    // Base de datos
    addCertification(
        'certificados/baseDeDatos/sql_mysql_server_oracle.png', 
        'Formación SQL con MySQL Server de Oracle - ONE', 
        'Formación en SQL con MySQL Server de Oracle.', 
        'BaseDeDatos', 
        'https://app.aluracursos.com/degree/certificate/4cf6defb-3677-435d-8ee8-7e156ecbc8fe', 
        'Realicé una formación en SQL con MySQL Server de Oracle, que abarcó desde consultas básicas hasta avanzadas, manipulación de datos, seguridad y optimización de bases de datos. Esta formación me ha preparado para roles desafiantes en el desarrollo y administración de bases de datos.'
    );

    addCertification(
        'certificados/baseDeDatos/python_data_science_OCI_Oracle.png', 
        'Formación Python, Data Science en OCI y Oracle Analytics - ONE', 
        'Formación en Python y Data Science.', 
        'BaseDeDatos', 
        'https://app.aluracursos.com/degree/certificate/ec5df59b-acf1-47c5-a8c8-b7311af2fd4b', 
        'Realicé una formación en SQL con MySQL Server de Oracle, que abarcó desde consultas básicas hasta avanzadas, manipulación de datos, seguridad y optimización de bases de datos. Esta formación me ha preparado para roles desafiantes en el desarrollo y administración de bases de datos.'
    );

    addCertification(
        'certificados/baseDeDatos/sql_con_mysql.png', 
        'Formación SQL con MySQL - ONE', 
        'Curso de SQL con MySQL.', 
        'BaseDeDatos', 
        'https://app.aluracursos.com/degree/certificate/d07c177f-3d8b-4845-b681-8667b9522bc3', 
        'En mi curso de SQL con MySQL, adquirí una sólida base en la manipulación y consulta de datos, profundicé en las consultas SQL, aprendí a manipular datos con comandos DML y a ejecutar código con Procedures SQL. Consolidé mis habilidades con un proyecto final y finalmente, me sumergí en la administración de MySQL, aprendiendo sobre seguridad y optimización de la base de datos. Esta experiencia integral me ha equipado con habilidades valiosas para futuros proyectos y roles.'
    );

    addCertification(
        'certificados/baseDeDatos/introduccion_sql.png', 
        'Introducción a SQL con MySQL: Manipule y consulte datos', 
        'Fundamentos de SQL', 
        'BaseDeDatos', 
        'https://app.aluracursos.com/certificate/590cc782-798a-498b-a513-1f91d94cde1a',
        'Durante este curso, adquirí una base sólida en SQL y aprendí a manipular datos en una base de datos MySQL. Me resultó especialmente útil para comprender conceptos como el filtrado y la presentación de datos.'
    );

    addCertification(
        'certificados/baseDeDatos/consultas_sql.png', 
        'Consultas SQL: Avanzando en SQL con MySQL', 
        'Consultas avanzadas', 
        'BaseDeDatos', 
        'https://app.aluracursos.com/certificate/2cf4ed12-c86e-432d-bcb4-52711211de97',
        'En este curso, profundicé en consultas más avanzadas en SQL. Aprendí a unir tablas, utilizar funciones y optimizar mis consultas.'
    );

    addCertification(
        'certificados/baseDeDatos/comandos_dml.png', 
        'Comandos DML: Manipulación de datos con MySQL', 
        'Dominé manipulación de datos', 
        'BaseDeDatos', 
        'https://app.aluracursos.com/certificate/09be77bf-88b0-4a49-8e19-fcae678ad519',
        'Aquí me sumergí en los comandos DML (Data Manipulation Language) en MySQL. Aprendí a insertar, actualizar y eliminar registros en las tablas'
    );

    addCertification(
        'certificados/baseDeDatos/procedures_sql.png',
        'Procedures SQL: Ejecutando código en MySQL',
        'Creé procedimientos almacenado',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/8e63b101-2862-4823-b81b-ad51c401f453',
        'Durante este curso, profundicé en los procedimientos almacenados en MySQL. Aprendí a crear y ejecutar código personalizado en la base de datos'
    );
    
    addCertification(
        'certificados/baseDeDatos/sql_mysql.png',
        'SQL con MySQL: Proyecto final',
        'Trabajé en un proyecto final',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/dd309eec-e293-4663-93db-4db8c8263a03',
        'En este curso, apliqué todo lo que había aprendido en un proyecto final. Trabajé en la recuperación de datos, la optimización y la seguridad de la base de datos'
    );

    addCertification(
        'certificados/baseDeDatos/admin_mysql.png',
        'Administración de MySQL: Seguridad y optimización de la base de datos - Parte 1',
        'Aprendí sobre seguridad y optimización',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/35b348f0-91ff-4cdd-90d9-ab5bd28880db',
        'Aquí me sumergí en la administración de MySQL, explorando temas como índices, gestión de usuarios y seguridad en la base de datos'
    );
    
    addCertification(
        'certificados/baseDeDatos/admin_mysql_2.png',
        'Administración de MySQL: Seguridad y optimización de la base de datos - Parte 2',
        'Optimización y seguridad en MySQL',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/605d62a5-20b9-4897-810f-5e85b0b16bdb',
        'Durante este curso, profundicé mis habilidades en la optimización y la seguridad de bases de datos. Aprendí a entender y analizar el plan de ejecución de consultas SQL, lo cual es crucial para la optimización. Además, exploré la importancia de los índices en una base de datos MySQL y adquirí conocimientos para gestionar usuarios y asignarles diferentes niveles de privilegios.'
    );

    addCertification(
        'certificados/baseDeDatos/python_data_science.png',
        'Python para Data Science: Introducción al Lenguaje',
        'Fundamentos de Python',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/1225ccb9-9f47-4278-bec2-9daf6daf0b2e',
        'En este curso, adquirí una sólida comprensión de los fundamentos del lenguaje de programación Python. Aprendí sobre variables, funciones, parámetros, condicionales, conversión de datos, listas, bucles, booleanos y cómo importar librerías. También me introduje a la creación de gráficos con matplotlib.'
    );

    addCertification(
        'certificados/baseDeDatos/python_data_funciones.png',
        'Python para Data Science: Funciones, Librerías y Pandas básico',
        'Python y Pandas',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/b598d023-f678-434c-b615-f089713b20d0',
        'Este curso me permitió profundizar en el uso de Python para la ciencia de datos. Aprendí sobre listas estáticas (tuplas), mapeo de datos (diccionarios), organización del código (funciones y paquetes), y la biblioteca de los científicos de datos: Pandas.'
    );

    addCertification(
        'certificados/baseDeDatos/python_pandas.png',
        'Python Pandas: Tratamiento y análisis de datos',
        'Análisis de datos con Pandas',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/63c47b0a-fa90-4cef-b0a6-d2d643fd18f0',
        'En este curso, aprendí a trabajar con datos utilizando la biblioteca Pandas en Python. Aprendí a importar datos, crear series e índices, filtrar datos, tratar datos faltantes, crear nuevas variables, realizar estadísticas descriptivas y excluir outliers.'
    );

    addCertification(
        'certificados/baseDeDatos/data_visualization.png',
        'Data Visualization: Explorando con Seaborn',
        'Visualización de datos con Seaborn',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/89b9ecf3-fb4e-4aad-8a3a-35f54b30c746',
        'Este curso me enseñó a explorar datos visualmente utilizando la biblioteca Seaborn en Python. Aprendí a importar y traducir variables, realizar análisis exploratorio de variables, comparar y analizar variables categóricas, realizar análisis de variables numéricas y regresión, y realizar análisis conjunto de variables.'
    );

    addCertification(
        'certificados/baseDeDatos/machine_learning_1.png',
        'Machine Learning: clasificación con SKLearn',
        'Clasificación con Machine Learning',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/6257d3f7-f544-4109-b491-6d881b397671',
        ': En este curso, aprendí sobre la clasificación en Machine Learning utilizando la biblioteca SKLearn en Python. Aprendí a leer y manipular datos, crear un modelo baseline, trabajar con estimadores no lineales y dummy classifiers, y utilizar árboles de decisión.'
    );

    addCertification(
        'certificados/baseDeDatos/machine_learning_2.png',
        'Machine Learning: Optimización de modelos a través de hiperparámetros',
        'Optimización de modelos de Machine Learning',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/4cb58050-7103-4283-94a2-a0e768e8bd05',
        'Este curso me enseñó a optimizar modelos de Machine Learning a través de hiperparámetros. Aprendí sobre hiperparámetros, optimización y overfit, exploración de 2 dimensiones de hiperparámetros, trabajo con 3 o más dimensiones, búsqueda de hiperparámetros con GridSearchCV, y Nested Cross Validation y validación del modelo elegido.'
    );

    addCertification(
        'certificados/baseDeDatos/oracle_ads.png',
        'Oracle ADS: análisis de datos en la nube',
        'Análisis de datos con Oracle',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/a2f25702-9e7c-46b5-8fea-7591820d9a46',
        'Este curso me introdujo al ambiente Oracle y al análisis de datos en la nube. Aprendí a conocer los datos, trabajar con los datos, definir el alcance del proyecto, y prepararme para Machine Learning.'
    );

    addCertification(
        'certificados/baseDeDatos/machine_learning_3.png',
        'Machine Learning con Oracle ADS: productividad en la creación de modelos',
        'Creación de modelos con Oracle',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/0707df70-59c7-4e97-93e7-ea076b70806e',
        'En este curso, aprendí a crear modelos en Oracle Cloud, explorar Oracle AutoML, evaluar el modelo, entender el modelo, y publicar el modelo.'
    );

    addCertification(
        'certificados/baseDeDatos/Oracle_analytics.png',
        'Oracle Analytics: visualizando datos',
        'Visualización de datos con Oracle',
        'BaseDeDatos',
        'https://app.aluracursos.com/certificate/d4132334-8bd7-45d8-9b22-2609f2a70963',
        'Este curso me enseñó a visualizar datos con Oracle Analytics. Aprendí a crear el proyecto, crear gráficas, interactuar entre las visualizaciones, y elaborar la presentación.'
    );

    // Negocios
    addCertification(
        'certificados/negocios/Business_Agility_G5.png', 
        'Business Agility G5 - ONE',
        'Fundamentos, Gestión y Organización Agiles', 
        'Negocios', 
        'https://app.aluracursos.com/degree/certificate/70916367-01c3-4e54-9601-f4e4c62b0df3',
        'La formación Business Agility G5 - ONE, se divide en dos áreas claves: Fundamentos y Gestión y Organización Agiles. En la primera etapa, comprendí cómo responder a cambios y adaptarme a nuevas circunstancias, tanto en el ámbito personal como profesional. En la segunda etapa, aprendí a gestionar y organizar proyectos con metodologías agiles, como Scrum y Kanban, para mejorar la eficiencia y la efectividad en mi entorno laboral. Esta formación me ha proporcionado las habilidades necesarias para adaptarme a los desafíos dinámicos del mundo empresarial moderno.'
    );

    addCertification(
        'certificados/negocios/Emprendimiento.png', 
        'Emprendimiento G5 - ONE', 
        'Lean Startup, Pitch para entrevistas, Business Model Canvas', 
        'Negocios', 
        'https://app.aluracursos.com/degree/certificate/16e46f5e-78cd-4ab5-84ea-0e97ee2e9b0f',
        'Como parte de mi formación Emprendimiento G5 - ONE, comencé con el curso de Lean Startup, que me proporcionó un método eficaz para convertir una idea de negocio en una empresa. Luego, el curso de Emprendimiento me guió desde la concepción de una idea hasta la creación de un plan de negocios sólido. El curso de Pitch para entrevistas me dotó de las habilidades necesarias para hacer presentaciones impactantes. Finalmente, los cursos de Business Model Canvas parte I y II me ofrecieron un modelo poderoso para mi negocio y me ayudaron a avanzar con mi modelo de negocios.'
    );

    addCertification(
        'certificados/negocios/fundamentos_agile.png',
        'Fundamentos de Agilidad: Primeros pasos para la transformación ágil',
        'Transformación ágil',
        'Negocios',
        'https://app.aluracursos.com/certificate/0d800e79-9663-4333-880d-58a5bcdbaece',
        'En este curso, aprendí los fundamentos de la agilidad, incluyendo el método ágil, el método cascada, la priorización, el flujo de ejecución, y la retroalimentación. Completé 26 actividades, adquiriendo una comprensión sólida de lo que significa ser ágil.'
    );
    
    addCertification(
        'certificados/negocios/gestion_agile.png',
        'Gestión ágil: Liderando el cambio en un ambiente de agilidad',
        'Liderazgo ágil',
        'Negocios',
        'https://app.aluracursos.com/certificate/5d2fcfbb-abe2-4210-81bb-1d83501b9e44',
        'Este curso me proporcionó una visión profunda de la gestión ágil, cubriendo temas como la gestión tradicional, VUCA, motivación, liderazgo, empoderamiento y delegación. Completé 37 actividades, desarrollando habilidades para liderar el cambio en un ambiente de agilidad.'
    );

    addCertification(
        'certificados/negocios/empresa_agile.png',
        'La Empresa Ágil: Introduciendo el Business Agility en las organizaciones',
        'Agilidad empresarial',
        'Negocios',
        'https://app.aluracursos.com/certificate/b5a740bd-a061-4254-8da8-5ea4e5e6a07f',
        'En este curso, exploré el concepto de Business Agility, aprendiendo a identificar la complejidad, entender la estructura organizacional, y enfocarme en la generación de valor. Completé 28 actividades, adquiriendo conocimientos sobre cómo una empresa aprende a ser ágil.'
    );

    addCertification(
        'certificados/negocios/organizacion_agile.png',
        'Organización de equipos ágiles: Las funciones existentes en un equipo',
        'Equipos ágiles',
        'Negocios',
        'https://app.aluracursos.com/certificate/0df55f9b-f8ac-41e5-a097-8aafa6257d61',
        'Este curso me enseñó sobre la organización de equipos ágiles, cubriendo temas como la autoorganización, los tipos de equipos ágiles, el equipo Scrum, el Product Owner, el Development Team, el Scrum Master, y los Equipos Kanban. Completé 34 actividades, aprendiendo sobre las funciones existentes en un equipo ágil.'
    );

    addCertification(
        'certificados/negocios/lean_startup.png',
        'Lean Startup: Método eficaz para convertir una idea de negocio en empresa',
        'Startup eficaz',
        'Negocios',
        'https://app.aluracursos.com/certificate/1965559b-452c-4fa7-a3f0-fd9a80685d43',
        'Este curso me enseñó el método Lean Startup, que es un enfoque eficaz para convertir una idea de negocio en una empresa. Aprendí sobre la experimentación rápida, el aprendizaje validado, las fases del MVP, cómo medir y pivotar, y cómo acelerar, crecer e innovar. También recibí recomendaciones para prototipar. Completé 29 actividades, desarrollando habilidades esenciales para el lanzamiento de una startup.'
    );

    addCertification(
        'certificados/negocios/emprendimiento_idea.png',
        'Emprendimiento: De la idea al plan de negocios',
        'Emprendimiento efectivo',
        'Negocios',
        'https://app.aluracursos.com/certificate/7632a596-19b1-4066-8ee5-a6c528d4ac4b',
        'En este curso, aprendí sobre los pilares del emprendimiento, cómo generar ideas y oportunidades, y cómo desarrollar un modelo de negocios. También me familiaricé con el Business Model Canvas y cómo elaborar un plan de negocios. Completé 35 actividades, adquiriendo una comprensión sólida del proceso de emprendimiento.'
    );

    // Paqueteria Office
    addCertification(
        'certificados/office/Excel_Avanzado.png', 
        'Certificación en Excel Avanzado por Microsoft', 
        'Formación en el uso avanzado de Microsoft Excel.', 
        'PaqueteríaOffice', 
        'https://attachments.office.net/owa/ecarbajalm1801%40alumno.ipn.mx/pdfprint.aspx?id=AAMkADgxOGZkYjA0LTdlOTktNDgxYS1iNDk2LWM5MmY1YzdhOWIzNABGAAAAAACMgb3M66HKSrGb2xJAPCnNBwBLQ4RGFgO%2BSrQi%2FM4Vyp9qAAAAAAEMAABLQ4RGFgO%2BSrQi%2FM4Vyp9qAAQnEo2AAAABEgAQAKHkdZ0sj7hJq8rg6%2BOgWGs%3D&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkU1RDJGMEY4REE5M0I2NzA5QzQzQTlFOEE2MTQzQzAzRDYyRjlBODAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI1ZEx3LU5xVHRuQ2NRNm5vcGhROEE5WXZtb0EifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiOTY0NGE3NWVmMzVkNGUxNWIxMzUwMGU5YzUzYzU3YWIiLCJzaWduaW5fc3RhdGUiOiJrbXNpIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEBmOTRiZjRkOS04MDk3LTQ3OTQtYWRmNi1hNTQ2NmNhMjg1NjMiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MzYyOTY5MTM3OTQ3NjNcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCI5NzM3ZmNkNS01YTA4LTQ0OTUtODk2Ni00YzcyNGM5N2IyYjJcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTQxNzI2NTY3MjMtMzkxOTMzOTM5Ni0yNzI2Mjg1MjAzLTE5MzIxMzU0XCJ9IiwibmJmIjoxNzIwMDU0MjcyLCJleHAiOjE3MjAwNTQ1NzIsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEBmOTRiZjRkOS04MDk3LTQ3OTQtYWRmNi1hNTQ2NmNhMjg1NjMiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudHMub2ZmaWNlLm5ldEBmOTRiZjRkOS04MDk3LTQ3OTQtYWRmNi1hNTQ2NmNhMjg1NjMiLCJoYXBwIjoib3dhIn0.SCy-ZFqqOgsMHb4reoDyU_zSiwaGv_b-B1jVHsKiZtt3YqzsNBdoE_1PtuhQ5zNrXUoWqu0vKvu3Dtsx6ai-KwubPJS38dWgGY92kbhHsomra-8qDV9wzKgKe1tpt9btEdgESpMrM9mb2o905mg8cNAv4LM_LRRSd8i9rZ4uFSvQaqofCoWQ1oZ05og86zE_LBO6drD79LwfB3wWOol4dGc5ww3WJrZ3UN9cVH3dP3AWxKIXtXYZJ8wBH_psI6dwIi0pUtJSLKtb9iaFmRNPOic8LulJ3g1EQxpSiF1oXvbY2J4Grkrh3R2YSCa7SDAtoTsFvF3-p5xBzhhL9bfriw&X-OWA-CANARY=bdvoVxYwgioAAAAAAAAAAMDLYXfDm9wYTo7iVlCnTvnchE7v-8LNGGZoWlZFgaBJ68EGintWfrk.&owa=outlook.office.com&scriptVer=20240614008.17&clientId=90FBFCB7EB14476CAB772F2DE652DD46&animation=true', 
        'Este curso abarcó desde conceptos básicos hasta funciones avanzadas de Microsoft Office, incluyendo Word, Excel y PowerPoint.'
    );

    // Idiomas
    addCertification(
        'certificados/idiomas/Ingles_elemental.png', 
        'Basic English 1: Elementary', 
        'Certificación en idioma ingles por Kings College London', 
        'Idiomas', 
        'https://www.futurelearn.com/certificates/9ssctoi', 
        'Este certificado valida habilidades en un ingles basico incluyendo lectura, escritura, escucha y habla.'
    );

    addCertification(
        'certificados/idiomas/Ingles_pre_intermedio.png', 
        'Basic English 2: Pre-Intermediate', 
        'Certificación en idioma ingles por Kings College London', 
        'Idiomas', 
        'https://www.futurelearn.com/certificates/2xaz8el', 
        'Este certificado valida habilidades en un ingles intermedio incluyendo lectura, escritura, escucha y habla.'
    );

    // Soft Skills
    addCertification(
        'certificados/softSkills/Desarrollo_personal_G5.png', 
        'Formación Desarrollo Personal G5 - ONE', 
        'Desarrollo de habilidades blandas esenciales en el ámbito laboral.', 
        'SoftSkills', 
        'https://app.aluracursos.com/degree/certificate/7c073fe0-7fa4-406e-afac-f13eca33f007?lang', 
        'Este curso se centró en habilidades como comunicación efectiva, trabajo en equipo, resolución de problemas y liderazgo.'
    );

    addCertification(
        'certificados/softSkills/aprender_a_aprender.png', 
        'Aprender a aprender: tecnicas para tu autodesarrollo', 
        'Autodesarrollo efectivo', 
        'SoftSkills', 
        'https://app.aluracursos.com/certificate/84b63011-94ad-48f3-8eff-cd6a16df9e3f', 
        'En este curso, adopté el aprendizaje como un estilo de vida, explorando temas como el talento, la disciplina, el poder de las metas y la rutina de aprendizaje. Completé 61 actividades, demostrando un compromiso total con mi autodesarrollo.'
    );

    addCertification(
        'certificados/softSkills/desarrollo_carrera.png', 
        'Desarrollo de carrera: demanda del mercado', 
        'Carrera y mercado', 
        'SoftSkills', 
        'https://app.aluracursos.com/certificate/1a49d838-0556-4fb8-b059-01fb2b81038c', 
        'Este curso me ayudó a entender la demanda del mercado en relación con mi carrera profesional. A través de 33 actividades, aprendí sobre la medición del rendimiento, las motivaciones, los valores y las demandas del mercado.'
    );

    addCertification(
        'certificados/softSkills/foco.png', 
        'Foco: Enfocarse trae más resultados para el día a día', 
        'Enfoque diario', 
        'SoftSkills', 
        'https://app.aluracursos.com/certificate/0bee1878-14ff-4a02-8043-4f984cb8cb15', 
        'Este curso me enseñó la importancia de mantener el enfoque en mis actividades diarias. Aprendí sobre la ilusión de ser multitarea, las creencias, la fuerza de voluntad y el equilibrio en la vida.'
    );

    addCertification(
        'certificados/softSkills/habitos.png', 
        'Hábitos: Ser productivo para cumplir sus metas personales', 
        'Productividad y hábitos', 
        'SoftSkills', 
        'https://app.aluracursos.com/certificate/d1d247e2-e422-4a2f-9e58-f47c4f3cee20', 
        'En este curso, aprendí a reconocer mis hábitos y cómo pueden afectar mi productividad. También aprendí sobre la autodisciplina y cómo deshacerme de los viejos hábitos.'
    );

    addCertification(
        'certificados/softSkills/pitch.png', 
        'Presentaciones impactantes', 
        'Haga presentaciones impactantes para impresionar', 
        'SoftSkills', 
        'https://app.aluracursos.com/certificate/ed82b410-4901-449f-859f-7400acb1a195', 
        'Este curso me enseñó a hacer presentaciones impactantes para entrevistas. Aprendí a crear un discurso, a escribir mi pitch y a analizarlo.'
    );

    addCertification(
        'certificados/softSkills/linkedin.png', 
        'LinkedIn: Como hacer que tu perfil trabaje por ti', 
        'Perfil de LinkedIn', 
        'SoftSkills', 
        'https://app.aluracursos.com/certificate/4e75a9c1-e477-4308-90f0-4c4ba0bf65da', 
        'Este curso me enseñó a optimizar mi perfil de LinkedIn para que trabaje por mí. Aprendí sobre los diferentes tipos de perfiles, cómo hacer conexiones y cómo publicar contenido de calidad.'
    );

    // Otros
    addCertification(
        'certificados/otros/Lean_six_sigma.png', 
        'Certificación en White Belt Lean Six-Sigma', 
        'Certificación en un campo específico fuera de las categorías anteriores.', 
        'Otros', 
        'https://lean-certificates.s3.us-east-2.amazonaws.com/WBMASIVOOCT2022/certificado-Eduardo_Carbajal_Mendoza_1277.pdf', 
        'Este certificado reconoce competencias en un área especializada no incluida en las categorías anteriores.'
    );

    addCertification(
        'certificados/negocios/lean_startup.png',
        'Lean Startup: Método eficaz para convertir una idea de negocio en empresa',
        'Startup eficaz',
        'Otros',
        'https://app.aluracursos.com/certificate/1965559b-452c-4fa7-a3f0-fd9a80685d43',
        'Este curso me enseñó el método Lean Startup, que es un enfoque eficaz para convertir una idea de negocio en una empresa. Aprendí sobre la experimentación rápida, el aprendizaje validado, las fases del MVP, cómo medir y pivotar, y cómo acelerar, crecer e innovar. También recibí recomendaciones para prototipar. Completé 29 actividades, desarrollando habilidades esenciales para el lanzamiento de una startup.'
    );

    addCertification(
        'certificados/negocios/gestion_agile.png',
        'Gestión ágil: Liderando el cambio en un ambiente de agilidad',
        'Liderazgo ágil',
        'Otros',
        'https://app.aluracursos.com/certificate/5d2fcfbb-abe2-4210-81bb-1d83501b9e44',
        'Este curso me proporcionó una visión profunda de la gestión ágil, cubriendo temas como la gestión tradicional, VUCA, motivación, liderazgo, empoderamiento y delegación. Completé 37 actividades, desarrollando habilidades para liderar el cambio en un ambiente de agilidad.'
    );
});