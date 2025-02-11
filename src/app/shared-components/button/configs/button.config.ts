import { ButtonColor } from "../enum/button-color.enum";
import { ButtonType } from "../enum/button-type.enum";
import { IAppButton } from "../model/button.model";

export const DEFAULT_CONFIG: IAppButton = {
    id: 'button', 
    label: 'Cerca il tuo vinile', 
    ariaLabel: 'aria-label-button',
    type: ButtonType.BUTTON,
    disabled: false,
    color: ButtonColor.PRIMARY
}

export const DEFAULT_SUBMIT_CONFIG: IAppButton = {
    id: 'submit',
    label: 'SHARED:BUTTON-COMPONENT:button--search-vinyl--label',
    ariaLabel: 'SHARED:BUTTON-COMPONENT:button--aria-label',
    type: ButtonType.SUBMIT,
    disabled: false,
    color: ButtonColor.PRIMARY
}

export const DEFAULT_RESET_CONFIG: IAppButton = {
    id: 'RESET',
    label: 'SHARED:BUTTON-COMPONENT:button--reset-vinyl--label',
    ariaLabel: 'SHARED:BUTTON-COMPONENT:button--aria-label',
    type: ButtonType.RESET,
    disabled: false,
    color: ButtonColor.SECONDARY
}