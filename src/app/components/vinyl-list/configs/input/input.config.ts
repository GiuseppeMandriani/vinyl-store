import { IAppInput } from "../../../../shared-components/input/model/input.model";

export const INPUT_SEARCH_CONFIG: IAppInput = {
        id: 'search-id',
        name: 'search',
        value:'',
        type: 'text',
        label: 'Cerca il tuo artista',
        placeholder: "Inserire il nome dell'artista",
        disabled: false,
        readonly: false,
        ariaLabel: 'Cerca il tuo artista',
}