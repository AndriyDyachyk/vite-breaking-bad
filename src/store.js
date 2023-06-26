import { reactive } from "vue";

export const store = reactive({
    apiUrl: `https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10`,
    apiType1Url: "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1",
    apiType2Url: "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types2",
    pokemonsList: [],
    listaTipo1: [],
    type1PokeValue: '',
    type1Searched: '',
    listaTipo2: [],
    type2PokeValue: '',
    type2Searched: '',
    page: 1,
    maxPages: []
})