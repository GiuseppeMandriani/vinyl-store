import { IAppInput } from "../../../../shared-components/input/model/input.model";

export const INPUT_SEARCH_CONFIG: IAppInput = {
        id: 'search-id',
        name: 'search',
        value:'',
        type: 'text',
        label: 'SHARED:INPUT-COMPONENT:input-form--artist--label',
        placeholder: "SHARED:INPUT-COMPONENT:input-form--artist--placeholder",
        disabled: false,
        readonly: false,
        required: true,
        ariaLabel: 'SHARED:INPUT-COMPONENT:input-form--artist--aria-label',
        errorMessage: 'SHARED:ERROR-FEEDBACK-REQUIRED:required--message'
}