import { ButtonColor } from "../../../../shared-components/button/enum/button-color.enum";
import { ButtonType } from "../../../../shared-components/button/enum/button-type.enum";
import { IAppButton } from "../../../../shared-components/button/model/button.model";

export const SUBMIT_BUTTON_CONFIG: IAppButton = {
        id: 'submit',
        label: 'SHARED:BUTTON-COMPONENT:button--search-vinyl--label',
        ariaLabel: 'SHARED:BUTTON-COMPONENT:button--aria-label',
        type: ButtonType.SUBMIT,
        disabled: false,
        color: ButtonColor.PRIMARY
    
}
export const RESET_BUTTON_CONFIG: IAppButton = {
        id: 'RESET',
        label: 'SHARED:BUTTON-COMPONENT:button--reset-vinyl--label',
        ariaLabel: 'SHARED:BUTTON-COMPONENT:button--aria-label',
        type: ButtonType.RESET,
        disabled: false,
        color: ButtonColor.SECONDARY
    
}