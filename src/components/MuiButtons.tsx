import React from 'react'
import { Button, Stack , IconButton, ButtonGroup, ToggleButton, ToggleButtonClasses, ToggleButtonGroup,} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';


export const MuiButtons = () => {
    const [formats, setFormats] = useState<string[]>([]);
    const [anotherFormats, setAnotherFormats] = useState<String | null>(null);
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats)
    }
    const handleAnotherFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string|null)=>{
        setAnotherFormats(updatedFormats)
    }
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction={'row'}>
        <Button variant='text' href='https:/google.com/'>text</Button>
        <Button variant='contained' href='https:google.com/'>contained</Button>
        <Button variant='outlined'>outlined</Button>
    </Stack>
    <Stack spacing={2} direction={'row'}>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
    </Stack>
    <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant='outlined' color='primary'>Primary</Button>
        <Button variant='outlined' color='secondary'>Secondary</Button>
        <Button variant='outlined' color='error'>Error</Button>
        <Button variant='outlined' color='warning'>Warning</Button>
        <Button variant='outlined' color='info'>Info</Button>
        <Button variant='outlined' color='success'>Success</Button>
    </Stack>
    <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant='contained' size='small' color='primary'>Primary</Button>
        <Button variant='contained' size='medium' color='primary'>Primary</Button>
        <Button variant='contained' size='large' color='primary'>Primary</Button>
    </Stack>
    <Stack spacing={2} direction={'row'}>
        <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={()=>alert('clicked')}>send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} disableElevation>send</Button>
        <IconButton aria-label='send' color='success' size='small'><SendIcon/></IconButton>
    </Stack>
    <Stack direction={'row'}>
        <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='salignment button group'>
            <Button onClick={()=>alert('Left Clicked')}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </Stack>
    <Stack direction={'row'}>
        <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} color='success' orientation='horizontal' size='small'>
            <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value={'italic'} aria-label='italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton value={'underlined'} aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    <Stack direction={'row'}>
        <ToggleButtonGroup aria-label='text formatting' value={anotherFormats} onChange={handleAnotherFormatChange} color='success' orientation='vertical' size='small' exclusive>
            <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value={'italic'} aria-label='italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton value={'underlined'} aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    </Stack>
  )
}
