import { templateInstance } from "../instance"

export const cardImage = (post) => {
    const clone = templateInstance('card-image')
    const imageSrc = clone.children[0].src
    const imageAlt = clone.children[0].alt

    console.log(imageSrc)
    console.log(imageAlt)

    return clone
}