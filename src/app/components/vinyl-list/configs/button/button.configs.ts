import { ButtonColor } from "../../../../shared-components/button/enum/button-color.enum";
import { ButtonType } from "../../../../shared-components/button/enum/button-type.enum";
import { IAppButton } from "../../../../shared-components/button/model/button.model";

export const SUBMIT_BUTTON_CONFIG: IAppButton = {
        id: 'submit',
        label: 'Clicca',
        ariaLabel: 'aria label accessibility',
        type: ButtonType.SUBMIT,
        disabled: false,
        color: ButtonColor.PRIMARY
    
}