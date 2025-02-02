import { Box, Button, Modal, Typography } from "@mui/material";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    modalTitle: string;
    modalDescription: string;
}

export default function ModalComponent({ isOpen, onClose, onConfirm, modalTitle, modalDescription }: ModalProps) {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',    
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: '5px',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                    {modalTitle}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                    {modalDescription}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 2,
                    }}
                >
                    <Button onClick={onClose} sx={{ mt: 2 }}>Não</Button>
                    <Button onClick={onConfirm} sx={{ mt: 2, ml: 2 }} variant="contained">Sim</Button>
                </Box>
            </Box>
        </Modal>
    )
}