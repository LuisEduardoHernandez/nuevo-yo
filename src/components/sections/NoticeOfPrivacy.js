import React from 'react'
import { Footer } from './Footer';
import { getImg } from '../../helpers/getImg'

export const NoticeOfPrivacy = () => {
    return (
        <body className="register-container">
            <header>
                <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <img src={getImg(`/nuevo-yo-isologo.png`)} className="img-fluid" alt="nuevo yo" />
                    </a>
                </div>
                </nav>
            </header>

            <main className="container mb-3">
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto text-white">
                        <h1>Aviso Legal &#38; Aviso de Privacidad</h1>

                        <h2>1. Aviso Legal</h2>

                        <p>
                        TERMINOS DE USO El objetivo del sitio web es presentarles las actividades de Novo Nordisk y el mismo se
                        encuentra disponible para su información, interés y educación. Los siguientes Términos de Uso, que podrán
                        ser modificados periódicamente, se aplicarán a todos los que accedan al sitio, como así también a su uso
                        y contenidos.
                        </p>

                        <ol>
                        <li>Objetivos de información</li>
                        <li>Información presentada “tal como está”</li>
                        <li>Responsabilidad</li>
                        <li>Vínculos con otros sitios web (links)</li>
                        <li>Modificaciones</li>
                        <li>Propiedad intelectual y uso del contenido</li>
                        <li>Privacidad y uso de preguntas y comentarios</li>
                        <li>Leyes vigentes</li>
                        </ol>

                        <h3>1. OBJETIVOS DE LA INFORMACION</h3>
                        <p>
                        El contenido presentado en el sitio de Novo Nordisk México S.A. de C.V. (en adelante, NOVO NORDISK) sólo tiene
                        por finalidad la comunicación. El sitio no provee consejos ni recomendaciones de ningún tipo y no deberá
                        utilizarse como base de cualquier decisión o acción. Se recomienda consultar a los profesionales idóneos del
                        campo correspondiente con respecto a la aplicabilidad de cualquier aspecto del contenido. En particular,
                        nada en este sitio constituye una invitación u oferta para invertir en bienes de NOVO NORDISK.
                        </p>

                        <p>
                        Además, el sitio presenta información seleccionada sobre enfermedades y su tratamiento. Tal información no
                        debe ser interpretada como un consejo médico y no reemplaza a la atención brindada por un profesional de
                        la salud. Si usted padece o sospecha padecer alguno de los problemas mencionados deberá consultar a su
                        médico de cabecera o a otro profesional calificado.
                        </p>

                        <h3>2. INFORMACION PRESENTADA “TAL COMO ESTA”</h3>
                        <p>
                        La información de este sitio se presenta “tal como está” y NOVO NORDISK no avala ni justifica lo que expresa o
                        implica, incluyendo las garantías de comercialización, la utilidad para un fin en particular o las
                        advertencias para la no-trasgresión, aunque sin limitarse a ellas. NOVO NORDISK no representa ni garantiza de
                        ninguna forma la integridad, exactitud, oportunidad, disponibilidad, funcionalidad y cumplimiento de las
                        leyes vigentes. Al utilizar este sitio usted acepta el riesgo de que la información sea incompleta o
                        inexacta o que no cubra sus necesidades o requerimientos.
                        </p>

                        <h3>3. RESPONSABILIDAD</h3>
                        <p>
                        NOVO NORDISK no se hace responsable de ningún daño o lesión originada de su acceso al sitio o por
                        imposibilidad de acceder a él o por confiar en cualquier información suministrada aquí. NOVO NORDISK
                        rechaza cualquier responsabilidad por daños directos, indirectos, accidentales, consecutivos, especiales
                        o de otro tipo, oportunidades y beneficios perdidos o cualquier otra pérdida o daño. Esta limitación
                        incluye daños o virus que puedan afectar a su equipo de computación.
                        </p>

                        <h3>4. VINCULOS CON OTROS SITIOS DE LA WEB</h3>
                        <p>
                        Cualquier vínculo con otro sitio de Internet se presenta para la mayor conveniencia del usuario. NOVO NORDISK
                        no tiene responsabilidad ni control sobre el contenido o la operación de tales sitios y no será responsable
                        por ningún daño o perjuicio surgido de ese contenido o de su operación.
                        </p>

                        <h3>5. MODIFICACIONES</h3>
                        <p>
                        NOVO NORDISK se reserva el derecho de alterar, modificar, reemplazar o borrar cualquier contenido, restringir
                        el acceso o suspender la distribución de este sitio en cualquier momento y bajo su exclusiva discreción.
                        </p>

                        <h3>6. Propiedad intelectual y uso del contenido</h3>
                        <p>
                        El contenido de este sitio es propiedad de NOVO NORDISK y se encuentra protegido por las leyes de la propiedad
                        intelectual. Las marcas registradas, comerciales y de servicios, como así también los logotipos y productos
                        mencionados en este sitio están legalmente protegidos en todo el mundo y no se podrá utilizar ninguno de ellos
                        sin el consentimiento previo y por escrito de NOVO NORDISK A/S. No obstante, es usted bienvenido a descargar
                        su contenido, sólo para uso personal, no comercial. No se autoriza ninguna modificación ni reproducción del
                        contenido y éste no podrá ser copiado ni utilizado de ninguna otra manera.
                        </p>

                        <h3>7. PRIVACIDAD Y PROTECCION DE DATOS</h3>
                        <p>
                        Cualquier pregunta, comentario, sugerencia o comunicación, incluyendo ideas, invenciones, conceptos, técnicas
                        o conocimientos prácticos, que usted desee enviar a este sitio o a NOVO NORDISK, electrónicamente o por otros
                        medios, no son confidenciales y serán propiedad de NOVO NORDISK, que podrá utilizarlos sin restricciones de
                        ningún tipo y en cualquier forma y para cualquier fin, incluyendo el desarrollo, elaboración y/o
                        comercialización de bienes o servicios.
                        </p>

                        <h4>a. Tipo de información con la que tratamos:</h4>

                        <p>
                        Alguna información es solicitada directamente al Usuario (los casos donde el Usuario voluntariamente completa
                        y nos envía cualquier tipo de formulario presentado en el sitio web).
                        </p>

                        <p>
                        Otra información, como la que se detalla a continuación, es recogida automáticamente (Navegación anónima
                        a través del sitio web):
                        </p>

                        <p>
                        * El nombre de dominio del proveedor (PSI) que les da acceso a la red. Por ejemplo, un Usuario del proveedor
                        xxxxx sólo estará identificado con el dominio xxxxx.mx. De esta manera podemos elaborar estadísticas sobre
                        los países y servidores que visitan más a menudo nuestro sitio web.
                        </p>

                        <p>
                        * La fecha y hora de acceso a nuestro web. Ello nos permite averiguar las horas de más afluencia, y hacer
                        los ajustes precisos para evitar problemas de saturación en las horas pico.
                        </p>

                        <p>
                        * La dirección de Internet desde la que partió el link que dirige a nuestro web. Gracias a este dato,
                        podemos conocer la efectividad de los distintos banners y enlaces que apuntan a nuestro servidor,
                        con el fin de potenciar los que ofrezcan mejores resultados.
                        </p>

                        <p>
                        * El número de visitantes diarios de cada sección. Ello nos permite conocer las áreas de más éxito y
                        aumentar y mejorar su contenido, con el fin de que los Usuarios obtengan un resultado más
                        satisfactorio.
                        </p>

                        <p>
                        Esta información obtenida es totalmente anónima, y en ningún caso puede ser asociada a un Usuario concreto e
                        identificado.
                        </p>

                        <h4>b. Navegación con Cookies:</h4>

                        <p>
                        La página del sitio web utiliza Cookies, pequeños ficheros de datos que se generan en el ordenador del Usuario
                        y que nos permiten obtener la siguiente información:
                        </p>

                        <p>
                        * La fecha y hora de la última vez que el Usuario visitó nuestro web. * El diseño de contenidos que el Usuario
                        escogió en su primera visita a nuestro web. * Elementos de seguridad que intervienen en el control de acceso
                        a las áreas restringidas.
                        </p>

                        <p>
                        De ninguna manera podemos obtener su dirección de correo electrónico, o información de su disco rígido, ni
                        transmitir un virus a través del uso de Cookies. El mismo es sólo a los fines que en esta normativa de
                        privacidad se detallan.
                        </p>

                        <p>
                        El Usuario puede borrar el almacenamiento de Cookies de su disco duro, y además tiene la opción de impedir la
                        generación de Cookies mediante la selección de la correspondiente opción en su programa navegador, aunque
                        deberá tener en cuenta que algunos sitios de Internet así como algunos contenidos del presente sitio web
                        pueden no funcionar correctamente.
                        </p>

                        <h4>c. Datos personales:</h4>

                        <p>
                        No se compartirá ningún dato de carácter personal con terceras partes sin el permiso explícito del Usuario,
                        excepto en caso de que la ley o alguna normativa legal nos lo solicitara. La información que obtenemos a
                        partir de sus visitas a nuestro sitio web la conserva NOVO NORDISK. Solamente podemos llegar a compartir con
                        terceros información generalizada para análisis estadísticos o demográficos del tipo “x% de los visitantes son
                        del sexo masculino”. Si necesitáramos compartir datos de carácter personal de los Usuarios solicitaremos
                        primero Su autorización. Si el Usuario nos autoriza, nos aseguraremos que las terceras partes con las que
                        compartamos Su información personal respeten estas Normas de Privacidad.
                        </p>

                        <p>
                        NOVO NORDISK no puede comercializar la información recogida a través del sitio web.
                        </p>

                        <p>
                        El Usuario consiente expresamente la cesión de información a nuestra empresa matriz NOVO NORDISK A/S, situada
                        en Dinamarca, únicamente con la finalidad de realizar el alojamiento de sus datos.
                        </p>

                        <p>
                        El Usuario responderá, en cualquier caso, de la veracidad de los datos facilitados, reservándose NOVO NORDISK
                        el derecho a excluir de los servicios registrados a todo Usuario que haya facilitado datos falsos, sin
                        perjuicio de las demás acciones que procedan en Derecho.
                        </p>

                        <p>
                        Por último, NOVO NORDISK informa sobre la posibilidad de ejercer los derechos de acceso, rectificación y
                        oposición de la información suministrada por el Usuario mediante petición escrita dirigida al departamento de
                        E-Bussiness: <a href="mailto:datospersonales@novonordisk.com"
                            className="text-white">datospersonales@novonordisk.com</a>
                        </p>

                        <h4>d. Información Legal:</h4>

                        <p>
                        El suministro de la información es facultativo por parte de los Usuarios y en caso de suministrarse la misma
                        será utilizada con el fin de conocer los intereses y necesidades del Usuario. Esta información que obtengamos
                        será utilizada internamente por Novo Nordisk A/S o alguna de sus filiales, ya sea con fines estadísticos, o
                        para poder mejorar la calidad de este sitio web, también para tener conocimiento de las necesidades de los
                        Usuarios y mejorar la calidad de nuestros productos. De ningún modo la información que el Usuario nos
                        suministre será utilizada de alguna otra manera que no esté indicada en estas Normas de Privacidad.
                        </p>

                        <h4>e. Protección de menores:</h4>

                        <p>
                        Respecto a aquella información que sea remitida por menores de edad (menos de 21 años), será requisito
                        imprescindible que el remitente haya obtenido previamente el consentimiento paterno, del tutor o del
                        representante legal para que los datos de carácter personal puedan ser objeto de tratamiento automatizado.
                        </p>

                        <p>
                        Si desea hacer preguntas sobre las Normas de Privacidad de NOVO NORDISK arriba mencionadas, por favor
                        contáctenos:
                        </p>

                        <p>
                        Correo electrónico: <a href="mailto:datospersonales@novonordisk.com"
                            className="text-white">datospersonales@novonordisk.com</a>
                        </p>

                        <h3>8. LEYES VIGENTES</h3>
                        <p>
                        Su acceso y uso de este sitio web y de su contenido será gobernado e interpretado de acuerdo a las leyes
                        vigentes de la República Mexicana.
                        </p>

                        <h2>2. Aviso de Privacidad</h2>

                        <p>
                        La privacidad es muy importante para Novo Nordisk México, S.A. de C.V. siempre nos esforzamos en proteger la
                        privacidad de los datos personales que recibimos de nuestros clientes, pacientes, colaboradores y otros, y los
                        utilizamos de una forma ética y acorde con las leyes de privacidad de datos, las regulaciones locales e
                        internacionales y a nuestra política de privacidad de datos.
                        </p>

                        <p>
                        Para Novo Nordisk México, S.A. de C.V., ubicada en Homero 1500, piso 3, Col. Polanco Chapultepec, Delegación
                        Miguel Hidalgo en la Ciudad de México, C.P. 11560, (en adelante “Novo Nordisk”) el tratamiento legítimo,
                        controlado e informado de sus datos personales es de vital importancia para alcanzar los objetivos
                        corporativos a través de todas las áreas del negocio y reiterar nuestro compromiso con la privacidad y su
                        derecho a la autodeterminación informativa.
                        </p>

                        <p>
                        El presente Aviso de Privacidad tiene como objeto informarle sobre el tratamiento que se le dará a sus datos
                        personales cuando los mismos son solicitados, recabados, utilizados, almacenados y/o transferidos por Novo
                        Nordisk, lo cual se lleva a cabo de conformidad con las disposiciones de la Ley Federal de Protección de Datos
                        Personales en Posesión de los Particulares (en adelante la “Ley”).
                        </p>

                        <p>
                        Datos de identificación como: nombre, domicilio, teléfono, correo electrónico, CURP, fecha de nacimiento,
                        edad, nacionalidad, imagen, fotografía, país de residencia, número de seguridad social, forma de contacto
                        preferida, dirección de protocolo de Internet o número único de identificación de su dispositivo,
                        localización.
                        <br/>
                        Datos laborales como: Puesto, domicilio laboral, correo electrónico, teléfono, contrato corporativo, nombre
                        del empleador.
                        <br/>
                        Datos de educación como: Trayectoria educativa, título, número de cédula profesional, especialidad, tipos de
                        práctica, certificados de estudios.
                        <br/>
                        Datos de salud como: Estado de salud, historial clínico, enfermedades o padecimientos, información respecto a
                        los productos de Bayer que adquiere, fecha de inicio y fin de tratamientos, esquema de administración o uso,
                        tiempo indicado de administración o uso, registro de compras del producto, estudios sobre efectividad del
                        medicamento.
                        <br/>
                        Datos bancarios y de facturación como: Número de cuenta, CLABE, RFC, datos de facturación.
                        <br/>
                        Datos personales sensibles son aquellos datos que afectan la esfera más íntima del titular o cuya
                        utilización indebida puede dar origen a discriminación o conlleve un riesgo grave para el titular. Se
                        consideran sensibles aquellos datos que puedan revelar aspectos como: origen racial o étnico, estado de salud,
                        información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas,
                        preferencia sexual.
                        </p>

                        <h4>Datos de menores de edad.</h4>
                        <p>
                        En relación a los fines mencionados en este aviso de privacidad, cuando se trate de , menores de edad, o
                        personas declaradas judicialmente en estado de interdicción, será necesario el consentimiento expreso de su
                        tutor o Representante Legal.
                        </p>

                        <h3>USOS Y FINALIDADES DE LOS DATOS PERSONALES:</h3>
                        <p>
                        Los datos personales serán utilizados para uno o varios de los siguientes propósitos, de acuerdo con sus
                        preferencias
                        </p>

                        <p>
                        (i) Para proporcionarle actualizaciones medicas continuas y enviarle webinars o enviarle notificaciones sobre
                        información médica continua
                        </p>

                        <p>
                        (ii) Para realizar un intercambio de información científica y educativa
                        </p>

                        <p>
                        (iii) Para proporcionar información corporativa e información sobre productos de Novo Nordisk
                        </p>

                        <p>
                        (iv) Para cumplir con obligaciones de salud y otras obligaciones legales ante las autoridades sanitarias
                        </p>

                        <p>
                        (v) Para hacer reportes a las autoridades sanitarias, relativas a calidad y farmacovigilancia
                        </p>

                        <p>
                        (vi) Para la participación en programas de apoyo a pacientes, estudios de mercado, fines publicitarios y de
                        prospección comercial y,
                        </p>

                        <p>
                        (vii) Para registrarlo como proveedor/distribuidor/cliente, realizar pagos, y llevar a cabo facturación
                        </p>

                        <h3>TRANSFERENCIAS DE DATOS PERSONALES</h3>
                        <p>
                        Podemos mostrar o compartir sus datos a otras afiliadas de Novo Nordisk y acordamos hacerlo de acuerdo a
                        nuestra política interna de privacidad de datos y según las leyes y regulaciones vigentes sobre privacidad de
                        datos en México. Sus datos también podrán ser transferidos a terceros con los que Novo Nordisk pueda cumplir
                        con las finalidades descritas en él o los Avisos de Privacidad puestos a su disposición. Así Novo Nordisk
                        puede proveer servicios, marketing, investigación de mercado o para dar soporte técnico. Estas terceras partes
                        pueden estar localizadas en países que ofrecen diferentes niveles de protección, como por ejemplo los Estados
                        Unidos de Norteamérica.
                        </p>

                        <p>
                        La transferencia de datos a otras compañías del grupo U Novo Nordisk estará basado en las Reglas Corporativas
                        para Compartir (BCRs, en sus siglas en inglés) de Novo Nordisk, disponibles aquí, siempre observando los
                        principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y
                        responsabilidad previstos en la Ley. Asimismo, cuando Novo Nordisk comparta sus datos personales con
                        proveedores de servicios (terceros), lo hará basado en contratos de transferencia o en otros mecanismos
                        aprobados de transferencia previamente acordados entre Novo Nordisk y los terceros. Novo Nordisk hará todo lo
                        necesario para garantizar la protección de sus datos de conforma a las disposiciones establecidas por la Ley y
                        demás normatividad aplicable.
                        </p>

                        <h3>MEDIDAS DE SEGURIDAD</h3>
                        <p>
                        Novo Nordisk ha implementado y mantiene las medidas de seguridad, técnicas, administrativas y físicas,
                        necesarias para proteger sus datos personales y evitar su daño, pérdida, alteración, destrucción o el uso,
                        acceso o tratamiento no autorizado.
                        </p>

                        <p>
                        ¿Qué tecnologías de rastreo utilizamos en nuestro portal de Internet?
                        <br/>
                        Le informamos que en nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías a través
                        de las cuales es posible monitorear su comportamiento como usuario de Internet, así como brindarle un mejor
                        servicio y experiencia de usuario al navegar en nuestra página. Los datos personales que obtenemos de estas
                        tecnologías de rastreo son los siguientes: · Tipo de navegador y sistema operativo · Páginas de Internet
                        visitadas · Vínculos seguidos · La dirección IP · Sitios visitados antes de ingresar, mismos que utilizamos
                        para fines estadísticos y de monitoreo de calidad en el servicio. Asimismo, le informamos que compartiremos
                        estos datos con los terceros designados para brindar servicios del programa ya mencionados. informamos que en
                        nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías similares a través de la cual
                        sea posible monitorear su comportamiento en Internet.
                        </p>

                        <h3>DERECHOS ARCO</h3>
                        <p>
                        El titular de datos personales puede ejercitar los derechos de acceso, rectificación, cancelación y oposición
                        (derechos “ARCO”) respecto a sus datos personales. Asimismo, dicho titular puede limitar el uso o divulgación
                        de sus datos personales y revocar el consentimiento que haya otorgado.
                        </p>

                        <p>
                        Para poder hacer valer los derechos ARCO, es necesario que el Titular de los Datos Personales realice una
                        solicitud con los requisitos que se detallan a continuación o mediante el envío del “formato sugerido”
                        mediante las vías citadas adelante.
                        </p>

                        <p>
                        (i) el nombre y domicilio o correo electrónico del Titular para comunicarle la respuesta a su solicitud; (ii)
                        los identificación oficial del Titular, o en su caso, la representación legal de quien actúe en su nombre;
                        (iii) la descripción clara y precisa de los Datos Personales respecto de los que el Titular busca ejercer
                        alguno de los derechos antes mencionados; (iv) especificar claramente si la solicitud es de acceso,
                        rectificación, cancelación u oposición; (vi) el motivo de la solicitud; y (vii) las modificaciones a
                        realizarse en caso de que la solicitud sea para la rectificación de Datos Personales.
                        </p>

                        <p>
                        Esta solicitud deberá de hacerla llegar a Novo Nordisk por cualquiera de los siguientes medios:
                        </p>

                        <p>
                        Vía correo electrónico a la dirección <a href="mailto:datos.personales@novonordisk.com"
                            className="text-white">datos.personales@novonordisk.com</a>
                        <br/>
                        Vía correo postal y/o personalmente en las oficinas de Novo Nordisk México, S.A. de C.V., al domicilio que se
                        menciona en el presente aviso.
                        <br/>
                        El procedimiento que Novo Nordisk adoptará una vez que haya recibido la solicitud consta en lo siguiente: Hará
                        de su conocimiento en un plazo máximo de 20 (veinte) días naturales, contados a partir de la fecha en que haya
                        recibido la solicitud, la determinación adoptada, y en caso de que la misma resulte procedente, se hará
                        efectiva dentro de los 15 (quince) días naturales siguientes a la fecha en que se comunique su procedencia.
                        </p>

                        <h3>DE LAS MODIFICACIONES AL AVISO DE PRIVACIDAD</h3>
                        <p>
                        El presente Aviso de Privacidad podrá ser modificado en cualquier momento. Ante algún cambio sustancial o
                        relevante mediante, será comunicado a través de nuestro sitio de internet <a
                            href="http://http://www.novonordisk.com.mx/" target="_blank" rel="noopener noreferrer"
                            className="text-white">http://www.novonordisk.com.mx/</a>
                        </p>

                        <h3>INFORMACIÓN PARA REPORTAR UN EVENTO ADVERSO</h3>
                        <p>
                        En relación al reporte de eventos adversos que regulatoriamente estamos obligados a documentar y a rendir,
                        recabaremos los siguientes datos, no siendo necesario recolectar su consentimiento expreso:
                        </p>

                        <p>1. Un dato demográfico del paciente, basta con mencionar si es hombre o mujer, sexo, edad o iniciales;</p>

                        <p>2. Un evento adverso; es decir, descripción de los signos y síntomas presentado por el paciente.</p>

                        <p>3. Un medicamento, en este caso el paciente tiene que estar tomando un medicamento de Novo Nordisk;</p>

                        <p>
                        4. Un informante, es decir, la persona que nos está informando del evento, esta persona tiene que
                        identificarse con nombre y datos de contacto, que puede ser un número de teléfono, correo electrónico o
                        dirección.
                        </p>

                        <h3>DE LA ACEPTACIÓN DE LOS TÉRMINOS</h3>
                        <p>
                        En virtud del presente documento, usted manifiesta su consentimiento para el tratamiento de los datos
                        personales proporcionados, de acuerdo a los términos y condiciones del presente Aviso de Privacidad puesto a
                        su disposición.
                        </p>

                        <p>
                        Si usted desea ejercer sus derechos ARCO o para cualquier otra cuestión, contacte con nuestro responsable de
                        privacidad de Datos (“Data Privacy Officer”)
                        </p>

                        <p>
                        Contacto: Responsable de sitio web de Novo Nordisk México: <a href="mailto:novomexico@novonordisk.com"
                            className="text-white">novomexico@novonordisk.com</a>; Tel. <a href="tel:+525550026686" className="text-white">+52
                            (55) 5002
                            6686</a>
                        </p>

                        <p>Fecha última actualización 1º de octubre de 2018</p>

                        <p>
                        Acepta los términos que describe este Aviso de Privacidad y doy el consentimiento para que mi información,
                        datos personales y sensibles sean utilizados para los efectos establecidos en el presente aviso de privacidad.
                        </p>

                    </div>
                </div>
            </main>

            <Footer />

        </body>
    )
}
