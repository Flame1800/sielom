import moment from "moment";
import 'moment/locale/ru'

export default (date) => moment(date).calendar()