/** @jsxImportSource @emotion/react */

import { FC, useState } from "react";
import { ActionButton } from "./ActionButton";
import { actionsPanelStyles } from "./actionsPanelStyles";
import LockIcon from '@mui/icons-material/Lock';
import LockClockIcon from '@mui/icons-material/LockClock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import WarningIcon from '@mui/icons-material/Warning';
import { useMutation, useQueryClient } from "react-query";
import queryKeys from "../../../../constants/queryKeys";
import { armHub, disarmHub, panicHub } from "../../dashboardHomeApi";
import { toast } from 'react-toastify';

export const ActionsPanel: FC = () =>
{
    const queryClient = useQueryClient();

    const [loadingStates, setLoadingStates] = useState({
        Night: false,
        Lockdown: false,
    });

    const resetLoadingStates = () =>
    {
        setLoadingStates({
            Night: false,
            Lockdown: false,
        });
    };

    const { mutate: armMutation } = useMutation((profile: string) => armHub(profile), {
        onSuccess: () =>
        {
            toast.success("Hub successfully armed");
            resetLoadingStates();
            queryClient.invalidateQueries(queryKeys.hub.status);
        },
        onError: () =>
        {
            toast.error("Hub could not be armed");
            resetLoadingStates();
        },
    });

    const { mutate: panicMutation, isLoading: isPanicLoading } = useMutation(() => panicHub(), {
        onSuccess: () =>
        {
            toast.info("Hub successfully panicked");
            resetLoadingStates();
            queryClient.invalidateQueries(queryKeys.hub.status);
        },
        onError: () =>
        {
            toast.error("Hub could not be panicked");
            resetLoadingStates();
        },
    });

    const armMutationHandler = (profile: string) =>
    {
        setLoadingStates(prev => ({ ...prev, [profile]: true }));
        armMutation(profile);
    };

    const { mutate: disarmMutation, isLoading: isDisarmLoading } = useMutation([queryKeys.hub.disarm],
        () => disarmHub(),
        {
            onSuccess: () =>
            {
                queryClient.invalidateQueries(queryKeys.hub.status);
                toast.success("Hub successfully disarmed");
            },
            onError: () =>
            {
                toast.error("Hub could not be disarmed");
            }
        }
    );


    return (
        <div css={actionsPanelStyles}>
            <ActionButton title="ARM NIGHT" isLoading={loadingStates.Night} onClick={() => armMutationHandler("Night")} icon={<LockClockIcon fontSize="large" />} />
            <ActionButton title="ARM LOCKDOWN" isLoading={loadingStates.Lockdown} onClick={() => armMutationHandler("Lockdown")} icon={<LockIcon fontSize="large" />} />
            <ActionButton title="DISARM" isLoading={isDisarmLoading} onClick={disarmMutation} icon={<LockOpenIcon fontSize="large" />} />
            <ActionButton className="panic-button" title="PANIC" isLoading={isPanicLoading} onClick={panicMutation} icon={<WarningIcon fontSize="large" color="error" />} />
        </div>
    );
};