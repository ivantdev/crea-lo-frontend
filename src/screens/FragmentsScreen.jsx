import React, { useMemo, useEffect, useState } from 'react';
import '../css/FragmentsScreen.css'
import Tree from '../components/Tree';
import { styled } from '@mui/system';
import { Globals } from "@react-spring/shared";
import ScrollContainer from 'react-indiana-drag-scroll'
import { useDeviceDetect } from "../hooks/";
import { useQuery } from '@apollo/client';
import { GET_CONCEPTS } from '../graphql/queries/concept';
import { useStaticFetch } from '../hooks/useStaticFetch'; 

// necessary for react-spring and react-three-drei to work
Globals.assign({
    frameLoop: "always",
});

const Container = styled('div')(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    padding: "clamp(20px, 10vw, 175px)",
    paddingTop: "clamp(80px, 10vw, 175px)",
    lineHeight: "25px",
    "--webkit-user-elect": "none",
    userSelect: "none",
    overflowX: "scroll",
}));

const FragmentsScreen = () => {
    const STATIC = import.meta.env.VITE_STATIC
    const { loading, error, data } = STATIC === "1" ? useStaticFetch("/api/fragments/concepts.json") : useQuery(GET_CONCEPTS, {
        pollInterval: 500,
    });

    //create a hashmap of concept id to concept object
    const conceptMap = useMemo(() => {
        const conceptMap = {}
        if (!data) return conceptMap
        data.concepts.data.forEach(concept => {
            conceptMap[concept.id] = concept
        })
        return conceptMap
    }, [data])

    //appropriate container for mobile or desktop

    return (
        <>
            <div id="fragments-background" />
            <Container style={{ maxWidth: "1200px", margin: "0 auto"}}>
                <h1
                    style={{
                        fontWeight: "800",
                        fontSize: "2.2rem",
                        lineHeight: "46px",
                    }}
                    >
                    Glosario Crealo
                </h1>
                {
                    STATIC !== "1" &&
                    <p className='parrafo' style={{ fontSize: "1.2rem", fontWeight: "500"}}>
                        Aquí puedes añadir algún concepto o definición que quieras, sólo haz clic en el lápiz y allí podrás editar.
                    </p>
                }
                {!loading && <Tree treeData={conceptMap} defaultOpen={true} currentNode={data.concepts.data.find(concept => concept.attributes.name == 'Fragmentos')} />}
            </Container>
        </>

    )
}

export default FragmentsScreen