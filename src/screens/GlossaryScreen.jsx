import * as React from 'react';
import '../css/GlossaryScreen.css'
import Tree from '../components/Tree';
import { styled } from '@mui/system';
import { Globals } from "@react-spring/shared";
import ScrollContainer from 'react-indiana-drag-scroll'
import { useTheme } from '@mui/material/styles';


Globals.assign({
    frameLoop: "always",
});

const TreeText = styled('div')(({ theme }) => ({
    "fontWeight": 400,
    "maxWidth": "80vw",
    //wrap text
    "whiteSpace": "pre-wrap",
    color: theme.palette.text.secondary,

}));

const GlossaryScreen = () => {
    const theme = useTheme();

    return (
        // <Container>
        <ScrollContainer className='scroll-container' style={{
            "fontFamily": "ui-monospace, monospace",
            margin: "3rem",
            padding: 0,
            width: "calc(100vw - 6rem)",
            height: "calc(100vh - 6rem)",
            color: theme.palette.text.primary,
            lineHeight: "21px",
            "--webkit-user-elect": "none",
            overflow: "hidden",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Tree name="fragmentos">
                <Tree name="narrativa">
                    <TreeText>
                        Sus.fem.<br />
                        La acción o facultad de narrar.
                        Relato
                    </TreeText>
                    <Tree name="fabular">
                        <Tree name="gesto">
                            <TreeText>
                                1. Movimiento que se hace con el rostro<br />
                                2. Proceso o resultado de hacer, realizar, obrar o encargarse, en particular si es memorable, se efectúa a través de cierto esfuerzo, o expresa una actitud o formalidad ante alguien o algo.<br />
                                3. Movimiento de partes del cuerpo, en especial la cara y las manos, destinado a comunicar algo o a reforzar la expresión.
                            </TreeText>
                        </Tree>
                    </Tree>
                    <Tree name="gestar">
                        <TreeText>
                            1. Llevar el embrión (y luego feto) en el útero y sustentarlo desde la concepción hasta el parto.<br />
                            2. Por analogía, llevar o dar forma y existencia a algo desde su idea o concepto inicial hasta su posterior desarrollo o realización.
                        </TreeText>
                    </Tree>
                    <Tree name="con-fabular">
                        <Tree name="insistir">
                            <TreeText>
                                1. Decir o hacer algo repetidamente.<br />
                                2. Empeñarse, defender firmemente una idea o acto.<br />
                                3. Poner énfasis en una idea. <br />
                                4. Apoyarse una cosa sobre otra. <br />
                            </TreeText>
                            <Tree name="acontecimiento">
                                <TreeText>
                                    1. Hecho o suceso, principalmente si es importante. <br />
                                    2. De acontecer: Tener lugar un hecho, evento o suceso. <br />
                                </TreeText>
                                <Tree name="estar">
                                    <TreeText>
                                        1. Existir en un espacio o lugar. <br />
                                        2. Hallarse algo o alguien en un estado transitorio o permanente. <br />
                                    </TreeText>
                                    <Tree name="bien-estar">
                                        <TreeText>
                                            1. Bienestar: Un estado que provisiona buena posición económica y una vida próspera <br />
                                            2. Un estado de gran satisfacción y gozo. <br />
                                            3. Una buena salud física y psíquica. <br />
                                        </TreeText>
                                    </Tree>
                                </Tree>
                            </Tree>
                        </Tree>
                    </Tree>
                </Tree>
                <Tree name="montaje">
                    <TreeText>
                        Acción y resultado de combinar las diferentes partes algo para lograr un todo.
                    </TreeText>
                    <Tree name="conjurar">
                        <Tree name="re-existir">
                            <TreeText>
                                1. Existir: Tener realidad; ser real o verdadero; tener existencia. <br />
                                2. Encontrarse o tener presencia en un sitio determinado. <br />
                                3. Estar vivo, poseer vida, vivir. <br />
                            </TreeText>
                        </Tree>
                    </Tree>
                </Tree>
                <Tree name="palabra">
                    <TreeText>
                        Unidad mínima de significado de una lengua o idioma.
                    </TreeText>
                    <Tree name="relacionar">
                        <TreeText>
                            Epistemología de los afectos y efectos, la ternura y lo sensible.
                        </TreeText>
                        <Tree name="afectación">
                            <TreeText>
                                1. Acción y efecto de afectar. <br />
                                2. Afectar: Producir un efecto, cambio o alteración en algo o en alguien. Modificar, influir, alterar o mudar su forma o comportamiento. <br />
                                3. Causar una impresión o impacto, especialmente de tipo emocional. <br />
                            </TreeText>
                            <Tree name="erótica">
                                <TreeText>
                                    1. Relacionado con el amor sensual. <br />
                                    2. Que provoca placer o incita a él. <br />
                                    3. Sensorial: Propio de o relativo a los sentidos, a la sensibilidad (facultad de sentir y percibir) o las sensaciones. <br />
                                </TreeText>
                                <Tree name="sensible">
                                    <Tree name="sentido">
                                        <TreeText>
                                            1. adjetivo. Que expresa o manifiesta con sinceridad un sentimiento. "mi más sentido pésame" <br />
                                            2. Capacidad de percibir estímulos físicos externos e internos mediante ciertos órganos que los transmiten al  sistema nervioso. <br />
                                            3. "los sentidos son cinco: vista, oído, gusto, olfato y tacto" <br />
                                            4. sexto sentido <br />
                                            5. Habilidad especial o intuición que tiene una persona para percibir realidades que pasan inadvertidas a otros y que le capacita para una determinada actividad o asunto. "tiene un sexto sentido para las relaciones sociales" <br />
                                            6. Capacidad de personas y animales para apreciar o percibir correctamente algo específico. <br />
                                            7. "sentido de la orientación" <br />
                                            8. Manera particular que tiene cada persona de sentir o entender una cosa; en especial aquellas que
                                            implican una actitud moral. <br />
                                            9. "sentido de la justicia" <br />
                                            10. Consciencia del mundo exterior y del propio ser. <br />
                                            11. "perder el sentido" <br />
                                            12. Razón de ser, finalidad o lógica que tiene una cosa. <br />
                                            13. "el sentido de la vida" <br />
                                            14. Significado de una obra, un texto, un elemento lingüístico, etc., dentro de su contexto. <br />
                                            15. "afiebrado, decía cosas sin sentido" <br />
                                            16. sentido figurado <br />
                                            17. Significado atribuido a una palabra o expresión distinto del que le corresponde normalmente o en
                                            general; se establece habitualmente por asociaciones metafóricas. <br />
                                            18. Orientación en que se mueve una fuerza o cuerpo, o dirección que tiene una indicación, línea,
                                            camino, etc. <br />
                                            19. "sentido de la marcha” <br />
                                        </TreeText>
                                    </Tree>
                                </Tree>
                            </Tree>
                            <Tree name="deseo">

                            </Tree>

                        </Tree>

                    </Tree>
                </Tree>
            </Tree>
        </ScrollContainer>

    )
}

export default GlossaryScreen