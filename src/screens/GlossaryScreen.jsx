import * as React from 'react';
import Tree from '../components/Tree';
import styled from 'styled-components'
import '../App.css'
import { Globals } from "@react-spring/shared";


Globals.assign({
    frameLoop: "always",
});

export const Container = styled('div')`
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 14px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`

const GlossaryScreen = () => {
    return (
        <Container>
            <Tree name="main" defaultOpen>
                <Tree name="hello" />
                <Tree name="subtree with children">
                    <Tree name="hello" />
                    <Tree name="sub-subtree with children">
                        <Tree name="child 1" style={{ color: '#37ceff' }} />
                        <Tree name="child 2" style={{ color: '#37ceff' }} />
                        <Tree name="child 3" style={{ color: '#37ceff' }} />
                        <Tree name="custom content">
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 200,
                                    padding: 10,
                                }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        background: 'black',
                                        borderRadius: 5,
                                    }}
                                />
                            </div>
                        </Tree>
                    </Tree>
                    <Tree name="hello" />
                </Tree>
                <Tree name="world" />
                <Tree name={<span>🙀 something something</span>} />
            </Tree>
        </Container>
    )
}

export default GlossaryScreen