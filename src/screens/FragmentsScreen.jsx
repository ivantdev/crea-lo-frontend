import React, { useMemo } from 'react';
import '../css/FragmentsScreen.css'
import Tree from '../components/Tree';
import { styled } from '@mui/system';
import { Globals } from "@react-spring/shared";
import ScrollContainer from 'react-indiana-drag-scroll'
import { useTheme } from '@mui/material/styles';
import { useDeviceDetect } from "../hooks/";
import { useQuery, gql } from '@apollo/client';


// necessary for react-spring and react-three-drei to work
Globals.assign({
    frameLoop: "always",
});

const Container = styled('div')(({ theme }) => ({
    "fontFamily": "ui-monospace, monospace",
    padding: "4rem",
    color: theme.palette.text.primary,
    lineHeight: "21px",
    "--webkit-user-elect": "none",
    userSelect: "none",
}));

const GET_FRAGMENTS = gql`
    query GetFragments {
        concepts {
            data {
                id
                attributes {
                    name
                    definitions {
                        data {
                            id
                            attributes {
                                content
                            }
                        }
                    }
                    concepts {
                        data {
                            id
                        }
                    }
                }
            }
        }
    }
`

const FragmentsScreen = () => {
    const theme = useTheme();
    const { isMobile } = useDeviceDetect();
    const { loading, error, data } = useQuery(GET_FRAGMENTS);
    if (!loading) {
        console.log(data.concepts.data)
    }

    //appropriate container for mobile or desktop
    const AppropiateContainer = useMemo(() => ({ children }) => {
        return isMobile ? <Container>{children}</Container> : <ScrollContainer className='scroll-container' style={{
            "fontFamily": "ui-monospace, monospace",
            padding: "4rem",
            width: "calc(100vw - 6rem)",
            height: "calc(100vh - 2rem)",
            color: theme.palette.text.primary,
            lineHeight: "21px",
            "--webkit-user-select": "none",
            overflow: "hidden",
            userSelect: "none",
        }}>{children}</ScrollContainer>
    }, [isMobile])

    return (
        <AppropiateContainer>
            {!loading && <Tree treeData={data.concepts.data} currentNode={data.concepts.data[0]} />}

        </AppropiateContainer>

    )
}

export default FragmentsScreen