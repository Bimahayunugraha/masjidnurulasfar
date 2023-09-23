import moment from "moment/min/moment-with-locales";
import "moment/locale/id";
moment.locale("id");

export const formatCommonDate = (date) => {
    return moment(date).fromNow();
};

export const formatDefaultDate = (date) => {
    return moment(date).format("LL");
};

export const formatDefaultDateTime = (date) => {
    return moment(date).format("LL, LT");
};
