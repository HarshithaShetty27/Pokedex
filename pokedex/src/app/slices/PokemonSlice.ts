import { createSlice } from "@reduxjs/toolkit";
import { PokemomTypeInitialState } from "../../utils/Types";

const  initialState : PokemomTypeInitialState = {};

export const PokemonSlice = createSlice({
    name : "pokemon",
    initialState,
    reducers: {},
});

export const {} = PokemonSlice.actions;