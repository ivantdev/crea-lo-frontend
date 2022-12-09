import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import TreeItem from '@mui/lab/TreeItem'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const GlossaryScreen = () => {

    return (
        <ScrollContainer className='scroll-container container'>
            <TreeView
                aria-label="multi-select"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                multiSelect
                sx={{ height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                <TreeItem nodeId="1" label="Applications">
                    <TreeItem nodeId="2" label="Calendar" />
                    <TreeItem nodeId="3" label="Chrome" />
                    <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                    <TreeItem nodeId="6" label="MUI">
                        <TreeItem nodeId="7" label="src">
                            <TreeItem nodeId="8" label="index.js" />
                            <TreeItem nodeId="9" label="tree-view.js" />
                        </TreeItem>
                    </TreeItem>
                </TreeItem>
            </TreeView>
        </ScrollContainer>
    )
}

export default GlossaryScreen