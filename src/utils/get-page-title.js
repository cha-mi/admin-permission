import defaultSettings from '@/settings'

const title = defaultSettings.title || '标题'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}
