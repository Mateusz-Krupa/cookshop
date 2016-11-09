'use strict'
export const removeCharacter = () => ({
    type: "BACKSPACE"
});

export const insertCharacter =  (character: string) => ({
    type: 'CHARACTER_TYPED',
    character
})