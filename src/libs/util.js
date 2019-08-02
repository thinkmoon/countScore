let util = {

};
util.title = function(title) {
    title = title ? title + ' - 篮球计分系统' : 'Copyright by Chauncey';
    window.document.title = title;
};

export default util;