import moment from 'moment'

export function getTimeForSlug() {
    return moment().format('YYYYMMDDHHmmss');
}