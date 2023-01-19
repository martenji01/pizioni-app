import { getUserLocale } from 'get-user-locale';
import it from './it.json'
import en from './en.json'
import _ from 'lodash'

const translations = {
    it,
    en
}

const userLocale = {languageTag:getUserLocale().substring(0,2)}
const fallback = 'en'

console.log({userLocale})

const language = _.get(userLocale, 'languageTag', fallback )

export const translate = (name) =>{
    const translatedName = _.get(translations, `${language}.${name.toLowerCase()}`, name )
    console.log({language})
    console.log({translatedName})
    return translatedName
}

