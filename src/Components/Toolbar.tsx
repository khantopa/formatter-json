import { Button, ButtonGroup, Container, IconButton } from '@mui/material';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DownloadIcon from '@mui/icons-material/Download';
import { FC } from 'react';

interface ToolbarProps {
  minify?: () => void;
  prettify?: () => void;
  download?: () => void;
  copy?: () => void;
}

const Toolbar: FC<ToolbarProps> = ({ minify, prettify, download, copy }) => {
  return (
    <Container
      color='primary'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transform: 'translateY(-100%)',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        background: '#000',
        color: 'white',
      }}
    >
      <ButtonGroup variant='contained'>
        {minify && (
          <IconButton color='inherit' onClick={minify}>
            <FormatAlignCenterOutlinedIcon />
          </IconButton>
        )}
        {prettify && (
          <IconButton color='inherit' onClick={prettify}>
            <SortOutlinedIcon />
          </IconButton>
        )}
        {copy && (
          <IconButton color='inherit' onClick={copy}>
            <FileCopyIcon />
          </IconButton>
        )}
        {download && (
          <IconButton color='inherit' onClick={download}>
            <DownloadIcon />
          </IconButton>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default Toolbar;
