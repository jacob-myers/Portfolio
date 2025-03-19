import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import QRCode from "react-qr-code";

import { IoMdDownload } from "react-icons/io";
import PropTypes from 'prop-types';


DownloadDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    downloadLink: PropTypes.string.isRequired
}

function DownloadDialog(props) {
    const { open, onClose, downloadLink } = props;

  return (
    <Dialog onClose={onClose} open={open} slotProps={{
        paper: { sx:{ backgroundColor:'rgb(41, 41, 41)' } }
    }}
    >
        <DialogTitle style={{textAlign: "center", fontWeight: "500", color: 'rgb(238, 238, 238)'}}>Download</DialogTitle>
        <DialogContent>
            <Col className="projects-projects-col" style={{ alignItems:'center' }}>
                <QRCode 
                    size={256} 
                    value={downloadLink}
                    style={{border: '5px solid white', color: 'red', marginBottom: '15px'}}
                />
                <p style={{ fontSize:"1.1em", width: '400px', textAlign: 'center'}} className="text-bold">
                    To download the APK, scan the QR code with your phone or use the download button.
                </p>
                <Button
                    className="project-buttons"
                    variant="primary"
                    href={downloadLink}
                    target="_blank"
                    style={{ maxWidth: "200px", marginBottom:"10px" }}
                >
                    <IoMdDownload size={18} />
                    &nbsp;Download APK
                </Button>
            </Col>
        </DialogContent>
    </Dialog>
  );
}

DownloadDialogButton.propTypes = {
    downloadLink: PropTypes.string.isRequired
}

function DownloadDialogButton(props) {
    const [open, setOpen] = useState(false);

    const handleClose = (value) => {
        setOpen(false);
    }

    return (
        <>
            <Button onClick={() => {setOpen(true)}} style={{marginLeft: "10px"}} className="project-buttons">
                <IoMdDownload size={20} style={{marginBottom: "3px"}}/>&nbsp;Download
            </Button>
            <DownloadDialog 
                open={open} 
                onClose={handleClose}
                downloadLink={props.downloadLink}
            />
        </>
    )
}

export default DownloadDialogButton;