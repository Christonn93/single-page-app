import { templateInstance } from "../instance"

export const cardHeader = (item) => {
    const clone = templateInstance('card-title')
    clone.querySelector('h5').innerText = item.title
    return clone
}