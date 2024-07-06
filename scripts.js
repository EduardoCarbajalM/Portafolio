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
                <div class="card-buttons mt-auto">
                    <a href="${url}" target="_blank" class="btn btn-primary">Ver Certificado</a>
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
                            <span aria-hidden="true">&times;</span>
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

    // Otros
    addCertification(
        'certificados/otros/Lean_six_sigma.png', 
        'Certificación en White Belt Lean Six-Sigma', 
        'Certificación en un campo específico fuera de las categorías anteriores.', 
        'Otros', 
        'https://lean-certificates.s3.us-east-2.amazonaws.com/WBMASIVOOCT2022/certificado-Eduardo_Carbajal_Mendoza_1277.pdf', 
        'Este certificado reconoce competencias en un área especializada no incluida en las categorías anteriores.'
    );
});