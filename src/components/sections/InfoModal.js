import React, { useState } from 'react'
import { getImg } from '../../helpers/getImg'
import { Modal } from '../UI/Modal'
import useModal from '../../hooks/useModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

SwiperCore.use([Navigation, Pagination]);

export const InfoModal = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [multiModal, setMultiModal] = useState({});

    const handleShowModal = (section) => {
        openModal()
        setMultiModal({[section]: true})
    }

    return (
        <>
            <div id="nav-suffering" role="tabpanel" aria-labelledby="nav-suffering-tab">
                <div className="suffering-content border-bottom py-3">
                <h2 className="text-purple fw-bold pb-3">Padecimiento</h2>
                <div className="suffering-item-container">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={4}
                        navigation
                        pagination
                    >
                        <SwiperSlide>
                            <div className="suffering-item" onClick={()=>handleShowModal("mp1")}>
                                <img src={getImg(`padecimiento-04.png`)} alt="saxenda"/>
                                <p>1.- ¿Qué es la obesidad?</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#weightHealthModal"
                                onClick={()=>handleShowModal("mp2")}
                            >
                                <img src={getImg(`padecimiento-02.jpg`)} alt="saxenda"/>
                                <p>2.- Peso y salud</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#chronicObesity"
                                onClick={()=>handleShowModal("mp3")}
                            >
                                <img src={getImg(`padecimiento-03.jpeg`)} alt="saxenda"/>
                                <p>3.- Obesidad una enfermedad crónica</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="suffering-item" onClick={()=>handleShowModal("mp4")}>
                                <img src={getImg(`padecimiento-01.jpg`)} alt="saxenda"/>
                                <p>4.- Obesidad y COVID-19</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="suffering-item" onClick={()=>handleShowModal("mp5")}>
                                <img src={getImg(`padecimiento-01.jpg`)} alt="saxenda"/>
                                <p>5.- ¿Con qué profesional de la salud asistir?</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                </div>

                <div className="suffering-content border-bottom py-3">
                <h2 className="text-purple fw-bold pb-3">Reto emocional</h2>
                <div className="suffering-item-container">
                    <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#condition"
                        onClick={()=>handleShowModal("mr1")}
                    >
                        <img src={getImg(`reto-02.jpg`)} alt="saxenda"/>
                        <p>1. Aprendiendo a entender mi condición</p>
                    </div>
                    <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#promoteThink"
                        onClick={()=>handleShowModal("mr2")}
                    >
                        <img src={getImg(`reto-01.jpg`)} alt="saxenda"/>
                        <p>2.- Mi plan para promover pensamientos positivos</p>
                    </div>
                    <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#motivationModal"
                        onClick={()=>handleShowModal("mr3")}
                    >
                        <img src={getImg(`reto-03.jpg`)} alt="saxenda"/>
                        <p>3.- Fortaleciendo mi motivación</p>
                    </div>
                </div>
                </div>

                <div className="suffering-content py-3">
                <h2 className="text-purple fw-bold pb-3">Tratamiento</h2>
                <div className="suffering-item-container">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={4}
                        navigation
                        pagination
                    >
                        <SwiperSlide>
                            <div className="suffering-item" onClick={()=>handleShowModal("mt1")}>
                                <img src={getImg(`tratamiento-01.jpg`)} alt="saxenda"/>
                                <p>1. Mi guía para el control de peso a largo plazo</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#applicationModal"
                                onClick={()=>handleShowModal("mt2")}
                            >
                                <img src={getImg(`tratamiento-03.png`)} alt="saxenda"/>
                                <p>2. ¿Cómo aplicar instrucciones de la pluma?</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="suffering-item" onClick={()=>handleShowModal("mt3")}>
                                <img src={getImg(`tratamiento-02.jpg`)} alt="saxenda"/>
                                <p>3. Mis estrategias para gestionar situaciones sociales</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="suffering-item" onClick={()=>handleShowModal("mt4")}>
                                <img src={getImg(`tratamiento-04.png`)} alt="saxenda"/>
                                <p>4. Consejos para ser mas activos</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="suffering-item" onClick={()=>handleShowModal("mt5")}>
                                <img src={getImg(`tratamiento-01.jpg`)} alt="saxenda"/>
                                <p>5. Comida</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                </div>
            </div>

            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {multiModal.mp1 && (
                    <div id="obesityModal" tabindex="-1" aria-labelledby="obesityModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-obesity">
                            <h1 className="modal-title" id="obesityModalLabel">¿Qué es la obesidad?</h1>
                            <h2 className="modal-title">Es una enfermedad crónica…</h2>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-6">
                                    <p>
                                    La obesidad es una enfermedad crónica que requiere de un manejo médico multidisciplinario a largo
                                    plazo.
                                    Pero muchos aún creen que la obesidad es culpa de la persona que la padece debido a sus malos hábitos
                                    alimenticios y falta de actividad física. Esto genera un prejuicio hacia la persona afectada por la
                                    obesidad, lo que impacta en su vida diaria. Una de las muchas necesidades no cubiertas en la obesidad
                                    es
                                    la
                                    educación para superar estos prejuicios, permitiendo un tratamiento más efectivo de la enfermedad.
                                    </p>
                                    <h3>Impacto de la obesidad.</h3>
                                    <p>
                                    La obesidad se define como una acumulación de grasa anormal o excesiva que puede dañar la
                                    salud.<sub>1</sub>
                                    La manera más utilizada para medir y clasificar la obesidad es el Índice de Masa Corporal (IMC). El
                                    IMC se
                                    calcula dividiendo la masa corporal (peso) en kilogramos entre la estatura de la persona en metros
                                    elevada
                                    al cuadrado. Es sencillo y rápido de calcular en la clínica por lo que es una medición útil, pero no
                                    es
                                    perfecta debido a las variaciones en el género, raza/etnia, complexión corporal, etc. Se requiere una
                                    evaluación más completa para entender la situación clínica general de una persona con obesidad,
                                    incluyendo
                                    las posibles causas y las comorbilidades relacionadas. Por mucho tiempo se ha considerado a la
                                    obesidad
                                    como
                                    una condición médica que está al mismo nivel que la osteoporosis o la miopía. Pero en la actualidad,
                                    con
                                    una
                                    comprensión más completa de sus causas y efectos subyacentes, la obesidad se reconoce por las
                                    organizaciones
                                    de salud, como la Organización Mundial de la Salud (OMS) y la Asociación Médica Americana (AMA), como
                                    una
                                    enfermedad crónica que requiere de tratamiento a largo plazo. La AMA establece que la obesidad altera
                                    el
                                    funcionamiento normal, tiene signos o síntomas característicos y causa morbilidad, por lo que cumple
                                    con
                                    la
                                    definición de una enfermedad.<sub>1,2</sub>
                                    </p>
                                    <p>
                                    También se ha ido haciendo aparente que la obesidad es tan compleja que pudiera ser más apropiado
                                    referirse
                                    a las “obesidades” que son definidas por la fisiología y anatomía del cuerpo del paciente y, tal vez,
                                    por
                                    los perfiles moleculares o bioquímicos.<sub>3</sub>
                                    </p>
                                    <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                        1. World Health Organisation. Obesity: preventing and managing the global epidemic. World Health
                                        Organisation Geneva, Switzerland, 2000.
                                    </p>
                                    <p>
                                        2. American Medical Association Position Statement. Available at: www.ama-assn.org. Accessed
                                        November 3,
                                        2014.
                                    </p>
                                    <p>
                                        3. Blundell JE, Dulloo AG, Salvador J, Frühbeck G. Beyond BMI-phenotyping the obesities. Obesity
                                        Facts.
                                        2014;7:322-328.
                                    </p>
                                    <p>
                                        4. National Institute for Health and Care Excellence (NICE). Obesity: guidance on the prevention,
                                        identification, assessment and management of overweight and obesity in children and adults.
                                        <br />
                                        Available at: www.nice.org.uk/guidance/cg43. Accessed November5, 2014.
                                    </p>
                                    <p>
                                        5.World Health Organisation. Overweight and obesity. 2014 Available
                                        at:www.who.int/gho/ncd/risk_factors/overweight/en/. Accessed November 12,2014. Instituto Nacional de
                                        Salud
                                        Pública. Encuesta Nacional de Salud y Nutrición 2012. Evidencia para la poliíca pública en salud.
                                        Accessed: 8 December 2014.
                                        <br />
                                        Available from: www.ensanut.insp mx/analitcos/ObesidadAdultos.pdf
                                    </p>
                                    <p>130. ENSANUT2018: Reportes y restultados.</p>
                                    <p>131. 0ECD (2014), OECD Health Statistics 2014, forthcoming, www.oecd.org/health/health-data.</p>
                                    <p>
                                        132. Hurtado-López EF, Macías-Rosales R. [Focus of childhood obesity from pediatrics]. Rev Med Inst
                                        Mex
                                        Seguro Soc 2014;52 Suppl 1:5116-9. Spanish. PubMed PMID: 24866318
                                    </p>
                                    </blockquote>
                                </div>
                                <div className="col-6">
                                    <p>
                                    El definir a la obesidad como una enfermedad es relevante para su manejo por la comunidad médica.
                                    Actualmente es evidente que se requiere de un manejo a largo plazo, de intervención multidisciplinaria
                                    para
                                    mejorar los desenlaces de los pacientes. Sin embargo, aún mucha gente no cree que la obesidad es una
                                    enfermedad, lo cual debilita la motivación para ofrecer tratamiento y mantiene vivo el estigma.
                                    </p>
                                    <p>
                                    Es inconfundible el impacto que tiene la obesidad en la salud a nivel mundial, comenzando por la gran
                                    cantidad de personas afectadas. En el mundo, alrededor del 35% de los adultos de &gt;20 años de edad
                                    tenían
                                    sobrepeso en el 2008, y el 11% tenía obesidad. Estas tasas casi se han duplicado desde
                                    1980.<sub>5</sub>
                                    La
                                    obesidad infantil también es preocupante; alrededor del 23% de las personas entre 2 y 19 años de edad
                                    en
                                    países desarrollados e incluso 13% en países en desarrollo, tienen sobrepeso u obesidad.<sub>6</sub>
                                    </p>
                                    <p>
                                    En México, este problema es aún más grave. En la Encuesta Nacional de Salud y Nutrición del 2018, el
                                    75.2%
                                    de los adultos mayores de 20 años fueron reportados con obesidad o sobrepeso. En este mismo grupo,
                                    39.1%
                                    tenían sobrepeso y 36.1 % obesidad.<sub>130</sub>
                                    </p>
                                    <p>
                                    México ocupa el primer lugar en el mundo en obesidad infantil de acuerdo al reporte de 2010 de la
                                    Organización para la Cooperación y Desarrollo Económico (OCDE).<sub>131</sub> 4.5 millones de niños
                                    mexicanos tienen obesidad.<sub>132</sub>
                                    </p>
                                    <img src={getImg(`obesity.png`)} alt="PErsona femenina con mesa y silla" className="img-fluid"/>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mp2 && (
                    <div id="weightHealthModal" tabindex="-1" aria-labelledby="weightHealthModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-obesity">
                            <h1 className="modal-title" id="weightHealthModalLabel">Peso y salud</h1>
                            <h2 className="modal-title">Impacto de la pérdida de peso y el mantenimiento del peso</h2>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-12">
                                    <h3>El valor de la pérdida de peso del 10-15%.</h3>
                                    <p>
                                    Siempre es esencial consultar con su médico al momento de pensar en perder peso. La pérdida de peso
                                    puede
                                    reducir significativamente el riesgo de desarrollar complicaciones relacionadas con la obesidad.
                                    </p>
                                    <p>
                                    Algunas complicaciones son más sensibles a la pérdida de peso que otras y se ha visto que una pérdida
                                    de
                                    peso de tan solo el 5% tiene beneficios para la salud significativos y duraderos. Sin embargo, al
                                    aumentar
                                    la pérdida de peso, aumentan los beneficios para mejorar las complicaciones y se observan mejoras
                                    adicionales con una pérdida de peso del 10-15% o más. <sub>1-13</sub>
                                    </p>
                                    <h3>Mantenimiento del peso y su impacto en la salud</h3>
                                    <p>
                                    A continuación se muestra una descripción general que muestra la cantidad de pérdida de peso y el
                                    mantenimiento de la pérdida de peso que se necesita para mejorar algunas de las complicaciones
                                    relacionadas
                                    con el peso más prevalentes.<sub>5,14</sub>
                                    </p>
                                    <h3>CONSULTA A TU MÉDICO</h3>

                                    <table>
                                    <thead>
                                        <tr>
                                        <th>Posible impacto de la<br />obesidad</th>
                                        <th>Pérdida de<br />peso Objetivo</th>
                                        <th>Resultado<br />Esperado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Síndrome<br />Metabólico
                                        </td>
                                        <td rowspan="5" style={{backgroundColor: '#443280', color: 'white'}}>
                                            <p style={{transform: 'rotate(-90deg)'}}>Consulta a tu médico</p>
                                        </td>
                                        <td>Prevención diabetes tipo 2</td>
                                        </tr>
                                        <tr>
                                        <td>Diabetes<br />tipo 2</td>
                                        <td>Reducción en medicación<br />de diabetes</td>
                                        </tr>
                                        <tr>
                                        <td>Displidemia</td>
                                        <td>Decremento de<br />trigliceridos</td>
                                        </tr>
                                        <tr>
                                        <td>Hipertensión</td>
                                        <td>Decremento de presión<br />arterial</td>
                                        </tr>
                                        <tr>
                                        <td>NAFLD</td>
                                        <td>Reducción de lípidos e<br />inflamación</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            <blockquote>
                                <h4>REFERENCIAS</h4>
                                <p>
                                1. Knowler WC, Barrett-Connor E, Fowler SE, et al. Reduction in the incidence of type 2 diabetes with
                                lifestyle intervention or metformin. N Engl J Med. 2002;346:393-403.
                                </p>
                                <p>
                                2. Wing R, Lang W, Wadden TA, et al. Benefits of modest weight loss in improving cardiovascular risk
                                factors
                                in overweight and obese individuals with type 2 diabetes. Diabetes Care. 2011;34:1481-1486.
                                </p>
                                <p>
                                3. Dattilo AM and Kris-Etherton PM. Effects of weight reduction on blood lipids and lipoproteins: a
                                meta-analysis. Am J Clin Nutr. 1992;56:320-328.
                                </p>
                                <p>
                                4. Coggon D, Reading I, Croft P, et al. Knee osteoarthritis and obesity. Int J Obes Relat Metab Disord.
                                2001;25:622-627.
                                </p>
                                <p>
                                5. Christensen R, Bartels EM, Astrup A, et al. Effect of weight reduction in obese patients diagnosed with
                                knee osteoarthritis: a systematic review and meta-analysis. Ann Rheum Dis. 2007;66:433-439.
                                </p>
                                <p>
                                6. Zelber-Sagi S, Godos J and Salomone F. Lifestyle changes for the treatment of nonalcoholic fatty liver
                                disease: a review of observational studies and intervention trials. Therap Adv Gastroenterol.
                                2016;9:392-407.
                                </p>
                                <p>
                                7. Glass LM, Dickson RC, Anderson IC, et al. Total body weight loss of &gt;/= 10 % is associated with
                                improved
                                hepatic fibrosis in patients with nonalcoholic steatohepatitis. Dig Dis Sci. 2015;60:1024-1030.
                                </p>
                                <p>
                                8. Garvey W, Mechanick J, Brett E, et al. American Association of Clinical Endocrinologists and American
                                College of Endocrinology comprehensive clinical practice quidelines for medical care of patients with
                                obesity.
                                Endocr Pract. 2016; 22(Suppl 3):1-203.
                                </p>
                                <p>
                                9. Lean M. Leslie W, Barnes A, et al. Primary care-led weight management for remission of type 2 diabetes
                                (DiRECT): an open-label, cluster-randomised trial. Lancet. 2018; 391:541-551.
                                </p>
                                <p>
                                10. Benraoune F and Litwin S. Reductions in cardiovascular risk after bariatric surgery.
                                <br />
                                Curr Opin Cardiol. 2011; 26:555-561.
                                </p>
                                <p>
                                11. Sundström J, Bruze G, Ottosson J, et al. Weight loss and heart failure: A national study of gastric
                                bypass
                                surgery versus intensive lifestyle treatment. Circulation. 2017; 135:1577-1585.
                                </p>
                                <p>12. Look AHEAD Research Group. Lancet Diabetes Endocrinol. 2016; 4:913-921.</p>
                                <p>
                                13. Ryan D and Yockey S. Weight loss and improvement in comorbidity: Differences at 5%, 10%, 15%, and
                                over.
                                Curr Obes Rep. 2017; 6:187-194.
                                </p>
                                <p>
                                14. Schutz D. Busetto L. Dicker D. et al. European Practical and Patient-Centred Guidelines for Adult
                                Obesitv
                                Management in Primarv Care. Obes Facts. 2019:12:40-66.
                                </p>
                            </blockquote>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mp3 && (
                    <div id="chronicObesity" tabindex="-1" aria-labelledby="chronicObesityLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-03">
                            <h1 className="modal-title" id="chronicObesityLabel">Obesidad: una enfermedad crónica</h1>
                            <h2 className="modal-title">¿Qué factores influencian a la obesidad como una enfermedad?</h2>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-12">
                                    <p>
                                    La obesidad afecta a 650 millones de adultos en todo el mundo, lo que representa aproximadamente el
                                    13% de
                                    la población mundial.<sub>1</sub> Los profesionales de la salud, las organizaciones y las personas de
                                    todo
                                    el mundo la reconocen como una enfermedad crónica que requiere un tratamiento a largo
                                    plazo<sub>2-6</sub>.Conciencia, atención y tratamiento en Manejo de la obesidad - un estudio de
                                    observación
                                    internacional (ACTION I0) * encontró que el 68% de las personas con obesidad y el 88% de los
                                    profesionales
                                    de la salud creen que la obesidad es una enfermedad crónica.<sub>7</sub>
                                    </p>
                                    <p>
                                    Aunque tanto las personas con obesidad como los profesionales de la salud reconocen la obesidad como
                                    una
                                    enfermedad crónica, sigue estando infradiagnosticada y poco tratada: <sub>8-103</sub>
                                    </p>
                                    <p>
                                    Quizás una de las razones por las que la obesidad sigue siendo poco conocida, infradiagnosticada y
                                    tratada
                                    es que sus causas son multifactoriales. Estas causas pueden ser fisiológicas, psicológicas, genéticas,
                                    ambientales o socioeconómicas. Muchos de estos factores están fuera del control de un
                                    individuo.<sub>11,12</sub>
                                    </p>
                                    <h3>Ambiental</h3>
                                    <p>
                                    Muchos aspectos de nuestro entorno pueden contribuir al desarrollo de la obesidad, incluida la
                                    exposición a
                                    porciones de alimentos demasiado grandes, la falta de actividad física debido al uso elevado de
                                    pantallas y
                                    el fácil acceso a alimentos poco saludables<sub>13</sub>.
                                    </p>
                                    <h3>Genético</h3>
                                    <p>
                                    Algunas personas están genéticamente predispuestas a desarrollar obesidad, dependiendo de sus
                                    antecedentes
                                    familiares.<sub>13</sub>
                                    </p>
                                    <h3>Fisiológico</h3>
                                    <p>
                                    El balance energético es un mecanismo complejo regulado centralmente por el cerebro, con entrada de
                                    señales
                                    hormonales periféricas liberadas del tracto gastrointestinal, páncreas y tejido adiposo, que se
                                    integran
                                    para regular el apetito y el gasto energético<sub>14</sub>.
                                    </p>
                                    <h3>Psicológico</h3>
                                    <p>
                                    El estrés<sub>13</sub>, el aburrimiento<sub>13</sub> y los trastornos psicológicos<sub>15</sub> están
                                    relacionados con la sobrealimentación y pueden contribuir al desarrollo de la obesidad<sub>13,15</sub>
                                    </p>
                                    <h3>Socioeconómico</h3>
                                    <p>
                                    El lugar donde vive una persona, la sociedad en la que vive y sus ingresos también pueden influir en
                                    sus
                                    posibilidades de desarrollar obesidad<sub>12,16.</sub>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            <blockquote>
                                <h4>REFERENCIAS</h4>
                                <p>
                                1. World Health Organization. Obesity and Overweight Factsheet no. 311. Available at:
                                http://www.who.int/mediacentre/factsheets/fs311/en/.Last accessed: October 2020.
                                </p>
                                <p>
                                2. Mechanick]I, Garber Al and Garvey WT. American Association of Clinical Endocrinologists' Position
                                Statement
                                on Obesity and Obesity Medicine. Endocrine Practice. 2012;18:042-648.
                                </p>
                                <p>
                                3. Allison DB, Downey M, Atkinson L, et al. Obesity as a Disease: A White Paper on Evidence and Arguments
                                Commissioned by the Council of The Obesity Society. Obesity. 2008'16:1161-1177.
                                </p>
                                <p>
                                4. Frühbeck G, Sbraccia P and Nisoli E. 2015 Milan Declaration: A Call to Action on Obesity - an EASO
                                Position
                                Statement on the Occasion of the 2015 EXPO. Obesity Facts. 2016;9:296-298.
                                </p>
                                <p>
                                5. American Medical Association. AM.A Adopts New Policies on Second Day of Voting Annual Meeting. Obesity
                                as
                                Disease Available at:
                                http://news.cision.com/american-medical-association/r/ama-adopts-new-policies-on-second-day-of-voting-at-annual-meeting,c9430649.Lastaccessed:October2020.
                                </p>
                                <p>
                                6. Bray GA, Kim KK, Wilding JPH, et al. Obesity: a chronic relapsing progressive disease process. A
                                position
                                statement of the World Obesity Federation. Obes Rev. 2017;18:715-723.
                                </p>
                                <p>
                                7. Caterson ID, Alfadda AA, Auerbach P, et al. Gaps to bridge: Misalignment between perception, reality
                                and
                                actions in obesity. Diabetes Obesity Metab. 2019; 21:1914-1924
                                </p>
                                <p>
                                8. Colby Sl and Ortman JM. Projections of the Size and Composition of the U.S. Population: 2014 to 2060,
                                Current Population Reports, P25-1143, U.S. Census Bureau, Washington, DC, 2014. Available at:
                                https://www.census.gov/content/dam/Census/library/publications/2015/demo/p25-1143.pdf.Lastaccessed:October2020
                                </p>
                                <p>
                                9. Centers for Disease Control and Prevention. Obesity and Overweight. Available at:
                                https://www.cdc.gov/nchs/fastats/obesity-overweight.htm. Last updated on June 13, 2016. Last accessed:
                                October
                                2020.
                                </p>
                                <p>
                                10. Ma J, Xiao L, Stafford R. Adult Obesity and Office-based Quality of Care in the U.S. Obesity (Silver
                                Spring). 2009;17(5):1077-1085.
                                </p>
                                <p>11. Wright SM and Aronne LI. Causes of obesity. Abdominal imagina. 2012:37:730-732</p>
                                <p>
                                12. National Institutes of Health. Clinical Guidelines On The Identification, Evaluation, And Treatment Of
                                Overweight And Obesity In Adults. Available at: http://www.nhlbi.nih.gov/quidelines/obesity/ob_gdlns.pdf.
                                Last
                                accessed: October 2020.
                                </p>
                                <p>
                                13. NIH. What causes overweight and obesity? Available at:
                                https//www.nhlbi.nih.gov/health/health-topics/topics/obe/causes.Last accessed: October 2020.
                                </p>
                                <p>
                                14. Sumithran P. Prendergast LA, Delbridge É, et al. Long-term persistence of hormonal adaptations to
                                weight
                                loss. N Engl | Med. 2011;365:1597-1604.
                                </p>
                                <p>
                                15. Collins J and JE B. Behavioral and Psychological Factors in Obesity. The Journal of Lancaster General
                                Hospital. 2009;4:124-127.
                                </p>
                                <p>
                                16. Papel FC, Denney JT and PM K. Obesity, SES, and economic development: a test of the reserve
                                hypothesis.
                                Soc Sci Med. 2013;74:1073-1081.
                                </p>
                            </blockquote>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mp4 && (
                    <div id="covidObesity" tabindex="-1" aria-labelledby="covidObesityLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-04">
                            <h1 className="modal-title" id="covidObesityLabel">Obesidad y Covid-19</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-12">
                                    <p>
                                    La pandemia de COVID-19 en curso ha llevado los problemas relacionados con la obesidad a la conciencia
                                    pública. Estudios recientes destacan que las personas con obesidad tienen un mayor riesgo de
                                    desarrollar
                                    enfermedades más graves y complicaciones por COVID-19.1-4 Además, un estudio reciente sugiere que los
                                    pacientes más jóvenes, que también viven con obesidad, tienen más probabilidades de verse afectados
                                    por
                                    COVID- 19, especialmente en cuanto a ingresos en UCI5.
                                    </p>
                                    <h3>Riesgo de desarrollar COVID-19 más severo</h3>
                                    <p>
                                    Los datos preliminares sugieren que las personas con obesidad tienen un mayor riesgo de desarrollar
                                    COVID-19 grave. Los Centros para el Control y la Prevención de Enfermedades (CDC) de EE. UU. afirman
                                    que las
                                    personas de cualquier edad con ciertas afecciones médicas subyacentes tienen un mayor riesgo de
                                    contraer
                                    enfermedades graves por COVID-19, y estar hospitalizado e ingresado en unidades de cuidados
                                    intensivos<sub>2,5,7-10</sub>
                                    </p>
                                    <p>
                                    El 48,3% de las personas hospitalizadas por COVID-19 tenían un IMC ≥30 (kg / m2) 10 El IMC&gt;40 (kg /
                                    m2) fue
                                    el segundo predictor más fuerte de hospitalización, después de la edad:<sub>3</sub>
                                    </p>
                                    <p>
                                    Los pacientes con obesidad y COVID-19 tienen un mayor riesgo de mortalidad<sub>9</sub>Los estudios han
                                    demostrado que cada aumento de 1 unidad en el IMC se asoció con un aumento del 12% en el riesgo de
                                    COVID-19
                                    grave<sub>11</sub>En particular, la presencia de obesidad aumenta el riesgo de enfermedad grave
                                    aproximadamente tres veces con la consecuente estancia hospitalaria más prolongada.<sub>11</sub>
                                    </p>
                                    <h3>Mayor riesgo de otras complicaciones.</h3>
                                    <p>
                                    Los datos actuales sugieren que, por lo general, el COVID-19 puede provocar síntomas y complicaciones
                                    más
                                    graves en personas mayores de 65 años, 5,7 y en personas con otras afecciones crónicas de salud,
                                    incluidas
                                    las que viven con obesidad.<sub>3</sub>Sin embargo, en pacientes con COVID-19 menores de 65 años, la
                                    complicación más común es la obesidad.<sub>8</sub>Ya se sabe que la obesidad está asociada con otras
                                    complicaciones de salud, como enfermedades cardiovasculares, diabetes e hipertensión, que también se
                                    encuentran en poblaciones indicadas para tener un mayor riesgo de complicaciones más graves del
                                    COVID-19<sub>1,7,12-14</sub>
                                    </p>

                                    <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                        1. World Health Organisation. Information Note on COVID-19 and NCDs. 23 March 2020.
                                        https://www.who.int/teams/ncds/covid-19. Last accessed: October 2020.
                                    </p>
                                    <p>
                                        2. Naveed Sattar N, Mclnnes IB, McMurray JIV. Obesity a Risk Factor for Severe COVID-19 Infection:
                                        Multiple
                                        Potential Mechanisms. Circulation 22 April 2020. doi.org/10.1161/CIRCULATIONAHA.120.047659.
                                    </p>
                                    <p>
                                        3. Petrilli CM, Jones SA, Yang J, et al. Factors associated with hospitalization and critica illness
                                        among
                                        4,103 patients with COVID-19 disease in New York City. 2020; 2020.04.08.20057794. doi:
                                        10.1101/2020.04.08.20057794.</p>
                                    <p>
                                        4. Simonnet A, Chetboun M, Poissy J, et al. Intensive Care COVID-19 and Obesity study group. High
                                        prevalence
                                        of obesity in severe acute respiratory syndrome coronavirus-2 (SARS-CoV-2) requiring invasive
                                        mechanical
                                        ventilation. Obesity (Silver Spring) 9
                                        April 2020. doi: 10.1002/oby.22831. [epub ahead of print].
                                    </p>
                                    <p>
                                        5. Kass DA, Dugal P, Cingolani O. Obesity could shift severe COVID-19 disease to younger ages.
                                        Lancet.
                                        2020;395:1544-1545. DOI: https://doi.org/10.1016/50140-6736(20)31024-2.
                                    </p>
                                    <p>
                                        6. Stefan N, Birkenfeld AL, Schulze MB, et al. Obesity and impaired metabolic health in patients
                                        with
                                        COVID-19. Nat Rev Endocrinol 2020. https://doi.org/10.1038/541574-020-0364-6
                                    </p>
                                    <p>
                                        7. CDC. Groups at Higher Risk for Sever Illness.
                                        https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/groups-at-higher-risk.html. Last
                                        accessed:
                                        October 2020.
                                    </p>
                                    <p>
                                        8. CDC. ICNARC report on COVID-19 i critical care 31 July 2020. Available at:
                                        https://www.icnarc.org/DataServices/Attachments/Download/42ceb4d2-3dd3-ea11-9128-00505601089b Last
                                        accessed:
                                        October 2020.
                                    </p>
                                    <p>
                                        9. Williamson EJ, Walker AJ, Bhaskaran K, et al. Factors associated with COVID-19-related death
                                        using
                                        OpenSAFELY. Nature. 2020; 584:430-436.
                                    </p>
                                    <p>
                                        10. Garg S, Kim L, Whitaker M, et al. Hospitalization Rates and Characteristics of Patients
                                        Hospitalized with
                                        Laboratory-Confirmed Coronavirus Disease 2019 - COVID-NET, 14 States, March 1-30, 2020. MMWR Morb
                                        Mortal Wkly
                                        Rep. 2020; 69:458-464
                                    </p>
                                    <p>11. Gao F, Zheng KI, Wang XB, et al. Obesity Is a Risk Factor for Greater COVID-19 Severity.
                                        Diabetes Care.
                                        2020.</p>
                                    <p>
                                        12. WOF. Coronavirus (COVID-19) & Obesity. Available at:
                                        https://www.worldobesity.org/news/statement-coronavirus-covid-19-obesity.Last accessed: October
                                        2020.
                                    </p>
                                    <p>
                                        13. Ryan DH, Ravussin E, Heymsfield S. COVID 19 and the Patient with Obesity - The Editors Speak
                                        Out. Obesity
                                        2020;28:847-847. doi:10.1002/oby.22808.
                                    </p>
                                    <p>
                                        14. Lighter J, Phillips M, Hochman S, et al. Obesity in patients younger than 60 years is a risk
                                        factor for
                                        Covid-19 hospital admission. Clin Infect Dis April 9, 2020 doi: 10.1093/cid/ciaa415. [epub ahead of
                                        print].
                                    </p>
                                    <p>
                                        15. Dietz W and Santos-Burgoa C. Obesity and its Implications for COVID-19 Mortality. Obesity
                                        (Silver Spring).
                                        2020; 28:1005.
                                    </p>
                                    <p>
                                        16. Qingxian C, Fengjuan C, Fang L, et al. Obesity and COVID-19 Severity in a Designated Hospital in
                                        Shenzhen,
                                        China. SSRN Electronic Journal. 2020.
                                    </p>
                                    <p>
                                        17. The Lancet Diabetes and Endocrinology. COVID-19 and obesity-lack of clarity, guidance, and
                                        implications
                                        for care. Available at:
                                        https://www.thelancet.com/journals/landia/article/PIIS2213-8587(20)30156-X/fulltext.
                                        Last accessed: June 2020.
                                    </p>
                                    <p>
                                        18. Fruhbeck G, Baker JL, Busetto L, et al. European Association for the Study of Obesity Position
                                        Statement
                                        on the Global COVID-19 Pandemic. Obes Facts. 2020; 13:292-296.
                                    </p>
                                    <p>
                                        19. World Obesity Federation. Coronavirus (COVID-19) & Obesity.
                                        https://www.worldobesity.org/news/obesity-and-covid-19-policy-statement. Last accessed: October
                                        2020.
                                    </p>
                                    </blockquote>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mp5 && (
                    <div id="healthProfessional" tabindex="-1" aria-labelledby="healthProfessionalLabel"
                    aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-05">
                            <h1 className="modal-title" id="healthProfessionalLabel">¿Con qué profesional de la salud asistir?</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-6">
                                    <p>
                                    Los tipos de médicos que proveen atención para la obesidad pueden incluir a médicos generales,
                                    endocrinólogos/diabetólogos, especialistas en medicina interna (internistas o MI),
                                    dietistas/nutriólogos,
                                    bariatras, cardiólogos y ginecólogos. Los miembros de cualquiera de estos grupos pueden ser
                                    clasificados
                                    como un especialista en obesidad. Las enfermeras y psicólogos también pueden ser parte del manejo de
                                    la
                                    obesidad.<sub>66</sub>
                                    </p>
                                    <p>
                                    Los médicos generales tratan todo tipo de enfermedades. Su función identificar a los pacientes que ya
                                    están
                                    listos para una terapia de manejo integral del peso y pueden referir estos pacientes a un
                                    especialista.
                                    También pueden tener una función de apoyo después de que un paciente ha tenido un periodo de pérdida
                                    de peso
                                    intenso bajo el cuidado de un especialista y mantener satisfactoriamente la pérdida con el tiempo y,
                                    por lo
                                    tanto, pueden sentir que ya no es necesario seguir viendo al especialista. Sin embargo, algunos
                                    médicos
                                    generales que tengan un interés especial en manejar la obesidad pueden principal es como examinadores
                                    del
                                    paciente; es decir, pueden considerarse como especialistas en obesidad.
                                    </p>
                                    <p>
                                    Los endocrinólogos son especialistas entrenados para tratar enfermedades relacionadas con las hormonas
                                    y el
                                    metabolismo. El metabolismo y el apetito son controlados por las hormonas, por lo que muchos
                                    endocrinólogos
                                    están involucrados en el manejo del peso.
                                    <br />
                                    Los especialistas en medicina interna (MI) son aquellos que se especializan en identificar, prevenir y
                                    tratar enfermedades en los adultos. Debido a la alta prevalencia de obesidad y las muchas
                                    enfermedades que se relacionan con ésta, un número significativo de
                                    MIs ha tomado interés en el manejo de la obesidad y podrían
                                    considerarse como especialistas en obesidad.
                                    </p>
                                    <p>
                                    Los dietistas/nutriólogos son profesionales de la salud expertos en la alimentación sana y cambios
                                    específicos en la dieta que las personas con obesidad y con otras enfermedades (por ejemplo,
                                    enfermedades
                                    renales o cardíacas) deben usar para manejar de forma segura su condición, incluyendo la pérdida de
                                    peso y
                                    mantener la pérdida.
                                    </p>
                                </div>

                                <div className="col-6">
                                    <p>
                                    Los bariatras son especialistas que tienen educación específica en el manejo del peso y medicina de la
                                    obesidad. Pueden dar un cuidado integral usando un amplio espectro de herramientas de tratamiento. El
                                    bariatra clínico puede ofrecer una terapia de cambios en el estilo de vida, farmacológica y conductual
                                    dependiendo de su experiencia. El bariatra quirúrgico, adicional de lo descrito anteriormente, puede
                                    ofrecer
                                    una terapia que incluye cirugía. En algunos países, los cardiólogos son un grupo abundante de
                                    especialistas
                                    que trabajan con la obesidad. Esto se debe a que el riesgo de enfermedad cardiovascular es
                                    significativamente alto en presencia de obesidad, por lo que muchos pacientes de un cardiólogo serán
                                    afectados por el sobrepeso u obesidad.
                                    </p>
                                    <p>
                                    Algunos cardiólogos han tomado interés en ayudar de forma efectiva a las personas en el manejo de su
                                    peso
                                    para reducir el riesgo cardiovascular relacionado con la obesidad. Los ginecólogos son especialistas
                                    en la
                                    salud del sistema reproductivo femenino. Estos especialistas pueden manejar la obesidad en relación
                                    con los
                                    problemas femeninos de salud y tratamientos de fertilidad.
                                    </p>
                                    <p>
                                    Los miembros de estos grupos de médicos, y otros, pueden ser especialistas en obesidad. El término
                                    “especialista en obesidad” define a los médicos que cumplen con los siguientes criterios:
                                    </p>
                                    <ul className="pl-6 text-blue-cyan">
                                    <li>Ocupan &gt;20% del tiempo de su práctica profesional en el manejo de la obesidad</li>
                                    <li>Son considerados por otros médicos como especialistas en obesidad y tienen pacientes regularmente
                                        referidos a ellos para el manejo del peso</li>
                                    <li>Han recibido educación médica en medicina bariátrica, son miembros de colegios de bariatras u
                                        obesidad,
                                        ejercen en una clínica de control de peso o tienen un grado adicional en nutrición</li>
                                    </ul>
                                    <p>
                                    Por lo que la definición general de un especialista en obesidad será un médico que ocupe una parte
                                    importante de su tiempo en trabajar en el manejo de la obesidad, tiene una educación apropiada y tiene
                                    pacientes referidos a él/ella como un especialista.<sub>67</sub>
                                    </p>
                                </div>

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    66. Bardia A, Holtan SG, Slezak JM, Thompson WG. Diagnosis of obesity by primary care physicians and
                                    impact on
                                    obesity management. Mayo Clinic Proceedings. 2007;82:927-932.
                                    </p>
                                    <p>
                                    67. International Diabetes Federation (IDF). 2005. The IDF consensus worldwide definition of
                                    themetabolic
                                    syndrome. Available at: http://www.idf.org/webdata/docs/MetSyndrome_FINAL.pdf
                                    Accessed January 8, 2015
                                    </p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mr1 && (
                    <div id="condition" tabindex="-1" aria-labelledby="conditionLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-04">
                            <h1 className="modal-title" id="conditionLabel">Aprendiendo a entender mi condición</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-12 col-md-3">
                                    <img src={getImg(`woman-condition.png`)} className="img-fluidv" alt="Persona femenina"/>
                                </div>

                                <div className="col-12 col-md-9">
                                    <h3 style={{color: '#1E72B9'}}>Razones por las que puedo necesitar cambiar la forma en que veo y manejo mi
                                    condición.</h3>
                                    <div className="condition-modal-li">
                                    <img src={getImg(`condition-li-01.jpeg`)} alt="icon-condition" />
                                    <p>
                                        Muchas personas creen que perder peso y mantenerlo es sobre lo que come y cuánto ejercicio hace, y
                                        que la fuerte fuerza de voluntad determina el éxito.
                                    </p>
                                    </div>
                                    <div className="condition-modal-li">
                                    <img src={getImg(`condition-li-02.jpeg`)} alt="icon-condition" />
                                    <p>
                                        La realidad es que la obesidad es una enfermedad crónica y compleja causada por múltiples factores,
                                        incluidos el medio ambiente, los genes, la salud emocional o incluso la falta de sueño. La lucha con
                                        el peso es real y no solo es sobre la fuerza de voluntad<sub>7</sub>.
                                    </p>
                                    </div>
                                    <div className="condition-modal-li">
                                    <img src={getImg(`condition-li-03.jpeg`)} alt="icon-condition" />
                                    <p>
                                        Al igual que para controlar otras afecciones crónicas, como las enfermedades cardiovasculares y la
                                        diabetes, el manejo de la obesidad a menudo requiere una combinación de diferentes enfoques para
                                        apoyar una estrategia a largo plazo para reducir el peso corporal, prevenir la recuperación de peso
                                        y mejorar las complicaciones y la salud en general<sub>3</sub>.
                                    </p>
                                    </div>
                                    <div className="condition-modal-li">
                                    <img src={getImg(`condition-li-04.jpeg`)} alt="icon-condition" />
                                    <p>
                                        Usted y su médico ahora han decidido hacer Liraglutida parte de su plan de control de peso.
                                        Liraglutida, un medicamento para el control del peso, funciona de manera similar a una hormona
                                        reguladora del apetito natural llamada GLP-1. Esto puede ayudarlo a comer menos alimentos y reducir
                                        su peso corporal. Puede que haya baches en el camino, pero con Liraglutida no está
                                        solo<sub>10</sub>.
                                    </p>
                                    </div>
                                    <div className="condition-modal-li">
                                    <img src={getImg(`condition-li-05.jpeg`)} alt="icon-condition" />
                                    <p>
                                        NuevoYo® es un programa de control de peso estructurado y conductual que lo ayudará a pensar y
                                        actuar de manera diferente, para lograr un peso más saludable y sustentable mientras sigue viviendo
                                        una vida que pueda disfrutar.
                                    </p>
                                    </div>
                                </div>

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    3. G. Bray et al. World Obesity Federation position Statement. 715-723, July 2017.
                                    Doi:10.1111/Obr.12551
                                    </p>
                                    <p>
                                    7. F. Xaviar Pi-Suyer, M.D., M.P.H, William H M.D., Ph.D, et al. NHLBI Obesity Education Iniatiative
                                    Expert
                                    Panel on the identificaction, Evaluation, and treatment of overweight and Obesity in Adults.
                                    No.98-4083.
                                    </p>
                                    <p>
                                    10. Priya Sumithran and Joshep Pruietto. The defence of body weight: a physiological basis for weight
                                    regain
                                    after weight loss. Clinical Science (2013) 124, 231-241 (Printed in Great Britain) Doi:
                                    10.1042/cs20120223.
                                    </p>
                                    <p></p>
                                    <p></p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mr2 && (
                    <div id="promoteThink" tabindex="-1" aria-labelledby="promoteThinkLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-04">
                            <h1 className="modal-title" id="promoteThinkLabel">Mi plan para promover pensamientos positivos</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-12">
                                    <p>
                                    La salud mental es un factor importante en un viaje exitoso para perder peso. Reconocer cuándo se está
                                    llevando a cabo una alimentación emocional, y conocer expectativas poco realistas puede ser un
                                    desencadenante para el desaliento y los pensamientos insensibles que también son factores importantes.
                                    </p>
                                    <p>
                                    En la siguiente sección, identifique sus metas y motivaciones personales, así como abordar algunos
                                    pensamientos
                                    negativos que puede encontrar a menudo. Al igual que con la última actividad, será útil tener a un
                                    amigo o familiar con usted. Considere tomar un café y discutir estas preguntas más a
                                    fondo<sub>5</sub>.
                                    </p>
                                    <p>
                                    Le invitamos a que reflexione sobre:
                                    </p>
                                </div>

                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{width: '49%'}} className="plan-container-item">
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`plan-01.jpeg`)} alt="plan-icon" />
                                        <div>
                                        <p>Pensamientos inútiles con los que a menudo lucho:</p>
                                        <p>..................................................................................</p>
                                        <p>..................................................................................</p>
                                        <p>..................................................................................</p>
                                        </div>
                                    </div>
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`plan-02.jpeg`)} alt="plan-icon" />
                                        <div>
                                        <p>¿Hay algún hecho que sugiera que mi pensamiento podría no ser 100% verdadero?</p>
                                        <p>..................................................................................</p>
                                        <p>..................................................................................</p>
                                        <p>..................................................................................</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div style={{width: '49%'}} className="plan-container-item">
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`plan-03.jpeg`)} alt="plan-icon" />
                                        <div>
                                        <p>¿Cuál es mi patrón de pensamiento?</p>
                                        <p>..................................................................................</p>
                                        <p>..................................................................................</p>
                                        <p>..................................................................................</p>
                                        </div>
                                    </div>
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`plan-04.jpeg`)} alt="plan-icon" />
                                        <div>
                                        <p>¿Qué puedo hacer al respecto?</p>
                                        <p>..................................................................................</p>
                                        <p>..................................................................................</p>
                                        <p>..................................................................................</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    Kevin D. Hall, et al. Maintenance of lost weight and long.term management of Obesity. Med Clin N Am
                                    102 (2018) 183-197
                                    </p>
                                    <p></p>
                                    <p></p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mr3 && (
                    <div id="motivationModal" tabindex="-1" aria-labelledby="motivationModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-04">
                            <h1 className="modal-title" id="motivationModalLabel">Fortaleciendo mi motivación</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-12">
                                    <p>
                                    Las personas que están tratando de perder peso a menudo experimentan cómo cosas como el desaliento y
                                    el pensamiento inútil pueden sabotear sus esfuerzos de control de peso. Identificar y comprender sus
                                    patrones de pensamiento puede ser el primer paso para mitigar los pensamientos inútiles y superar el
                                    desaliento. A medida que lea las preguntas a continuación, preste atención a su proceso de pensamiento
                                    y utilice los consejos como guía para superar los contratiempos futuros. Puede ser útil revisar esta
                                    sección con un miembro de la familia o un amigo, ya que podrían tener ideas útiles para completar su
                                    diario.
                                    </p>
                                </div>

                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{width: '49%'}} className="plan-container-item">
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`motiva-01.jpeg`)} alt="plan-icon" />
                                        <div className="motiva-text">
                                        <p>Pensamientos inútiles con los que a menudo lucho:</p>
                                        <ul>
                                            <li>
                                            ¿Mis expectativas son irreales?
                                            <br />
                                            ....................................................
                                            </li>
                                            <li>
                                            ¿Cómo puedo ajustar mis expectativas para estar mejor preparado para los contratiempos?
                                            <br />
                                            ....................................................
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`motiva-02.jpeg`)} alt="plan-icon" />
                                        <div className="motiva-text">
                                        <p>MOTIVACIÓN</p>
                                        <ul>
                                            <li>
                                            ¿Qué tan importante es trabajar para tener un peso más saludable para mi en este momento?
                                            <br />
                                            ....................................................
                                            </li>
                                            <li>
                                            ¿Cómo mejorará mi vida, o cómo me hará una mejor persona?
                                            <br />
                                            ....................................................
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`motiva-03.jpeg`)} alt="plan-icon" />
                                        <div className="motiva-text">
                                        <p>EVENTOS ESTRESANTES DE LA VIDA</p>
                                        <ul>
                                            <li>
                                            ¿Qué situaciones tienen más probabilidades de afectarme negativamente?
                                            <br />
                                            ....................................................
                                            </li>
                                            <li>
                                            ¿Cuál es mi plan para estas situaciones?
                                            <br />
                                            ....................................................
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div style={{width: '49%'}} className="plan-container-item">
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`motiva-04.jpeg`)} alt="plan-icon" />
                                        <div className="motiva-text">
                                        <p>ESTADO DE ÁNIMO BAJO</p>
                                        <ul>
                                            <li>
                                            Si mi estado de ánimo baja, ¿con quién puedo contactar?
                                            <br />
                                            ....................................................
                                            </li>
                                            <li>
                                            Si me siento deprimido, ¿dónde puedo hablar de apoyo?
                                            <br />
                                            ....................................................
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`motiva-05.jpeg`)} alt="plan-icon" />
                                        <div className="motiva-text">
                                        <p>INTERACCIONES SOCIALES</p>
                                        <ul>
                                            <li>
                                            ¿Cómo puedo responder a los comentarios críticos de otros?
                                            <br />
                                            ....................................................
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="plan-container-item-c">
                                        <img src={getImg(`motiva-06.jpeg`)} alt="plan-icon" />
                                        <div className="motiva-text">
                                        <p>EVENTOS RELACIONADOS CON COMER</p>
                                        <ul>
                                            <li>
                                            ¿Qué eventos tienden a afectar mis antojos?
                                            <br />
                                            ....................................................
                                            </li>
                                            <li>
                                            ¿Cuál es mi plan para hacer frente a estas situaciones?
                                            <br />
                                            ....................................................
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    4. Kevin D.Hall, PhD, Ross A. et al. Dynamic interplay between circuits requating body weight.
                                    American Journal of Public Health. July 2014, Vol 104:7.1157-1159
                                    </p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mt1 && (
                    <div id="controlGuide" tabindex="-1" aria-labelledby="controlGuideLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-06">
                            <h1 className="modal-title" id="controlGuideLabel">Mi guía para el control del peso a largo plazo<sup>5</sup></h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-12">
                                    <h3 style={{color: '#1E72B9'}} >Enhorabuena, está en el buen camino en tu viaje de liraglutida, ¡y eso es
                                    una victoria!</h3>
                                    <h3 style={{color: '#1E72B9'}} >¿Qué es el peso meseta?<sup>5</sup></h3>
                                    <p>
                                    Si está usando un medicamento como parte de su plan de control de peso o siguiendo solo un plan de
                                    alimentación y
                                    actividad física, en algún momento la tasa de pérdida de peso se estabilizará gradualmente hasta que
                                    alcance lo que se
                                    denomina una meseta de peso. La pérdida de peso comienza rápido y lo suficientemente pronto, comienza
                                    a disminuir más y
                                    más hasta que se detiene:
                                    </p>
                                    <p>
                                    Cuando se establece algo como la meseta del peso, muchos lo ven como un contratiempo. Debe recordar
                                    estar atento y
                                    mantener metas realistas, como lo ha estado haciendo todo el tiempo. El control de peso a largo plazo
                                    tiene muchos
                                    beneficios que van más allá de la pérdida de peso y el mantenimiento del peso. Al comprometerse a un
                                    plan de manejo a
                                    largo plazo, puede ayudar a prevenir y mejorar muchas complicaciones relacionadas con el peso al
                                    tratar de alcanzar sus
                                    metas de salud deseadas. Liraglutida puede ayudarlo a mantener su peso, ya que sigue trabajando
                                    incluso después de la
                                    meseta.
                                    </p>
                                    <h3 style={{color: '#1E72B9'}}>¿Qué puede hacer al respecto?</h3>
                                    <p>
                                    REFLEXIONE SOBRE SU ESTILO DE VIDA FRENTE A SUS VALORES Si se siente decepcionado porque su pérdida de
                                    peso se ha
                                    estancado, pregúntese: ¿Estoy disfrutando de este estilo de vida?¿Puedo mantenerlo? ¿Puedo tomar menos
                                    calorías en
                                    general y seguir disfrutando de mi vida? ¿Cómo se adaptan mis respuestas a mis valores
                                    fundamentales?<sup>9</sup>.
                                    </p>
                                    <p>
                                    TENGA CUIDADO CON PENSAMIENTOS INÚTILES COMO “TAL VEZ NO PUEDO HACER ESTO” Trate de recordar que los
                                    pensamientos pueden
                                    influir en la forma en que nos sentimos y actuamos. Pueden llevar a sentimientos de confusión,
                                    desilusión, frustración,
                                    infelicidad, fracaso e incluso resignación.
                                    </p>
                                    <p>
                                    ADOPTAR UN PENSAMIENTO DIFERENTE Por ejemplo, ¿puede enfocarse en el disfrute que está obteniendo de
                                    su estilo de vida
                                    saludable con alguna pérdida de peso como un bono adicional?
                                    </p>
                                    <p>
                                    RECUERDE
                                    </p>
                                    <p>
                                    Su médico puede ayudarlo a determinar qué puede hacer a continuación
                                    </p>
                                    <p>
                                    Es posible que haya alcanzado su “mejor peso” y, por lo tanto, es el momento adecuado para pasar a la
                                    fase de
                                    mantenimiento del peso. Esto significa aprender cómo mantener su pérdida de peso estableciendo nuevos
                                    objetivos que son
                                    específicos para mantener los cambios que ha realizado. Pídale a su médico que lo ayude a hacer un
                                    plan de mantenimiento
                                    del peso.
                                    </p>
                                </div>
                                <h3>CONSULTA A TU MÉDICO</h3>
                                <img src={getImg(`grafica-guide.png`)} className="w-50 d-block mx-auto" alt="Persona femenina"/>

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    Referencias: 5. Kevin D. Hall, et al. Maintenance of lost weight and long.term management of Obesity.
                                    Med Clin N Am 102
                                    (2018) 183-197. 9. Sharma Freedholf 2010. Best Weight p.86.
                                    </p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mt2 && (
                    <div id="applicationModal" tabindex="-1" aria-labelledby="applicationModalLabel"
                    aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-06">
                            <h1 className="modal-title" id="applicationModalLabel">¿Cómo aplicar? Instrucciones de la pluma</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-6">
                                    <div className="card mb-3 border-0">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                        <img src={getImg(`como-aplicar1.png`)}  className="img-fluid rounded-start" alt=""/>
                                        <img src={getImg(`como-aplicar1.png`)} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="card-body">
                                            <p className="card-text">
                                            Revise la etiqueta de la pluma para asegurarse que sea su pluma Liraglutida (liraglutida 3.0
                                            mg). Luego retire la tapa de la pluma y verifique que Liraglutida en su pluma sea transparente
                                            e incolora.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card mb-3 border-0">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                        <img src={getImg(`como-aplicar3.png`)} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="card-body">
                                            <p className="card-text">
                                            Antes de la primera inyección con cada nueva pluma, verifique el flujo. Gire el selector de
                                            dosis para seleccionar el símbolo de verificación de flujo. Sostenga la pluma con la aguja
                                            apuntando hacia arriba. Presione y mantenga presionado el botón de dosis. Asegúrese de que
                                            aparezca una gota en la punta de la aguja.<sup>8</sup>
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card mb-3 border-0">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                        <img src={getImg(`como-aplicar5.png`)} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="card-body">
                                            <p className="card-text">
                                            Inserte la aguja en la piel. Mantenga presionado el botón de dosis hasta que el contador de
                                            dosis vuelva a 0. Deje la aguja en la piel y cuente lentamente hasta 6. Luego retire la aguja
                                            de la piel. Cuente lentamente 1-2-3-4-5-68
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="card mb-3 border-0">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                        <img src={getImg(`como-aplicar2.png`)} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="card-body">
                                            <p className="card-text">
                                            Revise la etiqueta de la pluma para asegurarse que sea su pluma Liraglutida (liraglutida 3.0
                                            mg). Luego retire la tapa de la pluma y verifique que Liraglutida en su pluma sea transparente
                                            e incolora.<sup>8</sup>
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card mb-3 border-0">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                        <img src={getImg(`como-aplicar4.png`)} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="card-body">
                                            <p className="card-text">
                                            Gire el selector de dosis para seleccionar la dosis que necesita (0.6 mg, 1.2 mg, 1.8 mg o 3.0
                                            mg). Si selecciona una dosis incorrecta por error, gire el selector de dosis hacia atrás o
                                            hacia adelante para seleccionar la dosis correcta.<sup>8</sup>
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card mb-3 border-0">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                        <img src={getImg(`como-aplicar6.png`)} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="card-body">
                                            <p className="card-text">
                                            Después de la inyección, deslice cuidadosamente la aguja en la tapa exterior de la aguja. Una
                                            vez que la aguja esté cubierta, desenrosque la aguja y deséchela con cuidado. A continuación,
                                            vuelva a colocar la tapa de la pluma.<sup>8</sup>
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <h3 className="text-center">CONSULTA A TU MÉDICO</h3>
                                <p className="text-center">
                                    Para mayor información, consulte el instructivo anexo al producto
                                </p>

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    8. Saxenda®, Información Para Prescribir, 16.08.2018 (18330041500042).
                                    </p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mt3 && (
                    <div id="stretgyModal" tabindex="-1" aria-labelledby="stretgyModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-07">
                            <h1 className="modal-title" id="stretgyModalLabel" style={{textAlign: 'center'}}>Mis estrategias para gestionar
                                situaciones sociales</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="modal-social">
                                    <p>
                                    A veces, al comer fuera o en una reunión social, no podrá controlar la comida que se sirve. En estas
                                    situaciones,
                                    recuerde que debe estar atento y concentrarse en sus objetivos a largo plazo
                                    </p>
                                    <h3>Mis estrategias para gestionar situaciones sociales</h3>
                                    <p>
                                    ¿Cómo puedo sentirme cómodo cuando salgo a comer o me reúno en reuniones sociales?
                                    </p>
                                    <h3>Comiendo fuera</h3>
                                    <ul>
                                    <li>Intentaré llamar con anticipación para obtener el menú o buscar en línea, para poder planificar
                                        cómodamente qué comer</li>
                                    <li>Intentaré comer algo similar o un poco más de lo que normalmente comería en casa</li>
                                    <li>Intentaré prestar atención a mis sentimientos de plenitud. Si me siento confiado, puedo planear
                                        omitir un curso o
                                        dejar la comida en mi plato</li>
                                    <li>Intentaré practicar una alimentación consciente y activar todos mis sentidos para poder disfrutar
                                        aún más de mi
                                        comida.</li>
                                    <li>Intentaré tomar agua mineral o sin gas durante el día/la noche, en lugar de bebidas alcohólicas o
                                        azucaradas.</li>
                                    <li>Recordaré ser amable conmigo mismo, sin importar lo que coma afuera, me daré crédito por
                                        intentarlo (es una
                                        oportunidad para aprender)<sup>5</sup></li>
                                    </ul>
                                    <h3>Reuniones sociales</h3>
                                    <ul>
                                    <li>Intentaré llamar al anfitrión con antelación y preguntar por el menú, para poder planear
                                        cómodamente qué comer</li>
                                    <li>Trataré de ofrecer traer un plato o un curso de comida para poder compartir mis platos más
                                        saludables con otros</li>
                                    <li>Intentaré rechazar las ofertas de comer más diciendo: “No, gracias, ya he tenido suficiente”. Diré
                                        esto tantas veces como
                                        sea necesario para que el
                                        mensaje llegue</li>
                                    <li>Si alguien me pregunta por qué estoy evitando ciertos alimentos, trataré de responder: “Sólo estoy
                                        tratando de comer más
                                        sano” o “Sólo estoy observando lo que como”. No tengo que dar más explicaciones.</li>
                                    <li>Si me voy de vacaciones, mantendré las plumas liraglutida abiertas en un lugar fresco<sup>6</sup>
                                    </li>
                                    </ul>
                                </div>

                                <h3 className="text-center">CONSULTA A TU MÉDICO</h3>

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    5. Kevin D. Hall, et al. Maintenance of lost weight and long.term management of Obesity. Med Clin N Am
                                    102 (2018) 183-197.
                                    </p>
                                    <p>
                                    6. Heike Münzberg, Emily Qualls-Creekmore, et al. Hedonics Act in Unison with the homeostatic System
                                    to unconsciously control Body weight. Front. Nutr. 3:6. Doi: 10.3389/fnut.2016.00006. Feb 2016, Vol.
                                    3, Article 6.
                                    </p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mt4 && (
                    <div id="tipActive" tabindex="-1" aria-labelledby="tipActiveLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-obesity">
                            <h1 className="modal-title" id="tipActiveLabel">Consejos para ser más activo</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div>
                                    <p>
                                    Mantenerse activo es la clave para perder peso y mantenerlo. En la siguiente sección, puede encontrar
                                    algunos consejos útiles y fáciles de seguir para ayudarlo a salir y moverse. No se olvide, dormir bien
                                    y recuperarse es tan importante como hacer ejercicio durante el día.
                                    </p>
                                </div>

                                <h3>CONSULTA A TU MÉDICO</h3>

                                <img src={getImg(`consejo-activo1.png`)} alt="" className="img-fluid"/>
                                <img src={getImg(`consejo-activo2.png`)} alt="" className="img-fluid"/>

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    5. Kevin D. Hall, et al. Maintenance of lost weight and long.term management of Obesity. Med Clin N Am
                                    102 (2018) 183-197
                                    </p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mt5 && (
                    <div id="foodModal" tabindex="-1" aria-labelledby="foodModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-obesity">
                            <h1 className="modal-title" id="foodModalLabel">Comida</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <div className="col-6">
                                    <p>
                                    Probando el método del plato<br/>
                                    ¿Cómo puedo regular mejor qué y cuánto como?
                                    </p>
                                </div>

                                <h3 className="text-center">CONSULTA A TU MÉDICO</h3>

                                <img src={getImg(`comida-modal1.png`)} className="img-fluid" alt="comida" />
                                <img src={getImg(`comida-modal2.png`)} className="w-75 d-block mx-auto" alt="comida" />
                                <img src={getImg(`comida-modal3.png`)} className="w-75 d-block mx-auto" alt="comida" />

                                <blockquote>
                                    <h4>REFERENCIAS</h4>
                                    <p>
                                    7. F. Xavier Pi-Sunyer, M.D., M.P.H, William H M.D., Ph.D, et al. NHLBI Obesity Education Iniatiative
                                    Expert Panel on the identification, Evaluation, and treatment of overweight and Obesity in Adults.
                                    No.98-4083
                                    </p>
                                </blockquote>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    )
}
