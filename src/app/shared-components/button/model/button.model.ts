import { ButtonColor } from "../enum/button-color.enum";
import { ButtonType } from "../enum/button-type.enum";

export interface IAppButton {
    id?: string; // Set id for custom button
    label: string; // Set label for custom button
    ariaLabel: string; // Set aria label attribute for accessibility
    type: ButtonType | string; // Set button type reset | submit | button
    disabled?: boolean; // Enabled/Disabled button
    color?: ButtonColor; // Set color button primary | secondary | danger
} 