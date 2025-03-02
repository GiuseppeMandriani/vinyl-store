import { IMaterialCustomButtonConfig } from "src/app/angular-material-components/button/src/material-custom-button/model/material-custom-button.interface";
import { DEFAULT_RESET_CONFIG, DEFAULT_SUBMIT_CONFIG } from "../../../../shared-components/button/configs/button.config";
import { ButtonColor } from "../../../../shared-components/button/enum/button-color.enum";
import { ButtonType } from "../../../../shared-components/button/enum/button-type.enum";
import { IAppButton } from "../../../../shared-components/button/model/button.model";

export const SUBMIT_BUTTON_CONFIG: IAppButton = {
        ...DEFAULT_SUBMIT_CONFIG,
}
export const RESET_BUTTON_CONFIG: IAppButton = {
        ...DEFAULT_RESET_CONFIG,
}
export const TEST_BUTTON_MATERIAL_BUTTON_CONFIG: IMaterialCustomButtonConfig = {
        label: 'CLICCA QUI',
        variant: 'raised',
        color: 'primary',
        disabled: false,
        type: 'button',
        ariaLabel: 'Click here',
        // icon
}