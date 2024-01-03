/** @jsxImportSource @emotion/react */

import { Modal } from "@mui/base";
import { Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { BackgroundShadow } from "../../views/DashboardHome/components/BackgroundShadow/BackgroundShadow";
import { centerModalStyles } from "./centerModalStyles";

type CenterModalProps = {
    title: string;
    isOpen: boolean;
    handleClose: () => void;
    children: ReactNode;
};

export const CenterModal: FC<CenterModalProps> = ({ title, isOpen, handleClose, children }) => 
{
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <BackgroundShadow onClick={handleClose}>
                {/* "event.stopPropagation()" prevents event bubbling to BackgroundShadow. 
                  This ensures the modal doesn't close when clicking on its content. */}
                <div css={centerModalStyles} onClick={(event) => event.stopPropagation()}>
                    <div className="modal-content">
                        <Typography className="modal-title" variant='h5'>
                            {title}
                        </Typography>

                        {children}
                    </div>
                </div>
            </BackgroundShadow>
        </Modal>
    );
};