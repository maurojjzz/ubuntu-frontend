import React from 'react';
import PublicacionesCard from '../../Cards/PublicacionesCard';

const publicaciones = [
    {
        title: 'Inversiones Éticas: Más que ganancias',
        reel: 'Este es un breve resumen del reel.',
        date: '2023-07-01',
        text: 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n\nEstas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n\nEl atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n\nContrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n\nNo obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como "sostenibles" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n\nEn conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.',
    },
    {
        title: 'Publicación 2',
        reel: 'Este es otro breve resumen del reel.',
        date: '2023-07-02',
        text: 'Este es el primer párrafo de la publicación 2.\n\nEste es el segundo párrafo de la publicación 2.',
    },
];

const ViewPublicaciones = () => {
    return (
        <div>
            {publicaciones.map((publicacion, index) => (
                <PublicacionesCard
                    key={index}
                    title={publicacion.title}
                    reel={publicacion.reel}
                    date={publicacion.date}
                    text={publicacion.text}
                />
            ))}
        </div>
    );
};

export default ViewPublicaciones;