import { ButtonColor } from "../enum/button-color.enum";
import { ButtonType } from "../enum/button-type.enum";
import { IAppButton } from "../model/button.model";

export const DEFAULT_CONFIG: IAppButton = {
    id: 'button', 
    label: 'Clicca', 
    ariaLabel: 'aria-label-button',
    type: ButtonType.BUTTON,
    disabled: false,
    color: ButtonColor.PRIMARY
}